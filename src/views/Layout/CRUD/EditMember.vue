<template>
  <v-container>
    <v-form class="mt-5 mb-3" ref="form">
      <v-row dense>
        <v-col cols="12" md="2" sm="4">
          <v-select
              label="ເພດ"
              :rules="nameRules"
              :items="gender"
              :item-value="'genderE'"
              :item-text="'name'"
              dense
              outlined
              name="gender"
              v-model="MemberEdit.gender"
          ></v-select>
        </v-col>
        <v-col cols="12" md="5" sm="8">
          <v-text-field
              label="ປ້ອນຊື່"
              v-model="MemberEdit.name"
              :rules="nameRules"
              outlined
              dense>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="5" sm="12">
          <v-text-field
              label="ປ້ອນນາມສະກຸນ"
              v-model="MemberEdit.surname"
              :rules="nameRules"
              outlined
              dense>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12" md="6" sm="12">
          <v-text-field
              label="ປ້ອນເບີໂທ"
              outlined
              :rules="nameRules"
              v-model="MemberEdit.phone"
              dense>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-text-field
              label="ປ້ອນບ້ານ"
              v-model="MemberEdit.village"
              :rules="nameRules"
              outlined
              dense>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12" md="6" sm="12">
          <v-select
              dense
              outlined
              v-model="MemberEdit.province_id"
              :rules="nameRules"
              label="ແຂວງ"
              name="province_id"
              :items="provinces"
              item-text="name"
              item-value="id"
          >
          </v-select>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-select
              label="ເມືອງ"
              v-model="MemberEdit.district_id"
              :rules="nameRules"
              dense
              outlined
              name="district_id"
              :items="districts"
              item-text="name"
              item-value="id">
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
              class="mx-2"
              label="ປ້ອນຈຳນວນສະມາຊິກ"
              v-model="MemberEdit.family_members"
              :rules="numberRules"
              rows="1"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions class="d-flex justify-end align-end" @click="ValidateFrom">
        <v-btn color="primary">
          ບັນທຶກ
        </v-btn>
        <v-btn color="error" @click="$emit('close')">
          ຍົກເລີກ
        </v-btn>

      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
import MixinsEditManage from "@/Mixin/VariMember/Edit-Mange-Member"

export default {
  props:['MemberEdit'],
  mixins: [MixinsEditManage],

  created() {
    this.FetchData();
  }
}
</script>

<style scoped>

</style>
