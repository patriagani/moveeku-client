<template>
  <div class="home" style="padding-top: 50px;">
    <h4>{{this.$route.params.genre}} Movies</h4>
    <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <MovieCard v-for="movie in movies" :key="movie" :movie="movie"/>
    </div>

    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Genre',
  components: {
    MovieCard,
    Footer
  },

  data: () => {
      return {
          movies: []
      }
  },

  props: ['url', 'isLogin'],
  
  methods: {
    getMoviesByGenre() {
      axios.get(`${this.url}/movies/genre/${this.$route.params.genre}`)
        .then((response) => {
          this.movies = response.data.slice(0,8)
        })
        .catch((error) => {
          console.log(error.message)
        })      
    }
  },

  created() {
    this.getMoviesByGenre()
  }
}
</script>
