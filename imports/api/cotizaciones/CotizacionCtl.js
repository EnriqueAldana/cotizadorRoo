import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {check} from 'meteor/check';
import {ResponseMessage} from "../../startup/server/utilities/ResponseMesssage";
import CotizacionServ from './CotizacionServ';
import {Meteor} from 'meteor/meteor'

new ValidatedMethod({
    name: 'cotizacion.save',
    validate({cotizacion}) {
        try {
            // Valida que la estructura del objeto cotizacion este conforme a la definicion.
            console.log("Cotizacion ",cotizacion);

            check(cotizacion, {
                _id: String,
                firstName: String,
                lastName: String,
                telefono: String,
                correo: String,
                subtotal:Number,
                iva:Number,
                total: Number,
                partidas: [
                    {
                      "id": Number,
                      "imagen": String,
                      "marca": String,
                      "familiadeproducto": String,
                      "categoria": String,
                      "rowColor": String,
                      "referencia": String,
                      "producto": String,
                      "color": String,
                      "chica": String,
                      "mediana": String,
                      "grande": String,
                      "extragrande": String,
                      "precio": Number,
                      "PVPSinIVA": Number,
                      "Ganancia": Number,
                      "PPPSinIVA": Number
                    }
                ] ,
                });
        } catch (exception) {
            console.error('cotizacion.save', exception);
            throw new Meteor.Error('403', 'La informacion introducida no es válida.');
        }
        // Validar que no haya usuarios con el mismo correo y nombre de usuario en la BD.
       

    },
    async run({cotizacion}) {
     //   async run(user) {
        console.log('cotizacion.save');
        const responseMessage= new ResponseMessage();
        // Aqui enviar correo
        let respuesta="";
        console.log('Enviando correo');
        respuesta= await CotizacionServ.sendEmail(cotizacion);
        console.log('Se envió correo: ' + respuesta);
        responseMessage.create('Se envió su solicitud de cotización, Ud. recibirá un correo electrónico.' +"\n" + "Uno de nuestros ejecutivo le llamará tambien." + "\n" + respuesta);
 
        return responseMessage;
    }
});