
import {Meteor} from "meteor/meteor";
import nodemailer from "nodemailer"
var convert = require('json-to-plain-text');
// https://microlab.ec/blog/enviar-correo-gmail-desde-nodejs/
// https://nodemailer.com/about/
const emailBody = `
<html lang="es">
<head>
	<title>Se ha recibido su solicitud de cotización</title>
</head>
<body>
<div width="100%" style="min-width: 100% !important; margin: 0 !important; padding: 0 !important;">
	<table width="660" border="0" cellspacing="0" align="center">
		<tbody>
		<tr>
			<td width="100%" style="min-width: 100%; font-family: Arial, Helvetica, sans-serif;">
				<div style="position: relative;height: 350px;width: 650px;background-color: #01697d;padding: 20px 40px 20px 40px;border-radius: 0 0 80% 0;color: #ffffff;">
					<div style="float: left;width: 60%;">
						<img alt="logo" style="height: 150px;" src="https://firebasestorage.googleapis.com/v0/b/ortoerp.appspot.com/o/ROO_LOGOGrande.jpg?alt=media&token=9d467a04-0099-4499-a426-4ec186111631">
						<h1 style="font-size: 40px; font-weight: normal; color: white;"><strong>Enhorabuena!</strong></h1>
						<h2 style="opacity: .7; color: white;">Se ha recibido una solicitud de cotización.</h2>
					</div>
				</div>
				<div style="position: relative;width: 650px;display: table;background-color: white;padding: 20px 40px 20px 40px;margin-bottom: 20px; font-family: Arial, Helvetica, sans-serif;">
					<h3 style="font-weight: bold;margin-bottom: 0px;">Uno de nuestros ejecutivos de ventas se pondrá en contacto a la brevedad con Ud.</h3>
					<h4 style="font-weight: bold;margin-bottom: 0px;">Adjunto encontrará un archivo con el detalle de la solicitud.</h4>
                    <div>
                        <h4>Representaciones Ortopédicas de Occidente</h4>
                    </div>
                    <div>
                        <h4>Correo: ventas@ortoerp.com</h4>
                    </div>
                    <div>
                        <h4>Cel: +52 33 4272 0690</h4>
                    </div>
				</div>
			</td>
		</tr>
		</tbody>
	</table>
</div>
</body>
</html>
`;
export default {
   
    async sendEmail(cotizacion){
        console.info(cotizacion.correo);
        if(Meteor.isDevelopment){
            if(Meteor.settings.private?.AYUDA_URL)
                process.env.AYUDA_URL=Meteor.settings.private.AYUDA_URL;
            if(Meteor.settings.private?.MAIL_HOST)
                process.env.MAIL_HOST= Meteor.settings.private.MAIL_HOST
            if(Meteor.settings.private?.MAIL_PORT)
                process.env.MAIL_PORT= Meteor.settings.private.MAIL_PORT
            if(Meteor.settings.private?.MAIL_USER)
                process.env.MAIL_USER= Meteor.settings.private.MAIL_USER
            if(Meteor.settings.private?.MAIL_PASSWORD)
                process.env.MAIL_PASSWORD= Meteor.settings.private.MAIL_PASSWORD
            if(Meteor.settings.private?.MAIL_FROM)
                process.env.MAIL_FROM= Meteor.settings.private.MAIL_FROM
            if(Meteor.settings.private?.MAIL_CC)
                process.env.MAIL_CC= Meteor.settings.private.MAIL_CC
            if(Meteor.settings.private?.MAIL_BCC)
                process.env.MAIL_BCC= Meteor.settings.private.MAIL_BCC
            if(Meteor.settings.private?.MAIL_SUBJECT)
                process.env.MAIL_SUBJECT= Meteor.settings.private.MAIL_SUBJECT
            
            }
        const message = {
            from: process.env.MAIL_FROM,
            to: cotizacion.correo,
            cc: process.env.MAIL_CC,
            bcc: process.env.MAIL_BCC,
            subject: process.env.MAIL_SUBJECT,
            text: "Version texto plano",
            html: emailBody,
            attachments: [
                {   // utf-8 string as an attachment
                    filename: cotizacion?._id + ".txt",
                    content: 'Detalle de la solicitud de cotización' + "\n" + "\n"+ convert.toPlainText(cotizacion)
                    //JSON.stringify(cotizacion)
                }
            ]
        };
      
        const transporter = nodemailer.createTransport({
            pool: true,
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true, // use TLS
            auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
            }
        })

        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log("Error enviando email")
                console.log(error.message)
                return error.message
            } else {
                console.log("Email enviado" + "\n"+ info.response)
                return info.response
            }
        })

    },
    
}