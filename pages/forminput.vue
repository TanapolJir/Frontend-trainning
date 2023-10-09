<template>
  <v-container>
    <validation-observer
      ref="observer"
      v-slot="{ handleSubmit }"
    >
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <h1 class="blue">
          <v-icon x-large aria-hidden="false">
            mdi-account-circle
          </v-icon>
          ข้อมูลส่วนบุคคล
        </h1>
        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="prefix"
              rules="required"
            >
              <v-combobox
                v-model="form.prefix"
                label="คำนำหน้า"
                :items="['นาย', 'นางสาว', 'อื่นๆ']"
                placeholder="กรอกคำนำหน้า"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="firstname"
              rules="required|checktel"
            >
              <v-text-field
                v-model="form.firstname"
                label="ชื่อ"
                placeholder="กรอกชื่อ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="lastname"
              rules="required"
            >
              <v-text-field
                v-model="form.lastname"
                label="นามสกุล"
                placeholder="กรอกนามสกุล"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="gender"
              rules="required"
            >
              <v-combobox
                v-model="form.gender"
                label="เพศ"
                :items="['ชาย', 'หญิง', 'อื่นๆ']"
                placeholder="กรอกเพศ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="nationality"
              rules="required"
            >
              <v-text-field
                v-model="form.nationality"
                label="สัญชาติ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="ethnicity"
              rules="required"
            >
              <v-text-field
                v-model="form.ethnicity"
                label="เชื้อชาติ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="religion"
              rules="required"
            >
              <v-text-field
                v-model="form.religion"
                label="ศาสนา"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="birthday"
              rules="checkday|required"
            >
              <v-text-field
                v-model="form.birthday"
                label="วัน เดือน ปี เกิด (พ.ศ.)"
                placeholder="วว-ดด-ปปปป"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="citizen_number"
              rules="required|numeric|checkcitizen_no"
            >
              <v-text-field
                v-model="form.citizen_number"
                label="เลขประจำตัวประชาชน"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="weight"
              rules="required|numeric|checkweight"
            >
              <v-text-field
                v-model="form.weight"
                label="น้ำหนัก (กิโลกรัม)"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="height"
              rules="required|numeric|checkheight"
            >
              <v-text-field
                v-model="form.height"
                label="ส่วนสูง (เซนติเมตร)"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>
        <h1 class="blue">
          <v-icon x-large aria-hidden="false">
            mdi-school
          </v-icon>
          ข้อมูลการศึกษา
        </h1>
        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="educational"
              rules="required"
            >
              <v-text-field
                v-model="form.educational"
                label="ชื่อสถานศึกษา"
                placeholder="ชื่อสถานศึกษา"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>

          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="province_edu"
              rules="required"
            >
              <v-combobox
                v-model="form.province_edu"
                label="จังหวัด"
                :items="['กรุงเทพ', 'ปทุมธานี', 'นนทบุรี']"
                placeholder="เลือกจังหวัด"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="allowed"
              rules="checkday|required"
            >
              <v-text-field
                v-model="form.allowed"
                label="ได้รับอนุมัติเมื่อ (พ.ศ.)"
                placeholder="วว-ดด-ปปปป"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="grade"
              rules="required|checkgrade"
            >
              <v-text-field
                v-model="form.grade"
                label="ได้คะแนนเฉลี่ยสะสม"
                placeholder="ระบุ gpa เช่น 3.00"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="highest_degree"
              rules="required"
            >
              <v-combobox
                v-model="highest_degree"
                label="วุฒิการศึกษาสูงสุด"
                :items="['ปริญญาตรี', 'ปริญญาโทร', 'ปริญญาเอก']"
                placeholder="-- เลือก --"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="highest_edu"
              rules="required"
            >
              <v-text-field
                v-model="form.highest_edu"
                label="ชื่อสถานศึกษา"
                placeholder="ชื่อสถานศึกษาที่อยู่ระหว่างการศึกษา"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="curr_std"
              rules="required"
            >
              <v-combobox
                v-model="curr_std"
                label="อยู่ระหว่างการศึกษา ระดับ"
                :items="['ปริญญาตรี', 'ปริญญาโทร', 'ปริญญาเอก']"
                placeholder="-- เลือก --"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="curr_edu"
              rules="required"
            >
              <v-text-field
                v-model="form.curr_edu"
                label="ชื่อสถานศึกษา"
                placeholder="ชื่อสถานศึกษาที่อยู่ระหว่างการศึกษา"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>
        <h1 class="blue">
          <v-icon x-large aria-hidden="false">
            mdi-map
          </v-icon>
          ที่อยู่ปัจจุบัน
        </h1>
        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="house_no"
              rules="required"
            >
              <v-text-field
                v-model="form.house_no"
                label="บ้านเลขที่"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="village"
              rules="required"
            >
              <v-text-field
                v-model="form.village"
                label="หมู่บ้าน/อาคาร"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="vilage_no"
              rules="required|numeric"
            >
              <v-text-field
                v-model="form.vilage_no"
                label="หมู่ที่"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="alley"
              rules="required"
            >
              <v-text-field
                v-model="form.alley"
                label="ตรอก/ซอย"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="road"
              rules="required"
            >
              <v-text-field
                v-model="form.road"
                label="ถนน"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="district"
              rules="required"
            >
              <v-text-field
                v-model="form.district"
                label="ตำบล/แขวง"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="county"
              rules="required"
            >
              <v-text-field
                v-model="form.county"
                label="อำเภอ/เขต"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="province_house"
              rules="required"
            >
              <v-combobox
                v-model="form.province_house"
                label="จังหวัด"
                :items="['กรุงเทพ', 'ปทุมธานี', 'นนทบุรี']"
                placeholder="เลือกจังหวัด"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="zip"
              rules="required|numeric|checkzip"
            >
              <v-text-field
                v-model="form.zip"
                label="รหัสไปรษณีย์"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="telephone"
              rules="required|numeric|checktel"
            >
              <v-text-field
                v-model="form.telephone"
                label="โทรศัพท์ (ที่พัก/สามารถติดต่อได้)"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="telephone2"
              rules="numeric"
            >
              <v-text-field
                v-model="form.telephone2"
                label="ต่อ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="mobilephone"
              rules="required|numeric|checkmo"
            >
              <v-text-field
                v-model="form.mobilephone"
                label="โทรศัพท์เคลื่อนที่"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required"
            >
              <v-text-field
                v-model="form.email"
                label="E-mail"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <v-btn type="submit">
              submit
            </v-btn>
          </v-col>
          <v-col md="4">
            <v-btn @click="onNoSubmit">
              no submit
            </v-btn>
          </v-col>
          <v-col md="4">
            <v-btn @click="onResetData">
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        age: '',
        birthday: '',
        prefix: '',
        gender: '',
        nationality: '',
        ethnicity: '',
        religion: '',
        citizen_number: '',
        weight: '',
        height: '',
        educational: '',
        province_edu: '',
        allowed: '',
        grade: '',
        highest_degree: '',
        highest_edu: '',
        curr_std: '',
        curr_edu: '',
        house_no: '',
        village: '',
        vilage_no: '',
        alley: '',
        road: '',
        county: '',
        district: '',
        province_house: '',
        zip: '',
        telephone: '',
        telephone2: '',
        mobilephone: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // console.log('Submit', this.form)
    },
    onNoSubmit () {
      //   console.log('No Submit', this.form)
    },
    onReset () {
      this.$refs.observer.reset()
    },
    onResetData () {
      // eslint-disable-next-line no-unused-expressions, no-sequences
      this.$refs.observer.reset(),
      this.form.firstname = '',
      this.form.lastname = '',
      this.form.age = '',
      this.form.birthday = '',
      this.form.prefix = '',
      this.form.gender = '',
      this.form.nationality = '',
      this.form.ethnicity = '',
      this.form.religion = '',
      this.form.citizen_number = '',
      this.form.weight = '',
      this.form.height = '',
      this.form.educational = '',
      this.form.province_edu = '',
      this.form.allowed = '',
      this.form.grade = '',
      this.form.highest_degree = '',
      this.form.highest_edu = '',
      this.form.curr_std = '',
      this.form.curr_edu = '',
      this.form.house_no = '',
      this.form.village = '',
      this.form.vilage_no = '',
      this.form.alley = '',
      this.form.road = '',
      this.form.county = '',
      this.form.district = '',
      this.form.province_house = '',
      this.form.zip = '',
      this.form.telephone = '',
      this.form.telephone2 = '',
      this.form.mobilephone = '',
      this.form.email = ''
    }
  }
}
</script>

<style scoped>

</style>
