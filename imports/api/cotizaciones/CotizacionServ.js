
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
        const message = {
            from: "cotizador@ortoerp.com",
            to: cotizacion.correo,
            cc: "ventas@ortoerp.com",
            bcc: "jealdana@cerometros.com",
            subject: "Solicitud de cotización recibida",
            text: "Version texto plano",
            html: emailBody,
            attachments: [
                {   // utf-8 string as an attachment
                    filename: cotizacion?._id + ".txt",
                    content: 'Detalle de la solicitud de cotización' + "\n" + convert.toPlainText(cotizacion)
                    //JSON.stringify(cotizacion)
                }
            ]
        };
        //Accounts.sendEnrollmentEmail('5FLYLB6WZ6PFafYfd',cotizacion.correo);
        //cotizador@ortoerp.com:Cs7ZW2Ffo49TPt@smtp.ionos.mx:465

        const transporter = nodemailer.createTransport({
            pool: true,
            host: "smtp.ionos.mx",
            port: 465,
            secure: true, // use TLS
            auth: {
            user: 'cotizador@ortoerp.com',
            pass: 'Cs7ZW2Ffo49TPt'
            }
        })

        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log("Error enviando email")
                console.log(error.message)
            } else {
                console.log("Email enviado" + "\n"+ info.response)
            }
        })

    },
    
}