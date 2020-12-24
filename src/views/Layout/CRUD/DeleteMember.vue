<template>
  <div class="delete-member">
    <div class="image-delete">
      <img src="../../../assets/delete.png" alt="">
    </div>
    <div class="delete-title">
      <h2>ກົດຍືນຍັນເພື່ອລຶບຂໍ້ມູນ</h2>
    </div>
    <v-divider></v-divider>
    <template>
      <div class="btn">
        <div class="btn-action">
          <v-btn class="btn-success" color="primary" @click="DeleteItem(memberID)" :loading="btnLoading">
            ຍືນຍັນ
          </v-btn>

          <v-btn @click="$emit('close')" class="btn-cancel" color="error">
            ຍົກເລີກ
          </v-btn>
        </div>
      </div>
    </template>
  </div>
</template>

<script>


export default {
  name: "DeleteMember",
  props: [
    'memberID'
  ],
  data(){
    return{
      member_id:'',
      btnLoading:false,
    }
  },
  methods: {
    DeleteItem(memberID){
      this.btnLoading = true;
      this.$axios.delete('member/'+memberID).then((res)=>{
        if(res){
          this.$emit('close');
          this.$emit('success');
            this.$toast.error("ລືບຂໍໍ້ມູນສຳເລັດ",{
              position: "top-right",
              timeout: 3000,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: "button",
              icon: true,
              rtl: false
            })
        }
      })
    }

  },
  created() {
    this.member_id = this.memberID;
    console.log(this.member_id)
  }
}
</script>

<style scoped lang="scss">

.image-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  position: relative;
  top: 5px;

  & img {
    width: 200px;
    height: 150px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 5px;
    margin-bottom: 50px;
    margin-left: 35px;
  }
}

.delete-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0;
  margin-bottom: 30px;

  & h2 {
    font-family: $font-family;
    font-size: 22px;
    letter-spacing: 1px;
    color: #00838d;
  }
}

.btn {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  & .btn-action {
    margin: 10px 10px;

    & .btn-success {
      margin-right: 20px;
    }
  }
}


</style>
