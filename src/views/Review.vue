<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Review Guardian of The Galaxy Vol 2</h4>
    <h5>that you watched on February 2, 2021 </h5>
    <br><br>
    <form align="left" style="padding-left: 200px; padding-right: 200px;">
        <label for="exampleRecipientInput">Rating of The Movie</label>
        <select class="u-full-width" id="exampleRecipientInput">
            <option value="Option 1">1 Star (Very Bad)</option>
            <option value="Option 2">2 Stars (Bad)</option>
            <option value="Option 3">3 Stars (Enough)</option>
            <option value="Option 4">4 Stars (Good Movie)</option>
            <option value="Option 5">5 Stars (Recommended Movie)</option>
        </select>
        <label for="exampleMessage">Your Review of The Movie</label>
        <textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
        <input class="button-primary" type="submit" value="Submit Review">
    </form>
    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Review',
  components: {
    Footer
  }
}
</script>
