<template>
  <v-container class="container-register">
    <v-card class="card-register">
      <div class="image-register d-flex justify-center align-center mt-5">
        <img src="../../../assets/VariLogo.png" alt="">
      </div>
      <div class="content-title">
        <span>ທ່ານໄດ້ສຳເລັດ ການສະໝັກເປັນສະມາຊິກ</span>
      </div>
      <div class="success-title">
        <span>ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ</span>
      </div>

    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
.container-register{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin: 0 auto;
  margin-bottom: 80px;
  & .card-register{
    width: 700px;
    height: 400px;
  }
}
.image-register {
  & img {
    max-width: 250px;
    height: 180px;
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
.success-title{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  span{
    font-size: 22px;
    font-family: $font-family;
    font-weight: bold;
    letter-spacing: 2px;
    color: #00838d;
  }
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 100px;
    & .card-register{
      width: 90%;
      height: 200px;
      margin-top: 50px;
    }
  }

  .content-title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    & span{
      font-size: 14px;
      font-family: $font-family;
      font-weight: bold;
      letter-spacing: 2px;
      color: #00838d;
    }
  }

  .success-title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    span{
      font-size: 12px;
      font-family: $font-family;
      font-weight: bold;
      letter-spacing: 2px;
      color: #00838d;
    }
  }


}

</style>
