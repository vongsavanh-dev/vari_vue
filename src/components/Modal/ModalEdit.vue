<template>
  <v-row justify="center">
    <v-dialog
        @click="close"
        v-model="dialog"
        persistent
        max-width="600">
      <v-card>
        <v-card-actions class="ml-2">
          <icon name="icon-add"/>
          <v-list-item-title class="title-header-form ml-5">
            <span>{{ title }}</span>
          </v-list-item-title>
          <v-spacer></v-spacer>
          <v-btn
              icon
              depressed
              @click="close">
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>

        <slot v-bind="{close}"></slot>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
import icon from "@/components/icon"
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
  components:{
    icon,
  },
  data(){
    return {
    }
  },
  computed: {
    dialog: {
      set(val){
        this.$store.commit("modalEdit_State", val);
      },
      get(){
        return this.$store.state.modalEditState;
      }
    }
  },
  methods:{
    close(){
      this.dialog = false;
      this.$emit('close');
    }
  }
}
</script>

<style scoped>

</style>
