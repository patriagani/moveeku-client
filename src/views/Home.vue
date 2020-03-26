<template>
  <div class="home" style="padding-top: 50px;">
    <h4>New Movies</h4>
    <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <MovieCard v-for="movie in newestMovies" :key="movie" :movie="movie"/>
    </div>

    <br><br>
    
    <div style="background: blue; padding: 100px;">
      <h4 style="color:white;">Pick Your Genre</h4>
      <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Action')}">Action</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Superhero')}">Superhero</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Crime')}">Crime</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Action-Comedy')}">Action Comedy</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Sci-Fi')}">Sci-Fi</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Comedy')}">Comedy</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Animation')}">Animation</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Drama')}">Drama</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Fantasy')}">Fantasy</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Romance')}">Romance</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Comedy-Romance')}">Comedy Romance</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Mystery')}">Mystery</a>
          </div>
          <div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Horror')}">Horror</a>
          </div><div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Thriller')}">Thriller</a>
          </div><div style="margin: 10px;">
            <a style="color:white; width:180px;" class="button" @click="() => { this.$router.push('/genre/Adventure')}">Adventure</a>
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
