
import {Meteor} from "meteor/meteor";

export default {

    async sendEmail(cotizacion){
        Accounts.sendEnrollmentEmail(1,cotizacion.correo);
    },
    
}