module.exports = {
	plainCodelockr: function (action, name, username, newPassword) {
		let text = ""
		if (action === 'PW_RESET') {
			text = `Dearest ${ name }:\n\nThis message is in response to a password request made to Codelockr.com.\n\nIf you did not request this, there must be tomfoolery afoot. Complete the reset and please reply to this message to let me know!\n\nYour temporary password is: ${ newPassword }\n\nThanks for using CODELOCKR!\n\n-Shawn`
		}
		if (action === 'USERNAME_REQUEST') {
			text = `Dearest ${ name }:\n\nThis message is in response to a username request made to Codelockr.com.\n\nIf you did not request this, there must be tomfoolery afoot. You can ignore this message, but if it continues to happen, please reply to this message to let me know!\n\nYour username associated with this email address is: ${ username }\n\nThanks for using CODELOCKR!\n\n-Shawn`
		}

		return text
	},
	htmlCodelockr: function (action, firstName, username, newPassword) {
		let html = ``

		if (action === 'PW_RESET') {
			html = `<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		th.column {
			padding: 0
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		@media (max-width:645px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}
		}
	</style>
</head>
<body style="background-color: #3d3d3d; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #3d3d3d;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: linear-gradient(#0b114a, #991b1b);" width="625">
<tbody>
<tr>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 8px solid #111827; padding-top: 5px; padding-bottom: 5px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="text-align:center;font-family:inherit;font-size:14px;">
<table align="center" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="text-align:center;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;"><img src="https://i.imgur.com/cyliko8.png" alt="codelockr logo"/></td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="width:100%;text-align:center;">
<h1 style="margin: 0; color: #f9fafb; font-size: 23px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: normal; letter-spacing: 1px; margin-top: 0; margin-bottom: 0;"><strong>CODELOCKR</strong></h1>
</td>
</tr>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f2937;" width="625">
<tbody>
<tr>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 20px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="text-align:center;width:100%;">
<h1 style="margin: 0; color: #f9fafb; font-size: 20px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: normal; letter-spacing: 1px; margin-top: 0; margin-bottom: 0;"><strong>Dearest Billie,</strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:20px;padding-bottom:10px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; color: #f9fafb; line-height: 1.5; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 21px;"><span style="font-size:14px;">Your password for <strong>CODELOCKR</strong> was successfully reset to a temporary password.</span></p>
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 21px;"> </p>
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 21px;"><span style="font-size:14px;">Use the information below to login. After logging in, be sure to change your password in <strong>Settings</strong>, which you can find under on your name in the top right corner.</span></p>
</div>
</div>
</td>
</tr>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f2937;" width="625">
<tbody>
<tr>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;" width="16.666666666666668%">
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td>
<div style="font-family: sans-serif">
<div style="font-size: 12px; color: #f9fafb; line-height: 1.5; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px;"> </p>
</div>
</div>
</td>
</tr>
</table>
</th>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 3px solid #991B1B; border-left: 3px solid #991B1B; border-right: 3px solid #991B1B; border-top: 3px solid #991B1B;" width="66.66666666666667%">
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:20px;padding-bottom:20px;">
<div style="font-family: sans-serif">
<div style="font-size: 12px; color: #f9fafb; line-height: 1.5; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 21px;"><span style="font-size:14px;"><strong>Temporary Password</strong>: WFJL348W384FOJ8</span></p>
</div>
</div>
</td>
</tr>
</table>
</th>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;" width="16.666666666666668%">
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td>
<div style="font-family: sans-serif">
<div style="font-size: 12px; color: #f9fafb; line-height: 1.5; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px;"> </p>
</div>
</div>
</td>
</tr>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f2937;" width="625">
<tbody>
<tr>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 20px; padding-right: 20px; padding-top: 20px; padding-bottom: 20px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td>
<div style="font-family: sans-serif">
<div style="font-size: 14px; color: #f9fafb; line-height: 1.5; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 14px;">Thank you for using <strong>CODELOCKR</strong>!</p>
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 21px;"> </p>
<p style="margin: 0; font-size: 14px;">-Shawn</p>
</div>
</div>
</td>
</tr>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111827;" width="625">
<tbody>
<tr>
<th class="column" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:30px;padding-bottom:30px;">
<div style="font-family: sans-serif">
<div style="font-size: 12px; color: #f9fafb; line-height: 1.5; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;">
<p style="margin: 0; font-size: 12px; text-align: center;">©2021 • Shawn Clary • Sleeptil3Software</p>
</div>
</div>
</td>
</tr>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>
`
		}
		if (action === 'USERNAME_REQUEST') {
			html = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;700&display=swap" rel="stylesheet" />
		<title>An Email from Sleeptil3Software</title>
		<style>
			*,
			*::before,
			*::after {
				box-sizing: border-box;
				font-family: inherit;
			}
			body,
			h1,
			h2,
			h3,
			h4,
			p,
			figure,
			blockquote,
			dl,
			dd {
				margin: 0;
			}
			body {
				font-family: "Red Hat Display", sans-serif;
				line-height: 1.4;
				background-color: rgb(31, 41, 55);
				color: rgb(249, 250, 251);
				letter-spacing: 1.2px;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: stretch;
			}
			header {
				/* height: 190px; */
				background-image: linear-gradient(rgb(11, 17, 74), rgb(153, 27, 27));
				border-bottom: 8px solid rgb(17, 24, 39);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 32px 0;
			}
			h1 {
				font-size: 48px;
				font-weight: 700;
				letter-spacing: 4px;
			}
			h2 {
				font-size: 28px;
				font-weight: 700;
			}
			h3 {
				font-size: 20px;
				font-weight: 700;
				padding-top: 20px;
				padding-bottom: 42px;
			}
			p {
				font-size: 18px;
				font-weight: 300;
				padding-bottom: 20px;
			}
			svg {
				width: 75px;
				height: 75px;
				margin-bottom: 10px;
			}
			main {
				margin: 40px auto;
				padding: 0 40px;
				max-width: 800px;
			}
			span {
				font-weight: 700;
			}
			div {
				width: fit-content;
				margin: 20px auto;
				margin-bottom: 40px;
				padding: 20px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border: 2px solid rgb(249, 250, 251);
				border-radius: 20px;
				text-align: center;
			}
			div p {
				padding: 10px;
			}
			footer {
				background-color: rgb(17, 24, 39);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex: 1 0;
				margin-top: 30px;
				padding: 40px 0;
			}
			footer p {
				padding: 6px 0;
			}
			a {
				color: rgb(249, 250, 251);
			}
			a:hover {
				color: rgb(153, 27, 27);
			}
			.small {
				font-size: 16px;
			}
			@media (max-width: 428px) {
				h1 {
					font-size: 32px;
				}
				h2 {
					font-size: 24px;
				}
				h3 {
					font-size: 18px;
				}
				p {
					font-size: 15px;
				}
				main {
					width: 100%;
					margin: 30px auto;
					padding: 0 14px;
					max-width: unset;
				}
				footer p {
					font-size: 13px;
					padding: 2px;
				}
				.small {
					font-size: 12px;
				}
			}
		</style>
	</head>
	<body>
		<header>
			<svg width="28" height="35" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.7498 0.00353354C22.5898 0.00353354 27.3458 4.75953 27.3458 10.6055L27.3456 13.7587C30.896 14.9944 33.45 18.3744 33.45 22.3411V30.9191C33.45 35.9291 29.376 40.0031 24.366 40.0031H9.084C4.074 40.0031 0 35.9291 0 30.9191V22.3411C0 18.3751 2.55304 14.9956 6.10241 13.7594L6.1038 10.6055C6.1158 7.72553 7.2298 5.06753 9.2398 3.07553C11.2518 1.08153 13.9078 -0.0724665 16.7498 0.00353354ZM24.366 16.2571H9.084C5.728 16.2571 3 18.9851 3 22.3411V30.9191C3 34.2751 5.728 37.0031 9.084 37.0031H24.366C27.72 37.0031 30.45 34.2751 30.45 30.9191V22.3411C30.45 18.9851 27.72 16.2571 24.366 16.2571ZM16.7246 22.9087C17.5526 22.9087 18.2246 23.5807 18.2246 24.4087V28.8507C18.2246 29.6787 17.5526 30.3507 16.7246 30.3507C15.8966 30.3507 15.2246 29.6787 15.2246 28.8507V24.4087C15.2246 23.5807 15.8966 22.9087 16.7246 22.9087ZM16.7438 3.00353H16.7118C14.6858 3.00353 12.7878 3.78353 11.3538 5.20553C9.9098 6.63353 9.1118 8.53953 9.1038 10.5715L9.102 13.256H24.344L24.3458 10.6055C24.3458 6.41353 20.9358 3.00353 16.7438 3.00353Z"
					fill="white"
				/>
			</svg>
			<h1>CODELOCKR</h1>
		</header>
		<main>
			<h3>${ firstName },</h3>
			<p>
				As requested, the username associated with this email address for <span>CODELOCKR</span> is displayed below. Use that and your password to login. If you forgot your password, use the
				<span>Forgot Password</span> link on the <span>CODELOCKR</span> login prompt to reset it.
			</p>
			<div>
				<p><span>Your Username: </span>${ username }</p>
			</div>
			<p><span>Thank you for using CODELOCKR!</span></p>
			<p>-Shawn</p>
		</main>
		<footer>
			<p>©2021 • Shawn Clary • Sleeptil3Software</p>
			<p class="small">Found a bug? <a href="https://github.com/sleeptil3/codelockr-react/issues" target="_blank" rel="noreferrer">Submit a Github Issue</a></p>
		</footer>
	</body>
</html>
`
		}
		return html
	}
}