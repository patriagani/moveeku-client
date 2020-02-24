<template>
  <div class="home" style="padding-top: 50px;">
    <h4>Top Up MVP Balance</h4>
    <h5>Your current MVP balance is 10.000</h5>
    <br><br>
    <form>
      <label for="exampleRecipientInput">Choose MVP Balance Voucher to Top Up</label>
      <br>
      <div class="row" style="display: flex; justify-content: center; padding-right: 400px; padding-left: 400px;">
        <select class="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">20.000</option>
          <option value="Option 2">50.000</option>
          <option value="Option 3">75.000</option>
          <option value="Option 4">100.000</option>
          <option value="Option 5">125.000</option>
          <option value="Option 6">150.000</option>
          <option value="Option 7">175.000</option>
          <option value="Option 8">200.000</option>
        </select>
        <input class="button-primary" type="submit" value="Top Up Balance" style="margin-left: 30px;">
      </div>
    </form>
    <br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'TopUp',
  components: {
    Footer
  }
}
</script>
