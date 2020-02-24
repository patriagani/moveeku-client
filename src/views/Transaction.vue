<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Your Transactions</h4>
    <h5>Your current MVP balance is 10.000</h5>
    <br><br>
    <div class="container">
      <div class="row">
        <div class="three columns">
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">Guardian of The Galaxy Vol 2</p>
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">Doctor Strange 2</p>
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;"> Black Panther</p>
        </div>
        <div class="three columns">
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">22-02-2020</p>
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">22-02-2020</p>
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">22-02-2020</p>
        </div>
        <div class="three columns">
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">Expired on : 23-02-2020</p>
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">Expired on : None</p>
          <p style="margin-bottom: 10px; padding: 10px; font-size: 12px;">Expired on : None</p>
        </div>
        <div class="three columns">
          <div style="display: flex; justify-content: center;">
            <a style="margin-left: 10px;" class="button" href="#">Review</a>
            <a style="margin-left: 10px;" class="button button-primary" href="#">Play Movie</a>
          </div>
          <div style="display: flex; justify-content: center;">
            <a style="margin-left: 10px;" class="button" href="#">Review</a>
            <a style="margin-left: 10px;" class="button button-primary" href="#">Play Movie</a>
          </div>
          <div style="display: flex; justify-content: center;">
            <a style="margin-left: 10px;" class="button" href="#">Review</a>
            <a style="margin-left: 10px;" class="button button-primary" href="#">Play Movie</a>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'Transaction',
  components: {
    Footer
  }
}
</script>
