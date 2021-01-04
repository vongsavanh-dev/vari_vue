<template>
  <v-container>
    <v-form class="mt-5 mb-3" ref="form">
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
        <v-col cols="12" md="6" sm="12">
          <v-text-field
              label="ປ້ອນເບີໂທ"
              v-model="value.phone"
              :rules="numberRules"
              outlined
              type="number"
              dense>
          </v-text-field>
        </v-col>
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
        <v-col cols="12">
          <v-textarea
              class="mx-2"
              label="ຈຳນວນນ້ຳຊົມໃຊ້ຕໍ່ອາທິດ (ຕຸກ)"
              v-model="value.family_members"
              :rules="numberRules"
              rows="1"
              type="number"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <span class="title-timeline">ເວລາສະດວກຮັບນ້ຳດື່ມ</span>
          <v-radio-group class="ml-2"
              v-model="value.golden_time"
              row>
            <v-radio
                color="blue"
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
      <v-divider></v-divider>
      <v-card-actions class="d-flex justify-end align-end">
        <v-btn color="primary" @click="ValidateFrom" :loading="btnLoading">
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

import MixinsAddManage from "@/Mixin/VariMember/Add-Mange-Member"

export default {
  mixins: [MixinsAddManage],
  created() {
  },
}
</script>

<style scoped lang="scss">
.title-timeline{
  font-family: $font-family;
  margin-left: 10px;
  color: #484848;

}
</style>
