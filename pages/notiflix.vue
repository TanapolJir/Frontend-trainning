<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-btn @click="onBasicLoading">
          Basic Loading
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn @click="onWithWord">
          Basic Loading With Word
        </v-btn>
      </v-col>
      <v-col md="4">
        <v-btn @click="onConfirmThen">
          confirm Then
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
    onBasicLoading () {
      this.$Notiflix.loading()

      setTimeout(() => { this.$Notiflix.remove() }, 2000)
    },
    onWithWord () {
      this.$Notiflix.loadingWord()
    }
  }
}
</script>
