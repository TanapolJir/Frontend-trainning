<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-btn @click="onBasic">
          Basic Alert
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn @click="onTimer">
          Timer Alert
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn @click="onConfirmThen">
          confirm Then
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn @click="onConfirmNew">
          confirm New
        </v-btn>
      </v-col>
    </v-row>
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
        birthday: ''
      }
    }
  },
  methods: {
    onBasic () {
      this.$swal({
        icon: 'warning',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    },
    onTimer () {
      this.$swal({
        icon: 'warning',
        title: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 2500
      })
    },
    onConfirmThen () {
      this.$swal({
        title: 'ต้องการบันทึกข้อมูลใช่หรือไม่',
        text: 'เมื่อบันทึกแล้วไม่สามารถแก้ไขข้อมูลได้',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ยกเลิก',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        reverseButtons: true
      }
      ).then(
        (result) => {
          if (result.isConfirmed) {
            this.$swal({
              icon: 'success',
              title: 'Confirmed',
              text: 'บันทึกข้อมูลแล้ว',
              showConfirmButton: false,
              timer: 2500
            })
          }
        }
      )
    },
    async onConfirmNew () {
      const result = await this.$swal({
        title: 'ต้องการบันทึกข้อมูลใช่หรือไม่',
        text: 'เมื่อบันทึกแล้วไม่สามารถแก้ไขข้อมูลได้',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ยกเลิก',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        reverseButtons: true
      })

      if (result.isConfirmed) {
        this.$swal({
          icon: 'success',
          title: 'Confirmed',
          text: 'บันทึกข้อมูลแล้ว',
          showConfirmButton: false,
          timer: 2500
        })
      }
    }
  }
}
</script>
