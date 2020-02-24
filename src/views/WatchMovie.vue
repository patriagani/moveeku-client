<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Watch Guardian of The Galaxy Vol 2</h4>
    <p>Note: Double Click to Fullscreen</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nfm6mm7RWSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'MovieList',
  components: {
    Footer
  }
}
</script>
