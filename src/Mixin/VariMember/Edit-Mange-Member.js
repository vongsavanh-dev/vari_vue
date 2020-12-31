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
            gender: [
                {
                    name: 'ທ້າວ',
                },
                {
                    name: 'ນາງ',
                },
            ],

            provinces: [],
            districts: [],
            selectedProvince: {},
            selectedDistrict: {},
            filterDistricts: [],
            btnLoading: false,
        }
    },
    methods: {
        FetchData() {
            this.$http.get('list-location').then((res) => {
                const items = res.data;
                this.provinces = items.provinces;
                this.selectedProvince = {...this.provinces[0]};
                this.filterDistricts = items.districts;
            }).catch(() => {

            })
        },


        FilterDistricts(provinceID) {
            const result_checking = this.filterDistricts.filter(item => {
                if (item.province_id == provinceID) {
                    return item;
                }
            });
            this.districts = result_checking;
        },

        ValidateFrom() {
            if (this.$refs.form.validate()) {
                this.btnLoading = true;
                this.UpdateData();
            }
        },

        UpdateData() {
            this.$axios.put(`member/${this.MemberEdit.id}`, {
                'gender':this.MemberEdit.gender,
                'name':this.MemberEdit.name,
                'surname':this.MemberEdit.surname,
                'phone':this.MemberEdit.phone,
                'village':this.MemberEdit.village,
                'province_id':this.MemberEdit.province_id,
                'district_id':this.MemberEdit.district_id,
                'family_members':this.MemberEdit.family_members,
                'golden_time':this.MemberEdit.golden_time,
            }).then(res => {
                if (res.status === 200) {
                    setTimeout(() => {
                        this.$emit('close');
                        this.$emit('success');
                        this.$toast.success("ອັບເດດຂໍ້ມູນສຳເລັດ...", {
                            position: "top-right",
                            timeout: 3000,
                            draggablePercent: 0.6,
                            showCloseButtonOnHover: false,
                            hideProgressBar: true,
                            closeButton: "button",
                            icon: true,
                            rtl: false
                        });
                        this.btnLoading = false;
                        this.$refs.form.reset()
                    })
                }
            }).catch(() => {});
        }
    },

    watch: {
        'MemberEdit.province_id': function (provinceID) {
            this.FilterDistricts(provinceID);
        },
    }
}
