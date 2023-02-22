
<v-data-table
        :headers="headers"
        :items="desserts"
        item-key="id"
        v-model="selectedRows"
        class="elevation-1">
          <template v-slot:item="{ item }">
            <tr :class="selectedRows.indexOf(item.id)>-1?'cyan':''" @click="rowClicked(item)">
                <td>{{item.name}}</td>
                <td>{{item.calories}}</td>
                <td>{{item.fat}}</td>
                <td>{{item.carbs}}</td>
                <td>{{item.protein}}</td>
                <td>{{item.iron}}</td>
            </tr>
        </template>
      </v-data-table>




<template>
    <v-app>
        <v-container>
            <h1>Hola mundo con Meteor JS y Vue JS</h1>
            <v-btn color="primary" @click="openAlert">Alerta</v-btn>
            <v-btn color="success" @click="openLoader">Loader</v-btn>
            <v-btn color="error" @click="openModalRemove">Modal remove</v-btn>

        </v-container>
        <alert-message ref="refAlertMessageTest"></alert-message>
        <loader ref="refLoaderTest"></loader>
        <modal-remove ref="refModalRemove" v-bind:modalData="productTemp"
                      @id_element="deleteUser"></modal-remove>
    </v-app>
</template>

<script>
    import AlertMessage from "./components/Utilities/Alerts/AlertMessage";
    import Loader from "./components/Utilities/Loaders/Loader";
    import ModalRemove from "./components/Utilities/Modals/ModalRemove";

    export default {
        name: "App",
        components: {
            AlertMessage,
            Loader,
            ModalRemove
        },
        data() {
            return {
                productTemp: {
                    preposition: 'el',
                    typeElement: 'producto',
                    mainNameElement: '',
                    _id: null,
                    element: {}
                }
            }
        },
        methods: {
            openAlert() {
                this.$refs.refAlertMessageTest.showAlertFull("star", "success",
                    "Logro desbloqueado", '', 5000, '', 'bottom', "Has pasado al siguiente nivel!!");
            },
            openLoader() {
                this.$refs.refLoaderTest.activate();
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
                this.productTemp.element = product;
                this.productTemp._id = product._id;
                this.productTemp.mainNameElement = product.name;
                this.$refs.refModalRemove.dialog = true;
            },
            deleteUser(idUser) {
                console.log("Id del usuario a eliminar: ", idUser);
            }
        }
    }
</script>

<style scoped>

</style>
