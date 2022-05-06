<template>
  <div>
    <!-- {{ $store.state.loggedIn }} -->
    <!-- {{ $auth.loggedIn }} -->
    <b-container>
      <b-card>
        <b-card-header>
          お手数ですが、認証をお願いします...😌
        </b-card-header>
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            label="password："
          >
            <b-form-input
              v-model="form.password"
              type="password"
            ></b-form-input>
          </b-form-group>
          <p>{{ form.message }}</p>
          <b-button type="submit" variant="primary">OK</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      form: {
        password: '',
        message: '',
      }
    }
  }, /* data */

  computed: {

  }, /* computed */

  mounted () {
    // console.log(this.$route.query.redirect)
  }, /* mounted */

  methods: {
    async onSubmit () {

      const response = await this.$axios
        .post(`/.netlify/functions/login`, {
          password: this.form.password,
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.form.message = "パスワードが違います。"
          }
        })
        if (response.status == 200) {
          this.$store.commit('login')
          if (this.$route.query.redirect) {
            this.$router.push(this.$route.query.redirect)
          }
          this.$router.push('/')
        }
      console.log(response.data.hashedPassword)
      this.$cookies.set('teten-portfolio', response.data.hashedPassword)
      console.log(this.$cookies.get('teten-portfolio'))
      const response2 = await this.$axios
        .post('/.netlify/functions/authentication', {
          hashedPassword: this.$cookies.get('teten-portfolio')
        })
      console.log(response2)
      // if (response.status == 200) {
      //   console.log('OK')
      //   console.log(response.data.hashedPassword)
      //   localStorage.setItem('teten-portfolio', response.data.hashedPassword)
      //   // this.$store.mutations.login()
      //   // if (this.$route.query.redirect) {
      //   //   this.$router.push(this.$route.query.redirect)
      //   // }
      //   // this.$router.push('/')
      // }

      // if (pass.data === 'OK') {
      //   console.log('clear')
      // } else if (pass.data == 'パスワードが違います。') {
      //   this.form.message = "パスワードが違います。"
      // }
    },
  } /* methods */

}
</script>




<style>

</style>
