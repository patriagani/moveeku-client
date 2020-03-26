<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Top Up MVP Balance</h4>
    <h5>Your current MVP balance is {{balance.toLocaleString()}}</h5>
    <br><br>
    <form>
      <label for="exampleRecipientInput">Choose MVP Balance Voucher to Top Up</label>
      <br>
      <div class="row" style="display: flex; justify-content: center; padding-right: 400px; padding-left: 400px;">
        <select v-model="topupvalue" class="u-full-width" id="exampleRecipientInput">
          <option value="20000">20,000 MVP</option>
          <option value="50000">50,000 MVP</option>
          <option value="75000">75,000 MVP</option>
          <option value="100000">100,000 MVP</option>
          <option value="125000">125,000 MVP</option>
          <option value="150000">150,000 MVP</option>
          <option value="175000">175,000 MVP</option>
          <option value="200000">200,000 MVP</option>
        </select>
        <input @click.prevent="topUpMVP" class="button-primary" type="submit" value="Top Up Balance" style="margin-left: 30px;">
      </div>
    </form>
    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'TopUp',
  components: {
    Footer
  },

  data: () => {
      return {
          balance: 0,
          topupvalue: 20000
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

        topUpMVP() {
            axios.patch(`${this.url}/users/${localStorage.getItem('id')}`, {balance: this.balance + Number(this.topupvalue)})
                .then(() => {
                    console.log('Berhasil top Up MVP')
                    this.getUser()
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
      }
    }
}
</script>
