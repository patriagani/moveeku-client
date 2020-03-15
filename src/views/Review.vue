<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Review {{review.movie.data.Title}}</h4>
    <h5>that you rented on {{review.date.slice(0,10)}} </h5>
    <br><br>
    <form align="left" style="padding-left: 200px; padding-right: 200px;">
        <label for="exampleRecipientInput">Rating of The Movie</label>
        <select v-model="rating" class="u-full-width" id="exampleRecipientInput">
            <option value="1">1 Star (Very Bad)</option>
            <option value="2">2 Stars (Bad)</option>
            <option value="3">3 Stars (Enough)</option>
            <option value="4">4 Stars (Good Movie)</option>
            <option value="5">5 Stars (Recommended Movie)</option>
        </select>
        <label for="exampleMessage">Your Review of The Movie</label>
        <textarea v-model="desc" class="u-full-width" placeholder="Very Good Movie ..." id="exampleMessage"></textarea>
        <input @click.prevent="postReview" class="button-primary" type="submit" value="Submit Review">
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
  name: 'Review',
  components: {
    Footer
  },

  data: () => {
      return {
          review: {},
          rating: 0,
          desc: ""

      }
    },

  props: ['url', 'isLogin'],

  methods: {
      getReview() {

            axios.get(`${this.url}/reviews/${this.$route.params.reviewId}`)
                .then((response) => {
                    this.review = response.data,
                    this.rating = response.data.rating,
                    this.desc = response.data.review
                })
                .catch((error) => {
                    console.log(error.message)
                })

        },
    
      postReview() {

              let obj = {
                rating: this.rating,
                review: this.desc,
                published: true,
                date: new Date()
              }

              const options = {
                  method: 'PATCH',
                  headers: {'x-auth-token': localStorage.getItem('token')},
                  baseURL: `${this.url}/reviews/${this.$route.params.reviewId}`,
                  data: obj
              }

              axios(options)
                  .then(() => {
                      console.log('Review Berhasil')
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
      this.getReview()
    }
  }
}
</script>
