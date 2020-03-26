<template>
  <div id="app">
    <Navbar @userlogout="userLogout" :isLogin="isLogin" :url="url"/>
    <router-view  @userlogin="userLogin" :isLogin="isLogin" :url="url"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },

  data: () => {
    return {
      url: 'http://localhost:3000',
      isLogin: false
    }
  },

  methods: {
    userLogin() {
      this.isLogin = true
    },

    userLogout() {
      this.isLogin = false
    }
  },
  created() {
    if (localStorage.id) {
      this.isLogin = true
    }

  }
}
</script>

