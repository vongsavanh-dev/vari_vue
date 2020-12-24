<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-list-item>
          <icon name="people-user" class="ml-3"/>
          <v-list-item-content class="ml-3">
            <v-list-item-title class="title-content">
              <span>ຈຳນວນສະມາຊິກ</span>
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
      <v-card>
        <v-simple-table dense>
          <template v-slot:default>
            <thead style="white-space: nowrap;">
            <tr>
              <th class="text-left">
                ເພດ
              </th>
              <th class="text-left">
                ຊື່
              </th>
              <th class="text-left">
                ນາມສະກຸນ
              </th>
              <th class="text-left">
                ເບີໂທ
              </th>
              <th class="text-left">
                ບ້ານ
              </th>
              <th class="text-left">
                ເມືອງ
              </th>
              <th class="text-left">
               ແຂວງ
              </th>
              <th class="text-left">
                ຈຳນວນສະມາຊິກ
              </th>
              <th></th>
            </tr>
            </thead>
            <tbody style="white-space: nowrap;">
            <tr :key="index"
                :data="member"
                v-for="(member, index) in (members)">
              <td>{{ genderLao[member.gender] }}</td>
              <td>{{ member.name }}</td>
              <td>{{ member.surname }}</td>
              <td>{{ member.phone }}</td>
              <td>{{ member.village }}</td>
              <td>{{ member.district_name }}</td>
              <td>{{ member.province_name }}</td>
              <td>{{ member.family_members }}</td>
              <td class=" btn-btn-form d-flex justify-center align-center">
                <span>
                 <v-btn icon color="primary" @click="OpenModalEdit(member.id)">
                    <icon name="td-icon-edit"/>
                 </v-btn>
                </span>
                <span>
               <v-btn icon color="error" @click="OpenModalDelete(member.id)">
                   <icon name="td-icon-delete"/>
               </v-btn>
              </span>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>

        <template #footer>
          <v-pagination
              v-model="members"
              :length="Math.ceil(members.length / page)"
          />
        </template>


      </v-card>

      <ModalAdd title="ເພີ່ມຂໍ້ມູນສະມາຊິກ">
        <template v-slot="{ close}">
          <AddMember @close="close" @success="FetchMember()"/>
        </template>
      </ModalAdd>

      <ModalEdit title="ແກ້ໄຂຂໍ້ມູນສະມາຊິກ">
        <template v-slot="{ close }">
          <EditMember  :MemberEdit="ListMember"  @close="close" @success="FetchMember()"/>
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
  data() {
    return {
      members:[],
      memberID:"",
      ListMember:{},
      page:'2',
      max:'2',
      pagination: {
        page: 1,
        total: 0,
        perPage: 0,
        visible: 7
      },

      genderLao:{
        Male:'ທ້າວ',
        Female:'ນາງ',
        Other:'ອື່ນໆ'
      }
    }
  },
  methods:{
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
    OpenModalEdit(memberID){
      this.ListMember = {
        ...this.filterMember(memberID)
      };
      this.$store.commit("modalEdit_State",true);
    },
    OpenModalDelete(memberID) {
      this.memberID = memberID;
      this.$store.commit("modalDelete_State", true);
    },

    FetchMember(){
      this.$axios.get('member').then((res)=>{
        if (res.data.status == 200){
          this.members = res.data.data;
          console.log(this.members)
        }
      })

    }

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
