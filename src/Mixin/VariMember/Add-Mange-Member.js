export default {
    data() {
        return {
            nameRules: [
                v => !!v || 'ກະລຸນາປ້ອນ...',
            ],
            numberRules: [
                v => !!v || 'ກະລຸນາປ້ອນ...',
                // v => Number.isInteger(v) || 'ສະເພາະຕົວເລກ',
            ],
            value: {
                gender: "",
                golden_time: "",
                name: "",
                surname: "",
                phone: "",
                district_id: "",
                village: "",
                family_members: "",
            },
            golden_time:null,
            gender: [
                {
                    name: 'ທ້າວ',
                },
                {
                    name: 'ນາງ',
                },
            ],

            // provinces: [],
            districts: [],
            // selectedProvince: {},
            // selectedDistrict: {},
            // filterDistricts: [],
            btnLoading: false,
            errorMessage:[],

        }
    },
    methods: {
        // FetchData() {
        //     this.$http.get('list-location').then((res) => {
        //         const items = res.data;
        //         this.provinces = items.provinces;
        //         this.selectedProvince = {...this.provinces[0]};
        //         this.filterDistricts = items.districts;
        //     }).catch(() => {
        //
        //     })
        // },

        // FilterDistricts(provinceID) {
        //     const result_checking = this.filterDistricts.filter(item => {
        //         if (item.province_id == provinceID) {
        //             return item;
        //         }
        //     });
        //     this.districts = result_checking;
        // },

        getDistrict(){
            this.$axios.get('district').then((res) => {
                console.log(res)
                if(res.data.status === 200){
                    this.districts = res.data.data
                }
            })
        },

        ValidateFrom() {
            if (this.$refs.form.validate()) {
                this.btnLoading = true;
                this.SaveData();
            }
        },

        SaveData() {
            this.$axios.post('member', this.value).then((res) => {
                if (res) {
                    setTimeout(() => {
                        this.$emit('close');
                        this.$emit('success');
                        this.$toast.info("ບັນທຶກຂໍ້ມູນສຳເລັດ...", {
                            position: "top-right",
                            timeout: 3000,
                            draggablePercent: 0.6,
                            showCloseButtonOnHover: false,
                            hideProgressBar: true,
                            closeButton: "button",
                            icon: true,
                            rtl: false,

                        });
                        this.btnLoading = false;
                        this.$refs.form.reset()
                    })
                }
            }).catch((e)=>{
                if(e && e.response){
                    const  message = (e.response.data.data || {}).error
                    this.errorMessage = message;
                    console.log(this.errorMessage)

                }
            })
        },
    },

    created() {
        this.getDistrict();
    },
    // watch: {
    //     'value.province_id': function (provinceID) {
    //         this.FilterDistricts(provinceID);
    //     },
    // }
}
