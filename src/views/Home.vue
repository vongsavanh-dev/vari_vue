<template>
  <div class="home">
    <v-container fluid class="px-15">
      <v-row>
        <v-col cols="12">
          <div class="bg-card-image">
            <v-card class="pa-2 main-card-image">
              <v-col cols="6">
                <div class="dashboard-content">
                  <div class="dashboard-header-title">
                    <h1>Vari <span>Dashboard</span></h1>
                  </div>
                  <div class="dashboard-title">
                    <h2>ລະບົບຈັດການຮ້ານຄ້າ <span>ອີໂວ</span></h2>
                  </div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="image-card-dashboard">
                  <img src="../assets/dash1logo-01.png" alt="">
                </div>
              </v-col>
            </v-card>
          </div>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <v-card class="pa-2 card-main" outlined>
            <h3>This is option 1</h3>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                <v-list-item-icon>
                  <v-icon class="icon-card" style="color: #ffffff;">mdi-home</v-icon>
                </v-list-item-icon>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="4" md="4" sm="12">
          <v-card class="pa-2 card-main" outlined>
            <h3>This is option 1</h3>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                <v-list-item-icon>
                  <v-icon class="icon-card" style="color: #ffffff;">mdi-send</v-icon>
                </v-list-item-icon>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="4" md="4" sm="12">
          <v-card class="pa-2 card-main" outlined>
            <h3>This is option 1</h3>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                <v-list-item-icon>
                  <v-icon class="icon-card" style="color: #ffffff;">mdi-store</v-icon>
                </v-list-item-icon>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="6" md="4" sm="12">
          <v-card class="pa-2 card-second" outlined>

          </v-card>
        </v-col>

        <v-col cols="3" md="4" sm="12">
          <v-card class="pa-2" style="height: 100px;" outlined>

          </v-card>
          <v-card class="pa-2 mt-6" style="height: 100px;" outlined>

          </v-card>
        </v-col>

        <v-col cols="3" md="4" sm="12">
          <v-card class="pa-2" style="height: 100px;" outlined>

          </v-card>
          <v-card class="pa-2 mt-6" style="height: 100px;" outlined>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
<style scoped lang="scss">
.dashboard-content {
  position: relative;
  .dashboard-header-title {
    position: absolute;
    top: 30px;
    left: 20px;

    & h1 {
      text-transform: uppercase;
      color: $bg-icon;
      font-weight: 800;
    }

    & span {
      letter-spacing: 1px;
      color: black;
      font-weight: 600;
    }
  }
}

.dashboard-title{
  position: relative;
  & h2{
    position: absolute;
    top: 80px;
    left: 20px;
    font-family: $font-family;
    letter-spacing: 1px;
    font-size: 28px;
    color: $color-font-light;
    border-left: 4px solid #e96464;
    padding-left: 10px;
    & span{
      color: $bg-icon;
    }
  }
}


//.icon-home{
//  font-size: 25px;
//  background-color: $bg-icon;
//  border-radius: 50%;
//  border: 3px solid #ffffff;
//  padding: 2px;
//  margin-top: 25px;
//
//  &.mdi:before {
//    color: $color-icon-dark;
//  }
//}
.title-dashboard-content {
  margin-top: 25px;
  text-transform: uppercase;
}

.bg-card-image .main-card-image {
  height: 250px;
  width: 100%;
  border-radius: 20px;
  background: #ffffff;

}

.main-card-image {
  height: 250px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  & img {
    width: 400px;
    height: 250px;
    object-fit: cover;
    position: absolute;
    top: 2px;
    right: 80px;
  }
}

.card-main {
  height: 100px;
}
.card-second {
  height: 225px;
}


h3 {
  color: #262626;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;

  &.small {
    font-size: 14px;
  }
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
}

.icon-card {
  font-size: 30px;
  top: 5px;
  left: 3px;

  &.mdi:before {
    color: #FFFFFF;
  }
}

.card-main {
  display: block;
  position: relative;
  max-width: 100%;
  background-color: #f2f8f9;
  border-radius: 4px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2.8);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(30);
  }
}

.card-main:hover {
  p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }
}

</style>
