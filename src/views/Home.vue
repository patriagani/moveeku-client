<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Featured Movie</h4>
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
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
      </div>
    </div>

    <br><br>

    <div>
      <h4>New Action</h4>
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
  name: 'Home',
  components: {
    MovieCard,
    Footer
  }
}
</script>
