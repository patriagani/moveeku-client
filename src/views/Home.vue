<template>
  <div class="home" style="padding-top: 50px;">
    <h4>New Movies</h4>
    <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <MovieCard v-for="movie in newestMovies" :key="movie" :movie="movie"/>
    </div>

    <br><br>
    
    <div style="background: blue; padding: 30px;">
      <h4>Pick Your Genre</h4>
      <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
          <div style="margin: 10px;">
            <a class="button" href="#">Anchor button</a>
          </div>
      </div>
    </div>
    
    <br><br>

    <div>
      <h4>New Comedy</h4>
      <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
          <MovieCard v-for="movie in comedyMovies" :key="movie" :movie="movie"/>
      </div>
    </div>

    <br><br>

    <div>
      <h4>New Action</h4>
      <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
          <MovieCard v-for="movie in actionMovies" :key="movie" :movie="movie"/>
      </div>
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
  name: 'Home',
  components: {
    MovieCard,
    Footer
  },
  data: () => {
      return {
          newestMovies: [],
          comedyMovies: [],
          actionMovies:[]
      }
  },

  props: ['url', 'isLogin'],
  
  methods: {
    getNewestMovies() {
      axios.get(`${this.url}/movies`)
        .then((response) => {
          this.newestMovies = response.data.slice(0,8)
        })
        .catch((error) => {
          console.log(error.message)
        })      
    },

    getComedyMovies() {
      axios.get(`${this.url}/movies/genre/Comedy`)
        .then((response) => {
          this.comedyMovies = response.data.slice(0,8)
        })
        .catch((error) => {
          console.log(error.message)
        })      
    },

    getActionMovies() {
      axios.get(`${this.url}/movies/genre/Action`)
        .then((response) => {
          this.actionMovies = response.data.slice(0,8)
        })
        .catch((error) => {
          console.log(error.message)
        })      
    }
  },

  created() {
    this.getNewestMovies()
    this.getComedyMovies()
    this.getActionMovies()
  }
}
</script>
