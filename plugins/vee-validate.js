/* eslint-disable eqeqeq */
import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

import { required, numeric } from 'vee-validate/dist/rules'

extend('required', {
  ...required, message: 'กรุณากรอกข้อมูล'
})

extend('numeric', {
  ...numeric, message: 'กรอกตัวเลข'
})

extend('checkday', (value) => {
// dd-mm-yyyy
// 03-10-2566
  const obj = value.split('-')
  if (+obj[0] > 31 || obj[0] < 1) {
    return 'กรุณาระบุวันที่ให้ถูกต้อง'
  }
  if (+obj[1] > 12 || obj[1] < 1) {
    return 'กรุณาระบุเดือนให้ถูกต้อง'
  }
  if (+obj[2] > 2600 || obj[2] < 2400) {
    return 'กรุณาระบุปีให้ถูกต้อง'
  }
  return true
})

extend('checkmo', (value) => {
  if (value.length > 10) {
    return 'กรุณาระบุเบอร์ให้ถูกต้อง'
  }
  if (value[0] != 0) {
    return 'กรุณาระบุเบอร์ให้ถูกต้อง'
  }
  return true
})

extend('checktel', (value) => {
  if (value.length > 10) {
    return 'กรุณาระบุเบอร์ให้ถูกต้อง'
  }
  if (value[0] != 0 | value[1] != 2) {
    return 'กรุณาระบุเบอร์ให้ถูกต้อง'
  }
  return true
})

extend('checkcitizen_no', (value) => {
  if (value.length != 13) {
    return 'กรุณาระบุเลขบัตรประชาชนให้ถูกต้อง'
  }
  return true
})

extend('checkweight', (value) => {
  if (value > 999) {
    return 'กรุณาระบุน้ำหนักให้ถูกต้อง'
  }
  return true
})

extend('checkheight', (value) => {
  if (value > 999) {
    return 'กรุณาระบุส่วนสูงให้ถูกต้อง'
  }
  return true
})

extend('checkgrade', (value) => {
  if (!isNaN(value) && value >= 0.00 && value <= 4.00) {
    return true // Valid grade
  } else {
    return false // Invalid grade
  }
}
)

extend('checkzip', (value) => {
  if (value.length != 5) {
    return 'กรุณาระบุเลขไปรษณีย์ให้ถูกต้อง'
  }
  return true
}
)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
