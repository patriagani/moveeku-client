<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Your Transactions</h4>
    <h5>Your current MVP balance is 10.000</h5>
    <br><br>
    <div class="container">
      <div class="row">
        <div class="three columns">
          <p v-for="transaction in transactions" :key="transaction" style="margin-bottom: 10px; padding: 10px; font-size: 12px;">{{transaction.movie.data.Title}}</p>
        </div>
        <div class="three columns">
          <p v-for="transaction in transactions" :key="transaction" style="margin-bottom: 10px; padding: 10px; font-size: 12px;">{{transaction.date.slice(0,10)}}</p>
        </div>
        <div class="three columns">
          <p v-for="exp in expired" :key="exp" style="margin-bottom: 10px; padding: 10px; font-size: 12px;">Expired: {{exp.slice(0,10)}}</p>
        </div>
        <div class="three columns">
          <div v-for="play in played" :key="play">
            <div v-if="play.play" style="display: flex; justify-content: center;">
              <router-link class="button" style="margin-left: 10px;" :to="{ path: `/review/${play.review}` }">Review</router-link>
              <button style="margin-left: 10px;" class="button button-primary" @click="playMovie(play.transaction)">Play Movie</button>
            </div>
            <div v-if="!play.play" style="display: flex; justify-content: center;">
              <router-link class="button" style="margin-left: 10px;" :to="{ path: `/review/${play.review}` }">Review</router-link>
              <a style="margin-left: 10px;" class="button button-warning" href="#">Movie Expired</a>
            </div>
          </div>
        </div>
      </div>
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
  name: 'Transaction',
  components: {
    Footer
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
