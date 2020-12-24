<template>
  <v-row justify="center">
    <v-dialog
        @close="close"
        prevent-close
        v-model="dialog"
        persistent
        max-width="500">
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              icon
              depressed
              @click="close">
            <v-icon>{{icon}}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>

        <slot v-bind="{ close }"></slot>
      </v-card>
    </v-dialog>
  </v-row>

</template>

<script>
import icon from "@/components/icon";
export default {
  props: {
    title: {
      default: 'Title',
      type: String
    },
    icon:{
      default: 'mdi-close',
      type: String
    },
  },
  component:{
    icon,
  },
  computed:{
    dialog:{
      set(val){
        this.$store.commit("modalDelete_State",val);
      },
      get(){
        return this.$store.state.modalDeleteState;
      }
    }
  },
  methods:{
    close(){
      this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>
