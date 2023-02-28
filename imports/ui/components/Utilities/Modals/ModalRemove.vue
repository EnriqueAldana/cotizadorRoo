<template>
    <v-dialog id="modalRemove" max-width="500px" v-model="dialog">
        <v-card>
            <v-card-title class="headline">
                <div class="title">
                    Envíar {{modalData.typeElement}}
                </div>
            </v-card-title>
            <v-card-text>
                ¿Estas seguro de envíar {{modalData.preposition}}
                {{modalData.typeElement}}
                al correo : {{modalData.mainNameElement}}?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="default" text v-on:click="cancel">
                    Cancelar
                </v-btn>
                <v-btn color="error" depressed @click="removeElement">
                    Envíar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ModalRemove",
        props: ['modalData'],
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            removeElement() {
                this.$emit('id_element', this.modalData._id);
                this.dialog = false;
            },
            cancel() {
                this.dialog = false;
            }
        }
    }
</script>

<style scoped>

</style>