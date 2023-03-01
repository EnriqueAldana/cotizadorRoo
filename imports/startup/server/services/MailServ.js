import { Accounts } from 'meteor/accounts-base'
// Para entorno de desarrollo
if(Meteor.isDevelopment){
    if(Meteor.settings.private?.SENDER_EMAILS){
        process.env.EMAIL_SERVICES= Meteor.settings.private.SENDER_EMAILS.SERVICES
        process.env.PRODUCT_IMAGE_PATH= Meteor.settings.private.PRODUCT_IMAGE_PATH;
        process.env.LOGO_IMAGE_PATH = Meteor.settings.private.LOGO_IMAGE_PATH;
        process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;
    }
}

// Para ambiente productivo las variables de entorno deberan ser setteadas

const nameApp = 'Cotizador de Representaciones Ortopédicas de Occidente ' ;
const email = `<${process.env.EMAIL_SERVICES}>`;
const from = `${ nameApp } ${ email}`;

const emailCotizacion = 'email_cotizacion.html';
const emailResetPassword = 'email_reset_password.html';
const emailVerifyEmail = 'email_verify_email.html';
const productSrc = process.env.PRODUCT_IMAGE_PATH;
const logoSrc = process.env.LOGO_IMAGE_PATH;

Accounts.emailTemplates.siteName = nameApp;
Accounts.emailTemplates.from = from;
const emailTemplates = Accounts.emailTemplates;

emailTemplates.cotizacion = {
    subject() {
        return `Cotizacion desde  ${nameApp}`;
    },
    html(user,url) {
        const urlWithoutHash = url.replace('#/','');
        if(Meteor.isDevelopment) {
            
            console.info('Link para fijar contraseña',urlWithoutHash);
        }
        SSR.compileTemplate('emailCotizacion',Assets.getText(emailCotizacion));
        return SSR.render('emailCotizacion',{
            urlWithoutHash,
            productSrc,
            logoSrc
        });
    }
};


emailTemplates.resetPassword = {
    subject() {
        return `Reestablecer contraseña`;
    },
    html(user,url) {
        const urlWithoutHash = url.replace('#/','');
        if(Meteor.isDevelopment) {
            
            console.info('Link para reestablecer contraseña',urlWithoutHash);
        }
        SSR.compileTemplate('emailResetPassword',Assets.getText(emailResetPassword));
        return SSR.render('emailResetPassword',{
            urlWithoutHash,
            productSrc,
            logoSrc
        });
    }
};

emailTemplates.verifyEmail = {
    subject() {
        return `Validar correo electronico`;
    },
    html(user,url) {
        const urlWithoutHash = url.replace('#/','');
        if(Meteor.isDevelopment) {
            
            console.info('Liga para validar correo electronico',urlWithoutHash);
        }
        SSR.compileTemplate('emailVerifyEmail',Assets.getText(emailVerifyEmail));
        return SSR.render('emailVerifyEmail',{
            urlWithoutHash,
            productSrc,
            logoSrc
        });
    }
};

// Configuracion 
        
try{
    
    console.info(" Configuracion del sistema de correo"+ '\n');
    console.info(" Email URL ",process.env.MAIL_URL+ '\n');
    console.info(" Email sender",process.env.EMAIL_SERVICES+ '\n');
    console.info(' Email LOGO IMAGE URL:'+ process.env.LOGO_IMAGE_PATH+ '\n');
    console.info(' Email  APP IMAGE PATH:'+ process.env.PRODUCT_IMAGE_PATH+ '\n');
    
}catch(e){
    console.error("Error inicio de la aplicaion",e)
   
}
