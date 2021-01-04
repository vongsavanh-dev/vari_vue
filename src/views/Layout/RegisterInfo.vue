<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-list-item>
          <icon name="people-user" class="ml-3"/>
          <v-list-item-content class="ml-3">
            <v-list-item-title class="title-content">
              <span>ຈຳນວນສະມາຊິກ *(<span style="color: red">{{members.length}}</span>)</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="6">
          <span class="content-right">
             <span class="btn-icon-right d-flex justify-end align-end">
            <v-btn class="mr-5 mt-5" icon @click="OpenModalAdd">
              <v-icon color="black" size="35">add_circle</v-icon>
            </v-btn>
             </span>
          </span>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-data-table
          :headers="headers"
          :items="members"
          :itemid="members"

      >
        <template v-slot:item.actions="{item}">
          <v-icon
              small
              class="mr-2"
              @click="OpenModalEdit(item.id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              color="red"
              small
              @click="OpenModalDelete(item.id)"
          >
            mdi-delete
          </v-icon>
        </template>

      </v-data-table>



<!--      </v-card>-->

      <ModalAdd title="ເພີ່ມຂໍ້ມູນສະມາຊິກ">
        <template v-slot="{ close}">
          <AddMember @close="close" @success="FetchMember()"/>
        </template>
      </ModalAdd>

      <ModalEdit title="ແກ້ໄຂຂໍ້ມູນສະມາຊິກ">
        <template v-slot="{ close }">
          <EditMember :MemberEdit="ListMember" @close="close" @success="FetchMember()"/>
        </template>
      </ModalEdit>

      <ModalDelete>
        <template v-slot="{ close }">
          <DeleteMember :memberID="memberID" @close="close" @success="FetchMember()"/>
        </template>
      </ModalDelete>
    </v-container>
  </v-container>
</template>

<script>
import icon from "@/components/icon";
import AddMember from "@/views/Layout/CRUD/Addmember";
import EditMember from "@/views/Layout/CRUD/EditMember";
import DeleteMember from "@/views/Layout/CRUD/DeleteMember";

export default {
  components: {
    icon,
    AddMember,
    EditMember,
    DeleteMember,
  },
  data: () => ({
    headers: [


      {
        text: 'ເພດ',
        align: 'start',
        value: 'gender',
        sortable: false,

      },
      { text: 'ຊື່', value: 'name', align:'center', sortable: false,},
      { text: 'ນາມສະກຸນ', value: 'surname',align:'center',sortable: false,},
      { text: 'ເບີໂທ', value: 'phone',align:'center',sortable: false, },
      { text: 'ບ້ານ', value: 'village',align:'center',sortable: false, },
      { text: 'ເມືອງ', value: 'district_name',align:'center',sortable: false },
      { text: 'ແຂວງ', value: 'provice_name',align:'center',sortable: false },
      { text: 'ຈຳນວນນ້ຳທີ່ຊົມໃຊ້', value: 'family_members',align:'center',sortable: false },
      { text: 'ເວລາສະດວກຮັບນ້ຳ', value: 'golden_time',align:'center',sortable: false },
      { text: 'Actions', value: 'actions',sortable: false},
    ],
    members:[],
    memberID: "",
    ListMember: {},
    page: '1',
  }),

  methods: {

    filterMember(memberID) {
      return (
          this.members.filter((item) => {
            return item.id == memberID;
          })[0] || {}
      );
    },

    OpenModalAdd() {
      this.$store.commit("modalAdd_State", true);
    },

    OpenModalEdit(memberID) {
      this.ListMember = {
        ...this.filterMember(memberID)
      };
      this.$store.commit("modalEdit_State", true);
    },
    OpenModalDelete(memberID) {
      this.memberID = memberID;
      this.$store.commit("modalDelete_State", true);
    },
    FetchMember() {
      this.$axios.get('member').then((res) => {
        if (res.data.status == 200) {
          this.members = res.data.data.data;
          console.log(this.members)
        }
      })

    },
  },
  created() {
    this.FetchMember();
  }
}
</script>

<style scoped lang="scss">
.title-content {
  margin-top: 10px;

  & span {
    font-family: $font-family;
    font-weight: 500;
    font-size: 18px;


  }
}
</style>
