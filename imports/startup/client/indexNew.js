import {Meteor} from 'meteor/meteor';
import { createApp } from 'vue';
import vuetify from "../../ui/plugins/vuetify";
import '../../ui/plugins/index';
import VueZoomer from 'vue-zoomer';

//Main app
import App from '/imports/ui/App';

Meteor.startup(()=>{
    createApp(
        App,
    ).mount('#app');
   
});
