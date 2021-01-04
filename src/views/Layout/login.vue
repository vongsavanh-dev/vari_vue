<template>
  <v-container class="container-login">
    <v-card class="card-login">
      <div class="image-title d-flex justify-center align-center">
        <img src="../../assets/VariLogo.png" alt="">
      </div>
      <div class="title-content">
        <h2>ລ໋ອກອິນ<span>ເຂົ້າສູ່ລະບົບ</span></h2>
      </div>
      <div>
        <span class="textShow-error">  {{ $store.getters["User/ShowMsgErrors"] }}</span>
      </div>
      <v-form>
        <v-container>
          <v-row class="d-flex justify-center align-center">
            <v-col cols="10" sm="10" class="mt-5">
              <v-text-field
                  label="ຊື່ຜູ້ໃຊ້ລະບົບ"
                  outlined
                  v-model="users.email"
                  :rules="[rules.required,]"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex justify-center align-center mt-4">
            <v-col cols="10" sm="10">
              <v-text-field
                  v-model="users.password"
                  outlined
                  :rules="[rules.required]"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="ປ້ອນລະຫັດຜ່ານ"
                  value=""
                  class="input-group--focused"
                  @click:append="show = !show"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="d-flex justify-center align-center">
            <v-col cols="10" sm="10">
              <v-btn block x-large  class="btn-login" @click="AdminSigIn()">
                ເຂົ້າສູ່ລະບົບ
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      show: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'ປ້ອນຂໍູ້ມນ...',
        emailMatch: () => (`The email and password you entered don't match`),
      },

      users: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions({
      AdminLogin: 'User/LoginUser'
    }),
    AdminSigIn() {
      this.AdminLogin(this.users).then(()=>{
        setTimeout(()=>{
          this.$emit('close');
          this.$emit('success');
          this.$toast.info("ເຂົ້າສູ່ລະບົບສຳເລັດ...", {
            position: "top-right",
            timeout: 3000,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false
          });
        })
      }).catch(()=>{})
    }
  }

}
</script>
<style scoped lang="scss">
.textShow-error{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $font-family;
  font-size: 18px;
  color: red;
}
.container-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin: 0 auto;
  margin-bottom: 80px;


  & .card-login {
    width: 500px;
    height: 550px;

  }
}

.image-title {
  & img {
    margin-top: 20px;
    max-width: 200px;
    height: 80px;
  }
}

.title-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-family: $font-family;
  font-size: 14px;
  letter-spacing: 2px;

  & span {
    color: #00838d;
    padding-left: 5px;
  }
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #3FD0DC;
  color: #FFFFFF;
  font-size: 22px;
}

//Responsive CSS

@media only screen and (max-width: 600px) {
  .image-title {
    & img {
      margin-top: 10px;
      max-width: 150px;
      height: 60px;
    }
  }

  .title-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-family: $font-family;
    font-size: 12px;
    letter-spacing: 2px;

    & span {
      color: #00838d;
      padding-left: 5px;
    }
  }
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #3FD0DC;
  color: #FFFFFF;
  font-size: 18px;
}
</style>





























