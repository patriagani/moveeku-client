<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Your Avaiable Movies to Watch</h4>
    <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <WatchMovieCard v-for="transaction in transactions" :key="transaction" :movie="transaction.movie" :transactionId="transaction._id" :url="url"/>
    </div>

    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import WatchMovieCard from '@/components/WatchMovieCard.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'MovieList',
  components: {
    Footer,
    WatchMovieCard
  },

  data: () => {
      return {
          transactions: []
      }
    },

  props: ['url', 'isLogin'],

  methods: {
      getTransactions() {

            const options = {
                method: 'GET',
                headers: {'x-auth-token': localStorage.getItem('token')},
                baseURL: `${this.url}/transactions`,
            }

            axios(options)
                .then((response) => {
                    this.transactions = response.data 
                })
                .catch((error) => {
                    console.log(error.message)
                })

      },

      playMovie(transactionId) {

            const options = {
                method: 'PATCH',
                headers: {'x-auth-token': localStorage.getItem('token')},
                baseURL: `${this.url}/transactions/${transactionId}`,
                data: {playdate: new Date()}
            }

            axios(options)
                .then((response) => {
                    console.log(response.data)
                    this.$router.push(`/watchmovie/${transactionId}`)
                })
                .catch((error) => {
                    console.log(error.message)
                })

      }
  },

  computed: {
    expired() {
      return this.transactions.map(function(e) {
        if (e.playdate) {
          let date = new Date(e.playdate)
          date.setDate(date.getDate() + 1)
          return date.toISOString()
        }
        else{
          return 'none'
        }
      })
    },

    played() {
      return this.transactions.map(function(e) {
        if (e.playdate) {
          let expdate = new Date(e.playdate)
          expdate.setDate(expdate.getDate() + 1)
          if (new Date()  > expdate) {
            return { review: e.review, play: false, transaction: e._id}
          }
          else {
            return {review: e.review, play: true, transaction: e._id}
          }
        }
        else{
          return {review: e.review, play: true, transaction: e._id}
        }
      })
    }
  },

  created() {
    if (!this.isLogin) {
        this.$router.push('/login')
      }
    else {
      this.getTransactions()
    }
  }
}
</script>
