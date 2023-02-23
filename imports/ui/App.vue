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
  max-width="1600"
  style="margin-top: -64px;"
>
        <v-toolbar flat>
          <v-toolbar-title class="text-grey">
            Cotizador de Medias y Calcetines
          </v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <v-btn icon>
            <v-icon>mdi-help</v-icon>
          </v-btn>
  
          <v-btn icon @click="openAlert">
            <v-icon>mdi-restart</v-icon>
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-divider></v-divider>
        
        <v-card-text style="height: 1400px;">
            <v-card
            class="mx-auto"
            width="1400"
            prepend-icon="mdi-home"
            >
            <v-card-text>
              <h3>Datos del cliente</h3>
              <!-- Inicio campos datos cliente-->
          <v-sheet width="1400" class="mx-auto">
            <v-form fast-fail @submit.prevent>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
              <v-text-field
                v-model="firstName"
                label="Nombre"
                :rules="firstNameRules"
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="6"
            >
              <v-text-field
                v-model="lastName"
                label="Apellido"
                :rules="lastNameRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="telefono"
                label="Teléfono"
                :rules="lastNameRules"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="correo"
                label="Correo"
                :rules="lastNameRules"
              ></v-text-field>
            </v-col>
          </v-row>
         </v-form>
          </v-sheet>
          <!-- Fin campos datos clientes-->
          <h3>Montos de la cotización</h3>
          <v-row>
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <h2>Sub total: {{ subtotal }}</h2>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <h2>I.V.A. 16% : {{ iva }}</h2>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
              <h2>Total: {{ this.total }}</h2>
              </v-card>
            </v-col>
          </v-row>
          <!-- Inicia tabla-->
          <br>
          <v-divider></v-divider>
          
          <h3>Catálogo de productos</h3>
         
          <v-data-table 
            :headers="headers" 
            :items="partidas" 
            item-key="id" 
            class="elevation-1">
                <template v-slot:body="{ items, headers }">
                    <tbody>
                        <tr v-for="(item,idx,k) in items" :key="idx">
                            <td v-for="(header,key) in headers" :key="key">
                                <div v-if="key ===8">
                                    <v-edit-dialog 
                                    :return-value.sync="item[header.value]"
                                    @save="save(item,key)"
                                    @cancel="cancel(item,key)"
                                    @open="open(item,key)"
                                    @close="close(item,key)"
                                    large
                                  > {{item[header.value]}}
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
                                  > {{item[header.value]}}
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
                                  > {{item[header.value]}}
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
                                  > {{item[header.value]}}
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
                                            <v-avatar>
                                              <img :src="item[header.value] || '/img/user.png'" alt="Avatar">
                                            </v-avatar>
                                          </div>
                                    </div>
                                    <div v-else>
                                    {{item[header.value]}}  
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


    
          
        <v-footer class="d-flex flex-column">
          <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Hecho por <a href="https://cerometros.com/" target="_blank">Ingeniería en Cómputo</a></strong>
          </div>
        </v-footer>

      <alert-message ref="refAlertMessage"></alert-message>
      <loader ref="refLoader"></loader>
    
  </v-app>
</template>

<script>

  import AlertMessage from "./components/Utilities/Alerts/AlertMessage";
  import Loader from "./components/Utilities/Loaders/Loader";
  import medivaricJSON from '../data/medivaric.json'
  export default {
      name: "App",
      components: {
          AlertMessage,
          Loader
      },
      data() {
          return {
                firstName: '',
                firstNameRules: [
                  value => {
                    if (value?.length > 3) return true
                    return 'El nombre debe tener al menos 3 caracteres.'
                  },
                ],
                lastName: '',
                lastNameRules: [
                  value => {
                    if (/[^0-9]/.test(value)) return true
                    return 'El apellido no debe contener números.'
                  },
                ],
                telefono: '',
                correo:'',
                subtotal: 0.0,
                iva:0.0,
                total: 0.0,
                partidas: [] ,
                headers: [
                      {
                      text: "Medias y calcetines",
                      align: "left",
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
                this.subtotal=0.0
                //console.log(this.partidas)
                this.partidas.forEach((item, index) => {
                  //console.log(item)
                  this.subtotal = this.subtotal + item.PPPSinIVA
                })
                this.iva= this.subtotal * 0.16
                this.total = this.subtotal + this.iva
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
          openModalRemove() {
              const product = {
                  _id: "asdf1234",
                  name: "iPhone 5",
                  serialNumber: "XXX123123",
                  price: 10000,
                  brand: "Apple"
              };
              
              this.$refs.refModalRemove.dialog = true;
          },
          deleteUser(idUser) {
              console.log("Id del usuario a eliminar: ", idUser);
          },
          inicializacion(){
            this.subtotal=0.0
            this.iva=0.0
            this.total=0.0
            this.partidas= medivaricJSON
          },
          inicializacionACeros(){
            this.subtotal=0.0
            this.iva=0.0
            this.total=0.0
            this.partidas.forEach((item, index) => {
                  //console.log(item)
                  item.chica=0
                  item.mediana=0
                  item.grande=0
                  item.extragrande=0
                  item.PPPSinIVA=0
                })
      },
      }
  }
</script>

<style scoped>

</style>
