
import {Meteor} from "meteor/meteor";
import nodemailer from "nodemailer"

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
						<img alt="logo" style="height: 50px;" src="https://firebasestorage.googleapis.com/v0/b/cerometros.appspot.com/o/Logo.png?alt=media&token=0a923e0e-df2f-4201-a910-0d5a7ad735f2'">
						<h1 style="font-size: 40px; font-weight: normal; color: white;"><strong>Enhorabuena!</strong></h1>
						<h2 style="opacity: .7; color: white;">Se ha creado tu cuenta en el Sistema Cero Metros</h2>
					</div>
					<div style="float: right;width: 40%;">
						<img alt="product" style="position: relative;width: 280px;top: 70px;right: 30px;" src="https://firebasestorage.googleapis.com/v0/b/cerometros.appspot.com/o/ZeroMts_Product.png?alt=media&token=084767d8-190f-4fb6-8cab-ee1a40f2c00d">
					</div>
				</div>
				<div style="position: relative;width: 650px;display: table;background-color: white;padding: 20px 40px 20px 40px;margin-bottom: 20px; font-family: Arial, Helvetica, sans-serif;">
					<h3 style="font-weight: bold;margin-bottom: 0px;">Para establecer una contraseña, visita la siguiente liga:</h3>
					<a href="{{urlWithoutHash}}">
						{{urlWithoutHash}}
					</a>
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
            subject: "Solicitud de cotización recibida",
            text: "Version texto plano",
            html: emailBody
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