<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Action Comedy Movie</h4>
    <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>

    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Genre',
  components: {
    MovieCard,
    Footer
  }
}
</script>
