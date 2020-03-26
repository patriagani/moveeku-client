<template>
  <div class="home" style="padding-top: 50px;">
    <h4>{{transaction.movie.data.Title}}</h4>
    <h6>This movie will expired on: {{exp}}</h6>
    <br><br>
    <div class="container">
      <iframe width="560" height="315" :src="watchlink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'WatchMovie',
  components: {
    Footer
  },

  data: () => {
      return {
          transaction: {},
          exp: "",
          watchlink: ""
      }
    },

  props: ['url', 'isLogin'],

  methods: {
      getTransaction() {

            const options = {
                method: 'GET',
                headers: {'x-auth-token': localStorage.getItem('token')},
                baseURL: `${this.url}/transactions/${this.$route.params.transactionId}`,
            }

            axios(options)
                .then((response) => {
                    this.transaction = response.data
                    this.watchlink = `https://www.youtube.com/embed/${this.transaction.movie.watchlink.slice(32, this.transaction.movie.watchlink.length)}`
                    this.transactionCheck()
                })
                .catch((error) => {
                    console.log(error.message)
                })

      },

      transactionCheck() {
          let expdate = new Date(this.transaction.playdate)
          expdate.setDate(expdate.getDate() + 1)
          this.exp = expdate
          if (new Date()  > expdate) {
            this.$router.push('/transaction')
          }
      }
  },

  created() {
    if (!this.isLogin) {
        this.$router.push('/login')
      }
    else {
      this.getTransaction()
    }
  }
}
</script>
