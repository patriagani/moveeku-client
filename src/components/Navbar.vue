<template>
  <div class="navbar">
    <nav class="nav-show">
        <div class="container">
            <ul>
                <li><router-link :to="{ path: '/' }">Home</router-link></li>
                <li v-if="isLogin" ><router-link :to="{ path: '/movielist' }">Movies</router-link></li>
                <li v-if="isLogin" ><router-link :to="{ path: '/transaction' }">Transaction</router-link></li>
                <li v-if="isLogin" ><router-link :to="{ path: '/topup' }">Top Up MVP</router-link></li>
                
                <li v-if="!isLogin" class="u-pull-right"><router-link :to="{ path: '/login' }">Login</router-link></li>
                <li v-if="!isLogin" class="right"><router-link :to="{ path: '/signup' }">Register</router-link></li>
                <li v-if="isLogin" class="right"><router-link :to="{ path: '/' }" v-on:click.native="signOut()" >Sign Out</router-link></li>
                <li class="icon">
                    <a href="javascript:void(0);" onclick="toggleMobileNav();">&#9776;</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>

export default {

  data: () => {
      return {
          
      }
  },

  props: ['url', 'isLogin'],

  methods: {

    signOut() {
        localStorage.clear()
        this.$emit('userlogout')
    }
  },

  created() {
      if (localStorage.id) {
         this.isLogin = true
      }
  }


}
</script>>
