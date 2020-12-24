<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="exit" @click="LogoutUsers()">
          <div class="title-exit">
            ອອກຈາກລະບົບ
          </div>
         <icon style="cursor: pointer" name="logout"/>
      </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="sidebar">
      <div class="image-logo">
        <img src="../assets/VariLogo.png" alt="">
      </div>
<!--       menu-->
      <v-list nav dense>
<!--        <v-list-item>-->
<!--          <icon name="dashboard" class="ml-1"/>-->
<!--          <v-list-item-content class="ml-6">-->
<!--            <v-list-item-title>ໜ້າສະແດງຜົນຫຼັກ</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->

<!--        <v-list-group>-->
<!--          <template v-slot:activator>-->
<!--            <icon name="manage" class="ml-0"/>-->
<!--            <v-list-item-title class="ml-5">ຈັດການຂໍ້ມູນ</v-list-item-title>-->
<!--          </template>-->
<!--          <v-list-item>-->
<!--            <icon name="ProductDetail"/>-->
<!--            <v-list-item-content class="ml-5">-->
<!--              <v-list-item-title>ຂໍ້ມູນສິນຄ້າ</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--        </v-list-group>-->

        <v-list-item-group class="mt-5">
<!--          <v-list-item>-->
<!--            <icon name="product"/>-->
<!--            <v-list-item-content class="ml-5">-->
<!--              <v-list-item-title>ຂໍ້ມູນສິນຄ້າ</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->

          <v-list-item @click="RegisterInfo()">
            <icon name="user"/>
            <v-list-item-content class="ml-5">
              <v-list-item-title>ຂໍ້ມູນສະມາຊິກ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>


    </v-navigation-drawer>
  </nav>
</template>
<script>
import icon from '../components/icon';
import {mapActions} from 'vuex';
export default {
  components:{
    icon
  },
  data() {
    return {
      drawer: true,
    }
  },
  methods:{

    ...mapActions({
      LogoutUser: 'User/destroyToken'
    }),

    LogoutUsers(){
      this.LogoutUser().then(res =>{
          if(res){
            setTimeout(()=>{
              this.$emit('close');
              this.$emit('success');
              this.$toast.error("ອອກຈາກລະບົບສຳເລັດ...", {
                position: "top-right",
                timeout: 4000,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
              });
            })
          }
      })
    },




    // Category(){
    //   this.$router.push({
    //     name:"Category"
    //   }).catch(()=>{})
    // },
    // HomePage(){
    //   this.$router.push({
    //     name:"Home"
    //   }).catch(()=>{})
    // },

    RegisterInfo(){
      this.$router.push({
        name:"RegisterInfo"
      }).catch(()=>{})
    }
  }
}
</script>
<style scoped lang="scss">
.image-logo {
  position: relative;
  width: 100%;
  height: 64px;
  background-color: $bg-dashboard;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.image-logo img {
  position: absolute;
  top: 3px;
  left: 50px;
  max-width:150px;
  height: 60px;
  object-fit: contain;
}
.exit{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & .title-exit{
    margin-right: 10px;
    font-family: $font-family;
    font-size: 18px;
    color: red;
  }
}


</style>
