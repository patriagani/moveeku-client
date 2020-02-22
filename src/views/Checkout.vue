<template>
  <div class="detail" style="padding-top: 50px;">
      <div class="container">
            <h4>You Want to Rent: <br> Guardians of the Galaxy Vol. 2</h4>
            <br><br>
            <div class="row">
                <div class="six columns" align="left">
                    <center>
                        <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="">
                    </center>
                    <br>
                    <br>
                </div>
                <div class="six columns" align="left">
                    <h5>Movee Point Balance :</h5>
                    <br>
                    <p style="font-size: 16px;" >
                        Your avaiable balance: <strong>10.000</strong> <br>
                        <br>
                        Movie rent cost: <strong>1.000</strong> <br>
                        <br>
                        <strong>Your current balance will be : 9.000</strong>
                    </p>
                    <br>
                    <a style="width: 250px;" class="button button-primary" href="#">Proceed Transaction</a>
                    <br><br>
                    <a style="width: 250px;" class="button" href="#">Top Up Movee Point</a>
                </div>
            </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
    name: 'Checkout',
    components: {
        Footer
    }
}
</script>

<style>

</style>