<template>
  <v-container>
    <validation-observer
      ref="observer"
      v-slot="{ handleSubmit }"
    >
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="firstname"
              rules="required"
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
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="age"
              :rules="{
                required:true,
                numeric:true
              }"
            >
              <!-- rules="required|numeric" -->
              <v-text-field
                v-model="form.age"
                label="อายุ"
                placeholder="กรอกอายุ"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <validation-provider
              v-slot="{ errors }"
              name="birthday"
              rules="checkday|required"
            >
              <v-text-field
                v-model="form.birthday"
                label="วันเกิด"
                placeholder="กรอกวันเกิด"
                :error-messages="errors"
              />
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-btn @click="onEdit">
              Edit
            </v-btn>
          </v-col>
        </v-row>

        <!-- <v-col md="4">
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
            <v-btn @click="onReset">
              Reset
            </v-btn>
          </v-col> -->
      </v-form>
    </validation-observer>
  </v-container>
</template>

<script>
export default {
  middleware: 'middlewareUser',
  data () {
    return {
      form: {
        firstname: this.$store.state.user.firstname,
        lastname: this.$store.state.user.lastname,
        age: this.$store.state.user.age,
        birthday: this.$store.state.user.birthday
      }
    }
  },
  methods: {
    onEdit () {
      this.$router.push('/basicinput')
    }
  }
}
</script>
