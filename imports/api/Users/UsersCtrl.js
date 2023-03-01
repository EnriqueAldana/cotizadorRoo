import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {check, Match} from 'meteor/check';
import {ResponseMessage} from "../../startup/server/utilities/ResponseMesssage";
import UsersServ from "./UsersServ";
import {Meteor} from 'meteor/meteor'





new ValidatedMethod({
    name: 'user.save',
    validate({user}) {
        try {
            // Valida que la estructura del objeto user este conforme a la definicion.
            console.log("Usuario ",user);
            check(user, {
                _id: Match.OneOf(String, null),
                username: String,
                emails: [{address: String, verified: Boolean}],
                profile: {
                    profile: String,
                    name: String,
                    lastName: String
                },
                
                
            
            });
        } catch (exception) {
            console.error('user.save', exception);
            throw new Meteor.Error('403', 'La informacion introducida no es válida.');
        }
        // Validar que no haya usuarios con el mismo correo y nombre de usuario en la BD.
        //UsersServ.validateEmail(user.emails[0].address,user._id);
        //UsersServ.validateUserName(user.username,user._id);

    },
    async run({user}) {
     //   async run(user) {
        console.log('user.save');
        const existsEmail= Accounts.findUserByEmail(user.emails[0].address);
        const responseMessage= new ResponseMessage();

        // Si el correo existe mandar correo
        if(existsEmail){
            console.log(existsEmail);
            await UsersServ.sendEmail(existsEmail)
            responseMessage.create('Se ha guardado el usuario y se envió correo');
        }else {  // Crear usuario y mandar correo
            console.log('Agregando usuario a la BD');
            try{
                
                await UsersServ.createUser(user);
                console.log('Se ha guardado el usuario');
                responseMessage.create('Se ha guardado el usuario y se envió correo');
            }catch (exception) {
                console.error('user.save', exception);
                throw new Meteor.Error('500', 'Ocurrió un error al guardar el usuario');
            }
        }

        return responseMessage;
    }
});


new ValidatedMethod({
    name:'user.delete',
    validate({idUser}){
        try{
            check('idUser',String);
        }catch (exception) {
            console.error('user.remove', exception);
            throw new Meteor.Error('403','La informacion proporcionada no es correcta');
        }

    },
    async run({idUser}){
        const responseMessage = new ResponseMessage;

        try{
                console.log('Eliminando usuario a la BD');
               await UsersServ.deleteUser(idUser);

        }catch(exception){
            console.error('user.remove','Ocurrió un error al eliminar al usaurio');
            throw new Meteor.Error('500', 'ocurrió un error al eliminar al usaurio');
        }

        responseMessage.create('Usuario eliminado exitosamente');
        return responseMessage;
    }
});

new ValidatedMethod({
    name: 'user.updatePersonalData',
    validate({user}) {
        try {
            // Valida que la estructura del objeto user este conforme a la definicion.
            check(user, {
                _id: Match.OneOf(String, null),
                username: String,
                emails: [{address: String, verified: Boolean}],
                profile: {
                    profile: String,
                    name: String,
                    path: Match.OneOf(String, null)
                }
            });
        } catch (exception) {
            console.error('user.updatePersonalData', exception);
            throw new Meteor.Error('403', 'La informacion introducida no es válida.');
        }
        // Validar que no haya usuarios con el mismo correo y nombre de usuario en la BD.
        UsersServ.validateEmail(user.emails[0].address,user._id);
        UsersServ.validateUserName(user.username,user._id);

    },
    async run({user,photoFileUser}) {
        console.log('user.updatePersonalData');
        //console.log('Usuario logeado ', this.userId);
        const responseMessage= new ResponseMessage();
        if(user._id !==null){
            try {
                await UsersServ.updateuser(user,photoFileUser);
            }catch(exception){
                console.error('user.updatePersonalData',exception);
                throw new Meteor.Error('500','Ocurrió un error al actualizar los datos del usuario');
            }
            console.log('Se actualizaron los datos del usuario exitosamente');
            responseMessage.create('Se actualizaron los datos del usuario exitosamente');
        }

        return responseMessage;
    }
});