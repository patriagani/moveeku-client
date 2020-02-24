<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Your Avaiable Movies to Watch</h4>
    <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <WatchMovieCard/>
        <WatchMovieCard/>
        <WatchMovieCard/>
        <WatchMovieCard/>
        <WatchMovieCard/>
        <WatchMovieCard/>
        <WatchMovieCard/>
        <WatchMovieCard/>
    </div>

    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import WatchMovieCard from '@/components/WatchMovieCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MovieList',
  components: {
    WatchMovieCard,
    Footer
  }
}
</script>
