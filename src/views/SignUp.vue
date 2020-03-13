<template>
    <div class="Login">
        <br><br>
        <h4>Sign Up New Account</h4>
        <p align="center">Already have an account? Sign in <router-link :to="{ path: '/login' }">here</router-link></p>
        <div class="container" style="padding-left:200px; padding-right: 200px; padding-bottom: 50px;">
            <form align="left">
                <label for="exampleEmailInput">Your Name</label>
                <input v-model="name" class="u-full-width" type="text" placeholder="Your Name" id="exampleNameInput">
                <label for="exampleEmailInput">Your Username</label>
                <input v-model="username" class="u-full-width" type="text" placeholder="Your Username" id="exampleUsernameInput">
                <label for="exampleEmailInput">Your email</label>
                <input v-model="email" class="u-full-width" type="email" placeholder="Your E-mail" id="exampleEmailInput">
                <label for="exampleEmailInput">Your Password</label>
                <input v-model="password" class="u-full-width" type="password" placeholder="Your Password" id="examplePasswordInput">
                <input @click.prevent="registerAdmin" class="button-primary" type="submit" value="Sign Up">
            </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SignUp',
  
  data: () => {
    return {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  },

  props: ['url'],

  methods: {
    registerAdmin() {
      
      let obj = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      }

      axios.post(`${this.url}/users/`, obj)
        .then((response) => {
          console.log('Register Success', response.data)
          this.$router.push('/login')
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  },

  components: {
    Footer
  },

  created() {
    if (localStorage.id) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>