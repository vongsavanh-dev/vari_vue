<template>
  <v-container class="container-register">
    <v-card class="card-register">
      <div class="image-register d-flex justify-center align-center mt-5">
        <img src="../../assets/VariLogo.png" alt="">
      </div>
      <div class="content-title">
        <span>ສະໝັກເປັນສະມາຊິກ</span>
      </div>
      <v-form ref="form">
        <v-container class="pa-10">
         <v-row dense>
           <v-col cols="12" md="2" sm="4">
             <v-select
                 label="ເພດ"
                 :rules="nameRules"
                 :items="gender"
                 :item-value="'name'"
                 :item-text="'name'"
                 dense
                 outlined
                 name="gender"
                 v-model="value.gender"
             ></v-select>
           </v-col>
           <v-col cols="12" md="5" sm="8">
             <v-text-field
                 label="ປ້ອນຊື່"
                 outlined
                 v-model="value.name"
                 :rules="nameRules"
                 required
                 dense>
             </v-text-field>
           </v-col>
           <v-col cols="12" md="5" sm="12">
             <v-text-field
                 label="ປ້ອນນາມສະກຸນ"
                 v-model="value.surname"
                 :rules="nameRules"
                 required
                 outlined
                 dense>
             </v-text-field>
           </v-col>
         </v-row>

          <v-row dense>
            <v-col cols="12" md="6" sm="12" >
              <v-text-field class="style-none"
                  label="ປ້ອນເບີໂທ"
                  v-model="value.phone"
                  :rules="numberRules"
                  outlined
                  type="number"
                  append-icon="false"
                  dense>
              </v-text-field>
            </v-col>

<!--            <v-col cols="12" md="6" sm="12">-->
<!--              <v-select-->
<!--                  dense-->
<!--                  outlined-->
<!--                  v-model="value.province_id"-->
<!--                  :rules="nameRules"-->
<!--                  label="ແຂວງ"-->
<!--                  name="province"-->
<!--                  :items="provinces"-->
<!--                  item-text="name"-->
<!--                  item-value="id">-->
<!--              </v-select>-->
<!--            </v-col>-->

            <v-col cols="12" md="6" sm="12">
              <v-text-field
                  value="ນະຄອນຫຼວງວຽງຈັນ"
                  label="ແຂວງ"
                  outlined
                  disabled
                  dense
              ></v-text-field>
            </v-col>


          </v-row>

          <v-row dense>

            <v-col cols="12" md="6" sm="12">
              <v-select
                  label="ເມືອງ"
                  v-model="value.district_id"
                  :rules="nameRules"
                  dense
                  outlined
                  :items="districts"
                  item-text="name"
                  item-value="id">
              </v-select>
            </v-col>

            <v-col cols="12" md="6" sm="12">
              <v-text-field
                  label="ປ້ອນບ້ານ"
                  v-model="value.village"
                  :rules="nameRules"
                  outlined
                  dense>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" >
              <v-text-field
                  class="mx-2 style-none"
                  label="ຈຳນວນນ້ຳຊົມໃຊ້ຕໍ່ອາທິດ (ຕຸກ)"
                  v-model="value.family_members"
                  :rules="numberRules"
                  outlined
                  rows="1"
                  dense
                  type="number"
                  append-icon="false"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span class="title-timeline">ເວລາສະດວກຮັບນ້ຳດື່ມ</span>
              <v-radio-group
                  v-model="value.golden_time"
                  row>
                <v-radio
                    label="9:00 - 16:00"
                    value="9:00-16:00">
                </v-radio>
                <v-radio
                    label="18:00 - 20:00"
                    value="18:00-20:00">
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
            <v-btn block large class="btn-register" @click="ValidateFrom" :loading="btnLoading">
              ບັນທຶກຂໍ້ມູນ
            </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import MixinsAddManage from "@/Mixin/VariMember/UserRegister-Member"
export default {
  mixins:[MixinsAddManage],
  created() {

  }
}
</script>

<style scoped lang="scss">
.container-register{
  width: 100%;
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin: 0 auto;
  //margin-bottom: 80px;
  & .card-register{
      width: 700px;
      height: 670px;


  }
}
.image-register {
  & img {
    max-width: 150px;
    height: 80px;
    object-fit: contain;
  }
}
.content-title{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  & span{
    font-size: 24px;
    font-family: $font-family;
    font-weight: bold;
    letter-spacing: 2px;
    color: #00838d;

  }
}
.title-timeline{
  font-family: $font-family;
  margin-left: 10px;
  color: #484848;

}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #3FD0DC;
  color: #FFFFFF;
  font-size: 18px;
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .image-register {
    & img {
      margin-top: 5px;
      width: 100px;
      height: 60px;
    }
  }

  .container-register{
    width: 100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin: 0 auto;
    margin-bottom: 100px;
    & .card-register{
      width: 100%;
      height: auto;
      margin-top: 50px;
    }
  }

  .content-title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    & span{
      font-size: 16px;
      font-family: $font-family;
      font-weight: bold;
      letter-spacing: 2px;
      color: #00838d;
    }
  }

  .btn-register{
    font-size: 16px;
  }

}

</style>
