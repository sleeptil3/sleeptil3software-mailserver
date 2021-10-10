const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const config = require('./config');
const functions = require('./messages')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 8088
const { DEV_USER, DEV_PASS, PROD_USER, PROD_PASS } = config
const { plainCodelockr, htmlCodelockr } = functions
// NODEMAIL MIDDLEWARE

// PROD - Gmail
const transport = {
	host: 'smtp.gmail.com',
	port: 587,
	auth: {
		user: PROD_USER,
		pass: PROD_PASS
	}
}

// DEV - Nodemailer
// const transport = {
// 	host: "smtp.mailtrap.io",
// 	port: 2525,
// 	auth: {
// 		user: DEV_USER,
// 		pass: DEV_PASS
// 	}
// };

// NODEMAIL TRANSPORTER
const transporter = nodemailer.createTransport(transport)

transporter.verify((reject, resolve) => reject ? console.error('REJECTED\n\n', reject) : console.log("Nodemailer Verified!\n\n"))

// EXPRESS MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	console.log('MIDDLEWARE LOG', req.body)
	next()
})

// ROUTES
app.use('/', router);
app.get('/', (req, res) => {
	res.json({
		status: 'SUCCESS',
		requestType: 'GET'
	})
})

router.post('/send', (req, res, next) => {
	const service = req.body.service
	const action = req.body.action
	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const username = req.body.username
	const emailAddress = req.body.emailAddress
	const newPassword = req.body.newPassword

	let fromName = null
	let subject = null
	let text = plainCodelockr(action, firstName, username, newPassword)
	let html = htmlCodelockr(action, firstName, username, newPassword)

	switch (service) {
		case 'CODELOCKR':
			fromName = 'CODELOCKR';
			subject = action === "PW_RESET" ? "CODELOCKR Password Reset Request" : "CODELOCKR Username Request"
			break;
		default:
			console.log('Unknown Service')
	}

	const message = {
		from: {
			name: fromName,
			address: "sleeptil3software@gmail.com"
		},
		to: {
			name: `${ firstName } ${ lastName }`,
			address: emailAddress
		},
		subject: subject,
		text: text,
		html: html
	}

	transporter.sendMail(message, (error, info) => {
		if (error) {
			res.json({
				status: 'Send Failed',
				message: JSON.stringify(error)
			})
		} else {
			res.json({
				status: 'Send Successful',
				message: JSON.stringify(info)
			})
		}
	})
})

// LISTENER

app.listen(PORT)