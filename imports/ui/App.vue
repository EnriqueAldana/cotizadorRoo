<template>

  
  <v-app>
    
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
      <v-card
        class="mx-auto"
        max-width="1400"
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
  
          <v-btn icon>
            <v-icon>mdi-restart</v-icon>
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-divider></v-divider>
  
        <v-card-text style="height: 1200px;">
          <v-card title="Card title" 
          subtitle="Subtitle">
          <v-sheet width="1000" class="mx-auto">
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
        </v-card>
          <!-- Inicia montos-->
          <v-card class="mt-5 mb-8"
          title="Montos de la cotización" 
          subtitle="Calcula de acuerdo al llenado de las cantidades en la tabla"
          >
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                      <h3>Los montos de su cotización son como sigue:</h3>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    <h3>Sub total: {{ subtotal }}</h3>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    <h3>I.V.A. 16% : {{ iva }}</h3>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                    <h3>Total: {{ total }}</h3>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <!-- Fin montos-->
          <!-- Inicia tabla-->
          <v-card>
            <v-data-table 
            :headers="headers" 
            :items="partidas" 
            item-key="name" 
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
        </v-card>
          <!-- Fin tabla-->
        </v-card-text>
      </v-card>
    </v-card>

    
          
        <v-footer class="d-flex flex-column">
          <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Hecho por <a href="https://cerometros.com/" target="_blank">Ingeniería en Cómputo</a></strong>
          </div>
        </v-footer>
      </v-container>
      <alert-message ref="refAlertMessage"></alert-message>
      <loader ref="refLoader"></loader>
    
  </v-app>
</template>

<script>
  import DefaultBar from "./AppBar.vue"
  import DrawerHeader from "./DrawerHeader.vue"
  import AlertMessage from "./components/Utilities/Alerts/AlertMessage";
  import Loader from "./components/Utilities/Loaders/Loader";
 
  export default {
      name: "App",
      components: {
        DefaultBar,
        DrawerHeader,
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
      lastName: '123',
      lastNameRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'El apellido no debe contener números.'
        },
      ],
      telefono: 0,
      correo:"",
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
                    { text: "Precio por partida (Pesos MX)", value: "precioxpartida" },

                ],
                subtotal: 0.0,
                iva:0.0,
                total: 0.0,
                partidas: [],
                
          }
      },
      created(){
        this.inicializacion()
      },
      
      methods: {
            save(item,key) {
                this.$refs.refAlertMessage.showAlertFull("star", "success",
                  "Guardado", '', 5000, '', 'bottom', "Se ha guardado su dato");
                item.precioxpartida= (item.precio * item.chica) + (item.precio * item.mediana) + (item.precio * item.grande) + (item.precio * item.extragrande);
                this.subtotal=0.0
                this.partidas.forEach((item, index) => {
                    this.subtotal = this.subtotal + item.precioxpartida
                })
                this.iva= this.subtotal * 0.16
                this.total=this.subtotal + this.iva
            },
            cancel(item,key) {},
            open(item,key) {
                
            },
            close(item,key) {},
          openAlert() {
            this.inicializacion()
              this.$refs.refAlertMessage.showAlertFull("star", "success",
                  "Empezando", '', 5000, '', 'bottom', "¡ Se ha iniciado la lista en Ceros!");
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
        this.partidas= [
                    {
                        id: 1,
                        imagen:"http://storage.googleapis.com/cerometros.appspot.com/users/5FLYLB6WZ6PFafYfd/avatar69.jpeg",
                        marca: "Medivaric",
                        familiadeproducto: "Media",
                        categoria: "Baja compresion 8-15 mmHg",
                        referencia: "MV-1111p",
                        producto:"Pantimedia dama transparente",
                        color: "Beige",
                        chica:0,
                        mediana:0,
                        grande:0,
                        extragrande:0,
                        precio:240,
                        precioxpartida:0
                    },
                    {
                        id: 2,
                        imagen:"http://storage.googleapis.com/cerometros.appspot.com/users/DsYfSb6Q8sfH49hmB/avatar88.png",
                        marca: "Medivaric",
                        familiadeproducto: "Media",
                        categoria: "Baja compresion 8-15 mmHg",
                        referencia: "MV-1111p",
                        producto:"Pantimedia dama transparente",
                        color: "Negro",
                        chica:0,
                        mediana:0,
                        grande:0,
                        extragrande:0,
                        precio:240,
                        precioxpartida:0
                    },
                    {
                        id: 3,
                        imagen:"https://erp.cerometros.com/document.php?hashp=yjDZnh2j7LF5eBLl84qm0D4u5Ua1M8RL",
                        marca: "Medivaric",
                        familiadeproducto: "Media",
                        categoria: "Baja compresion 8-15 mmHg",
                        referencia: "MV-1111p",
                        producto:"Pantimedia dama transparente",
                        color: "Sahara",
                        chica:0,
                        mediana:0,
                        grande:0,
                        extragrande:0,
                        precio:240,
                        precioxpartida:0
                    },
                    {
                        id: 4,
                        imagen:"https://erp.cerometros.com/document.php?hashp=5Cl6ljk2a7e14Jg5U0Or39ACRcDoiXXW",
                        marca: "Medivaric",
                        familiadeproducto: "Media",
                        categoria: "Baja compresion 8-15 mmHg",
                        referencia: "MV-1113p",
                        producto:"Tobimedia dama transparente",
                        color: "Beige",
                        chica:0,
                        mediana:0,
                        grande:0,
                        extragrande:0,
                        precio:150,
                        precioxpartida:0
                    },
                    {
                        id: 5,
                        imagen:"https://erp.cerometros.com/document.php?hashp=5Cl6ljk2a7e14Jg5U0Or39ACRcDoiXXW",
                        marca: "Medivaric",
                        familiadeproducto: "Media",
                        categoria: "Baja compresion 8-15 mmHg",
                        referencia: "MV-1113p",
                        producto:"Tobimedia dama transparente",
                        color: "Negro",
                        chica:0,
                        mediana:0,
                        grande:0,
                        extragrande:0,
                        precio:150,
                        precioxpartida:0
                    },
                    {
                        id: 6,
                        imagen:"https://erp.cerometros.com/document.php?hashp=5Cl6ljk2a7e14Jg5U0Or39ACRcDoiXXW",
                        marca: "Medivaric",
                        familiadeproducto: "Media",
                        categoria: "Baja compresion 8-15 mmHg",
                        referencia: "MV-1113p",
                        producto:"Tobimedia dama transparente",
                        color: "Sahara",
                        chica:0,
                        mediana:0,
                        grande:0,
                        extragrande:0,
                        precio:150,
                        precioxpartida:0
                    }
                    ]
      },
      }
  }
</script>

<style scoped>

</style>
