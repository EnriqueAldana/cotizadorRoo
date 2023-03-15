<template>

  <v-app>
    <!-- Inicio barra principal-->
    <v-card 
    flat>
      <v-toolbar
      color="primary"
      dark
      extended
      flat >
      
        <div class="text-left" style="margin-top: 40px;">
        <img src="/img/ROO_LOGO.png" alt="Logo Cero Mts" id="Logo0Mts" height="80px" />
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-black" style="margin-top: 40px;">
          Representaciones Ortopédicas de Occidente
        </v-toolbar-title>

      </v-toolbar>
      <br>
      <br>
    </v-card>
    <!-- Fin barra principal-->
    <!-- Inicio barra de aplicacion-->
<v-card
  class="mx-auto"
  max-width="1700"
  style="margin-top: -64px;"
>
        <v-toolbar flat>
          <v-toolbar-title class="text-grey">
            Cotizador de Medias y Calcetines
          </v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <v-btn icon @click="openAyuda">
            <v-icon>mdi-help</v-icon>
          </v-btn>
          
          <v-btn icon @click="openAlert">
            <v-icon>mdi-restart</v-icon>
          </v-btn>
  
          <v-btn icon @click="openModalSend">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-divider></v-divider>
        
        <v-card-text style="height: 1700px;">
            <v-card
            class="mx-auto"
            width="1700"
            prepend-icon="mdi-home"
            >
            <v-card-text>
              <h3>Datos del cliente</h3>
              <!-- Inicio campos datos cliente-->
          <v-sheet width="1700" class="mx-auto">
            <v-form ref="form" >
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
              <v-text-field
                v-model="cotizacion.firstName"
                clearable
                required
                hide-details="auto"
                label="Nombre"
                :rules="[rules.required,rules.firstNameRule]"
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="6"
            >
              <v-text-field
                v-model="cotizacion.lastName"
                clearable
                required
                hide-details="auto"
                label="Apellido"
                :rules="[rules.required,rules.lastNameRule]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="cotizacion.telefono"
                clearable
                required
                hide-details="auto"
                label="Teléfono"
                :rules="[rules.required,rules.telefonoNumberRule]"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="cotizacion.correo"
                clearable
                required
                hide-details="auto"
                label="Correo"
                :rules="[rules.required,rules.email]"
              ></v-text-field>
            </v-col>
          </v-row>
         </v-form>
          </v-sheet>
          <!-- Fin campos datos clientes-->
          <v-divider></v-divider>
          <v-card
          class="mx-auto"
          width="1700"
          prepend-icon="mdi-home"
          >
              <v-card-text>
                <h3>Montos de la cotización</h3>
          <v-row>
            <v-col cols="12"
                    md="3"
            >
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <h2>Sub total: {{ cotizacion.subtotal }}</h2>
              </v-card>
            </v-col>
            <v-col cols="12"
                    md="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <h2>I.V.A. 16% : {{ cotizacion.iva }}</h2>
              </v-card>
            </v-col>
            <v-col cols="12"
                    md="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <h2>Total: {{ cotizacion.total }}</h2>
              </v-card>
            </v-col>
            <v-col cols="12"
                    md="3">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <template>
                <div>
                      <div class="d-flex justify-space-around align-center flex-column flex-md-row">
                        <v-btn v-if="isHiddenSendBtn"
                          color="primary"
                          size="x-large"
                          @click="openModalSend">Enviar solicitud
                        </v-btn>              
                    </div>
                  </div>
                </template>
              </v-card>
            </v-col>
           
          </v-row>
              </v-card-text>
          
          </v-card>
          
          <!-- Inicia tabla-->
          <br>
          <v-divider></v-divider>
          <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                <h3>Catálogo de productos</h3>
              </v-col>
              <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                v-model="search"
                clearable
                append-icon="mdi-magnify"
                label="Escriba aquí para buscar..."
                single-line
                hide-details
              ></v-text-field>
              </v-col>
          </v-row>
          
          
     
          <v-data-table
            :headers="headers" 
            :items="cotizacion.partidas" 
            :items-per-page="100"
            :search="search"
            
            multi-sort
            item-key="id" 
            class="elevation-1"
        
          >
             
                <template v-slot:body="{ items, headers }">
                    <tbody>
                        <tr v-for="(item,idx,k) in items" :key="idx" :class="item.rowColor">
                            <td v-for="(header,key) in headers" :key="key">
                                <div v-if="key ===8">
                                    <v-edit-dialog 
                                    :return-value.sync="item[header.value]"
                                    @save="save(item,key)"
                                    @cancel="cancel(item,key)"
                                    @open="open(item,key)"
                                    @close="close(item,key)"
                                    large
                                  > <h3>{{item[header.value]}}</h3>
                                    <template v-slot:input>
                                      <v-text-field
                                        v-model="item[header.value]"
                                        label="Edit"
                                        single-line
                                      ></v-text-field>
                                    </template>
                                  </v-edit-dialog>   
                                </div>
                                <div v-else-if="key ===9">
                                    <v-edit-dialog 
                                    :return-value.sync="item[header.value]"
                                    @save="save(item,key)"
                                    @cancel="cancel(item,key)"
                                    @open="open(item,key)"
                                    @close="close(item,key)"
                                    large
                                  > <h3>{{item[header.value]}}</h3>
                                    <template v-slot:input>
                                      <v-text-field
                                        v-model="item[header.value]"
                                        label="Edit"
                                        single-line
                                      ></v-text-field>
                                    </template>
                                  </v-edit-dialog>   
                                </div>
                                <div v-else-if="key ===10">
                                    <v-edit-dialog 
                                    :return-value.sync="item[header.value]"
                                    @save="save(item,key)"
                                    @cancel="cancel(item,key)"
                                    @open="open(item,key)"
                                    @close="close(item,key)"
                                    large
                                  > <h3>{{item[header.value]}}</h3>
                                    <template v-slot:input>
                                      <v-text-field
                                        v-model="item[header.value]"
                                        label="Edit"
                                        single-line
                                      ></v-text-field>
                                    </template>
                                  </v-edit-dialog>   
                                </div>
                                <div v-else-if="key ===11">
                                    <v-edit-dialog 
                                    :return-value.sync="item[header.value]"
                                    @save="save(item,key)"
                                    @cancel="cancel(item,key)"
                                    @open="open(item,key)"
                                    @close="close(item,key)"
                                    large
                                  > <h3>{{item[header.value]}}</h3>
                                    <template v-slot:input>
                                      <v-text-field
                                        v-model="item[header.value]"
                                        label="Edit"
                                        single-line
                                      ></v-text-field>
                                    </template>
                                  </v-edit-dialog>   
                                </div>
                                <div v-else>
                                    <div v-if="key ===1">
                                        <div class="d-flex align-center pt-5 pb-5">
                                            
                                              <v-zoomer style="width: 177px; height: 335px; ">
                                                <img
                                                  :src="item[header.value] || '/img/user.png'"
                                                  style="object-fit: contain; width: 100%; height: 100%;"
                                                >
                                              </v-zoomer>
                                             <!--
                                                  <v-avatar>
                                                  <img :src="item[header.value] || '/img/user.png'" alt="Avatar">
                                                  </v-avatar>
                                                --> 
                                            
                                          </div>
                                    </div>
                                    <div v-else>
                                      <h3>
                                        {{item[header.value]}}
                                      </h3>
                                          
                                        
                                     
                                      
                                    </div> 
                                </div>  
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      <v-card >
          
        <!-- Fin barra principal-->
    </v-card>
          
  </v-card-text>
</v-card>


    
    <!--

       
        <v-footer class="d-flex flex-column">
          <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Hecho por <a href="https://cerometros.com/" target="_blank">Ingeniería en Cómputo</a></strong>
          </div>
        </v-footer>
       -->  
      <alert-message ref="refAlertMessage"></alert-message>
      <loader ref="refLoader"></loader>
      <modal-remove ref="refModalRemove" v-bind:modalData="cotizacionTemp"
      @id_element="enviarCotizacion"></modal-remove>
    
  </v-app>
</template>

<script>

  import AlertMessage from "./components/Utilities/Alerts/AlertMessage";
  import Loader from "./components/Utilities/Loaders/Loader";
  import medivaricJSON from '../data/medivaric.json'
  import VueZoomer from 'vue-zoomer'
  import ModalRemove from "./components/Utilities/Modals/ModalRemove";

  export default {
      name: "App",
      components: {
          AlertMessage,
          Loader,
          VZoomer: VueZoomer.Zoomer,
          ModalRemove
      },
      data() {
          return {
            isHiddenSendBtn: false,
            rules: {
                required: value => !!value || 'Requerido.',
                counter: value => value.length <= 20 || 'Max 20 caracteres',
                counter8: value => value.length <= 8 || 'Max 8 caracteres',
                email: value => {
                  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  return pattern.test(value) || 'Correo Electrónico incorrecto.'
                },
                firstNameRule: value => {
                    if (value?.length > 2) return true
                    return 'El nombre debe tener al menos 3 caracteres.'
                  },
                lastNameRule: value => {
                    if (value?.length > 2) return true
                    return 'El apellido debe tener al menos 3 caracteres.'
                  },
                telefonoNumberRule: value => {
                    if (/[0-9]{10}/.test(value)) return true
                    return 'El teléfono debe tener solo 10 números.'
                  },
                telefonoNumber10Rule: value => {
                  if (/[0-9]{10}/.test(value)) return true
                    return 'El numero telefónico debe tener 10 caracteres.'
                },
            },
            cotizacionTemp: {
                    preposition: 'la',
                    typeElement: 'cotización',
                    mainNameElement: '',
                    _id: null,
                    element: {}
                },
            cotizacion:{
                  firstName: '',
                  lastName: '',
                  telefono: '',
                  correo:'',
                  subtotal: 0.0,
                  iva:0.0,
                  total: 0.0,
                  partidas: [] ,
                },
                ayudaURL:'',
                search: '',
                headers: [
                      {
                      text: "Medias y calcetines",
                      align: "start",
                      sortable: false,
                      value: "name"
                      },
                      { text: "Imagen", 
                      align: "left",
                      sortable: false,
                      value: "imagen" },
                      { text: "Marca", value: "marca" },
                      { text: "Familia de producto", value: "familiadeproducto" },
                      { text: "Categoría", value: "categoria" },
                      { text: "Referencia", value: "referencia" },
                      { text: "Producto", value: "producto" },
                      { text: "Color", value: "color" },
                      { text: "Talla CHica (cajas)", value: "chica" },
                      { text: "Talla MEDiana (cajas)", value: "mediana" },
                      { text: "Talla GranDE (cajas)", value: "grande" },
                      { text: "Talla Extra Grande (cajas)", value: "extragrande" },
                      { text: "Precio antes de IVA (Pesos MX)", value: "precio" },
                      { text: "Precio venta Pub antes de IVA (Pesos MX)", value: "PVPSinIVA" },
                      { text: "Su ganancia (%)", value: "Ganancia" },
                      { text: "Precio por partida (Pesos MX)", value: "PPPSinIVA" },

                  ],
          }
      },
      created(){
        this.inicializacion()
      },
      
      methods: {
            async enviarCotizacion(){
              // NO FUNCIONO await this.validate ()
              //console.info(valido)
              //alert(valido)
              let valid = false
              if (this.cotizacion.firstName.length > 3 && this.cotizacion.lastName.length>3 && this.cotizacion.telefono.length >9 && this.cotizacion.correo.length > 5 && this.cotizacion.total > 0)
                  valid=true
              if(valid){
                // Mandar generar cotizacion

                
                this.$refs.refAlertMessage.showAlertFull("star", "success",
                  "Enviando...", '', 10000, '', 'top', "Se envió su cotización y recibirá un correo de confirmación.");
                this.inicializacionACeros()
                }else{
                this.$refs.refAlertMessage.showAlertFull("question", "error",
                  "Hay un Error", '', 5000, '', 'top', "Revise los datos del cliente y agregue al menos una partida.");
             
              }
              
              
            },
            save(item,key) {
              let er=false
                let parcialCH=0.0
                if(isNaN(item.chica)){
                  // La entrada para chica no es un numero
                  er=true
                }else{
                  parcialCH= (item.precio * item.chica)
                }
                let parcialMED=0.0
                if(isNaN(item.mediana)){
                  // Si la entrada para mediana no es numero
                  er=true
                }else{
                  parcialMED= (item.precio * item.mediana)
                }
                let parcialGDE=0.0
                if(isNaN(item.grande)){
                  // Si la entrada para grande no es numero
                  er=true
                }else{
                  parcialGDE= (item.precio * item.grande)
                }
                let parcialEG=0.0
                if(isNaN(item.extragrande)){
                  er=true
                  // Si la entrada para extragrande no es numero
                  //this.$refs.refAlertMessage.showAlertFull("star", "error",
                  //"Error", '', 5000, '', 'bottom', "Debe escribir un numero entero de cajas EXTRA GRANDES");
                  //return
                }else{
                  parcialEG=(item.precio * item.extragrande)
                }
                item.PPPSinIVA=  parcialCH+ parcialMED + parcialGDE + parcialEG;
                this.cotizacion.subtotal=0.0
                //console.log(this.partidas)
                this.cotizacion.partidas.forEach((item, index) => {
                  //console.log(item)
                  this.cotizacion.subtotal = this.cotizacion.subtotal + item.PPPSinIVA
                })
                this.cotizacion.iva= this.cotizacion.subtotal * 0.16
                this.cotizacion.total = this.cotizacion.subtotal + this.cotizacion.iva
                // Mostrar boton
                if(this.cotizacion.total > 0){
                  this.isHiddenSendBtn=true
                }else{
                  this.isHiddenSendBtn=false
                }
                      
                //this.subtotal.toFixed(2)
                //this.iva.toFixed(2)
                //this.total.toFixed(2)
                //alert("Subtotal: " + this.subtotal)
                //alert("IVA: " + this.subtotal * 0.16)
                //alert("Total: " + this.subtotal * 1.16)
                if(er){
                  this.$refs.refAlertMessage.showAlertFull("question", "error",
                  "Hay un Error", '', 5000, '', 'top', "Debe escribir un numero entero de cajas. Hay un dato equivocado.");
               
                }else{
                  this.$refs.refAlertMessage.showAlertFull("star", "success",
                  "Guardando...", '', 5000, '', 'bottom', "Se actualizó su cotización.");
                }
                
               
            },
            cancel(item,key) {},
            open(item,key) {
                
            },
            close(item,key) {},
            openAyuda(){
              //window.open(process.env.AYUDA_URL, '_blank');
              //window.open( 'https://www.youtube.com/watch?v=9i1TtTkAIjs', '_blank');
              window.open( this.ayudaURL, '_blank');
              
            },
          openAlert() {
            this.inicializacionACeros()
              this.$refs.refAlertMessage.showAlertFull("star", "success",
                  "Empezando", '', 5000, '', 'top', "¡ Se ha iniciado la lista en Ceros!");
          },
          openLoader() {
              this.$refs.refLoader.activate();
              setTimeout(() => {
                  this.$refs.refLoaderTest.deactivate();
              }, 3000);
          },
          async validate () {
              const { valid } = await this.$refs.form.validate()
              if(valid){
                // Mandar generar cotizacion
                this.$refs.refAlertMessage.showAlertFull("star", "success",
                  "Enviando...", '', 5000, '', 'bottom', "Se envió su cotización y recibirá un correo de confirmación.");
              }else{
                this.$refs.refAlertMessage.showAlertFull("question", "error",
                  "Hay un Error", '', 5000, '', 'top', "Revise los datos del cliente.");
             
              }
                
          },
          reset () {
            this.$refs.form.reset()
          },
          resetValidation () {
            this.$refs.form.resetValidation()
          },
          openModalSend() {
             // Validar que tengamos datos completos de la cotizacion
             
             
              this.cotizacionTemp.element = this.cotizacion;
              this.cotizacionTemp._id = this.cotizacion.total;
              this.cotizacionTemp.mainNameElement = this.cotizacion.correo;
              this.$refs.refModalRemove.dialog = true;
            
              
          },
          deleteUser(idUser) {
              console.log("Id del usuario a eliminar: ", idUser);
          },
          
          inicializacion(){
            this.cotizacion.subtotal=0.0
            this.cotizacion.iva=0.0
            this.cotizacion.total=0.0
            this.cotizacion.partidas= medivaricJSON
          if(Meteor.settings.private?.AYUDA_URL)
              this.ayudaURL=Meteor.settings.private.AYUDA_URL;
          
          },
          inicializacionACeros(){
            this.cotizacion.subtotal=0.0
            this.cotizacion.iva=0.0
            this.cotizacion.total=0.0
            this.cotizacion.partidas.forEach((item, index) => {
                  //console.log(item)
                  item.chica=0
                  item.mediana=0
                  item.grande=0
                  item.extragrande=0
                  item.PPPSinIVA=0
                })
                // Mostrar boton
                if(this.cotizacion.total > 0){
                  this.isHiddenSendBtn=true
                }else{
                  this.isHiddenSendBtn=false
                }
                // reset a la forma
                this.reset()
                
      },
      itemRowBackground: function (item) {
      return item.id > 3 ? 'style-1' : 'style-2'
      },
      row_classes(item) {
        if (item.id < 200) {
          return "orange";
        } 
    }
    }
  }
</script>

<style scoped>
.style-1 {
  background-color: rgb(215,215,44)
}
.style-2 {
  background-color: rgb(114,114,67)
}
.orange {
  background-color: orange;
}
.red {
  background-color: red;
}
.black {
  background-color: black;
}
.gray {
  background-color: gray;
}
.yellow {
  background-color: yellow;
}
</style>
