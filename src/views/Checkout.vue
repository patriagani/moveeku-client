<template>
  <div class="detail" style="padding-top: 50px;">
      <div class="container">
            <h4>You Want to Rent: <br> {{movie.data.Title}}</h4>
            <br><br>
            <div class="row">
                <div class="six columns" align="left">
                    <center>
                        <img :src="movie.data.Poster" :alt="movie.data.Title">
                    </center>
                    <br>
                    <br>
                </div>
                <div class="six columns" align="left">
                    <h5>Movee Point Balance :</h5>
                    <br>
                    <p style="font-size: 16px;" >
                        Your avaiable balance: <strong>{{balance}}</strong> <br>
                        <br>
                        Movie rent cost: <strong>{{movie.price}}</strong> <br>
                        <br>
                        <strong>Your current balance will be : {{balance - movie.price}}</strong>
                    </p>
                    <br>
                    <a @click="rentMovie" style="width: 250px;" class="button button-primary">Proceed Transaction</a>
                    <br><br>
                    <a @click="toTopUp" style="width: 250px;" class="button">Top Up Movee Point</a>
                </div>
            </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name: 'Checkout',
    components: {
        Footer
    },

    data: () => {
      return {
          balance: 0,
          movie: {}
      }
    },

    props: ['url', 'isLogin'],

    methods: {
        getUser() {
            axios.get(`${this.url}/users/${localStorage.getItem('id')}`)
                .then((response) => {
                    this.balance = response.data.balance
                })
                .catch((error) => {
                    console.log(error.message)
                })

        },

        getMovie() {
            axios.get(`${this.url}/movies/${this.$route.params.movieId}`)
                .then((response) => {
                    this.movie = response.data
                })
                .catch((error) => {
                    console.log(error.message)
                })

        },

        toTopUp() {
            this.$router.push('/topup')
        },

        rentMovie() {

            const obj = {
                movie: this.movie._id
            }

            const options = {
                method: 'POST',
                headers: {'x-auth-token': localStorage.getItem('token')},
                baseURL: `${this.url}/transactions`,
                data: obj
            }

            axios(options)
                .then(() => {
                    console.log('Transaksi Berhasil')
                    return axios.patch(`${this.url}/users/${localStorage.getItem('id')}`, {balance: this.balance - this.movie.price})
                })
                .then(() => {
                    console.log('Balance Berhasil Dikurangi')
                    this.getUser()
                    this.$router.push('/transaction')
                })
                .catch((error) => {
                    console.log(error.message)
                })

        }
    },

    created() {
      if (!this.isLogin) {
        this.$router.push('/login')
      }
      else {
        this.getUser()
        this.getMovie()
      }
    }
}
</script>

<style>

</style>