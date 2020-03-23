<template>
  <div class="detail" style="padding-top: 50px;">
      <div class="container">
            <div class="row">
                <div class="six columns">
                    <img :src="movie.data.Poster" :alt="movie.data.Title">
                    <br><br>
                    <a class="button button-primary" style="width: 300px;" href="#">Rent Now for 1000 MVP</a>
                </div>
                <div class="six columns" align="left">
                    <h4>{{movie.data.Title}}</h4>
                    <p>
                        Director: {{movie.data.Director}} <br>
                        Released: {{movie.data.Released}} <br>
                        Runtime: {{movie.data.Runtime}} <br>
                        Genre: {{movie.data.Genre}} <br>
                        Language: {{movie.data.Language}} <br>
                        Actors: {{movie.data.Actors}}
                    </p>
                    <p>{{movie.data.Plot}}</p>
                    <div class="rating">
                        <h5>
                            Rating
                        </h5>
                        <p v-for="rating in movie.data.Ratings" :key="rating">
                            {{rating.Source}}: {{rating.Value}}
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <h5 v-if="reviews.length > 0">Reviews :</h5>
            <h5 v-if="reviews.length == 0">No Review yet</h5>
            <div align="left" style="display: flex; flex-wrap: wrap; justify-content: center;">
                <div v-for="(review, idx) in reviews" :key="idx" class="review" style="width: 350px; border: solid; border-width: thin; border-radius: 15px; padding: 20px; margin: 20px;">
                    <div v-if="review.published">
                        <p style="margin-bottom: 0px;">
                            <strong> {{review.user.name}} </strong> : {{review.rating}}/5 <br>
                            Watched on: {{review.date.slice(0,10)}}<br><br>
                            {{review.review}}
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <div class="pagination">
                <!-- <p>ini nanti paginationnya</p> -->
            </div>
            <br><br>

      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name: 'MovieDetail',
    components: {
        Footer
    },

    data: () => {
      return {
          movie: {},
          reviews: []
      }
    },

    props: ['url', 'isLogin'],

    methods: {
        getMovie() {
            axios.get(`${this.url}/movies/${this.$route.params.movieId}`)
                .then((response) => {
                    this.movie = response.data
                })
                .catch((error) => {
                    console.log(error.message)
                })

        },

        getReviews() {
            axios.get(`${this.url}/reviews/movie/${this.$route.params.movieId}`)
                .then((response) => {
                    this.reviews = response.data
                })
                .catch((error) => {
                    console.log(error.message)
                })

        }
    },

    created() {
        this.getMovie()
        this.getReviews()
    }
}
</script>

<style>

</style>