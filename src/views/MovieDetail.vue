<template>
  <div class="detail" style="padding-top: 50px;">
      <div class="container">
            <div class="row">
                <div class="six columns">
                    <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="">
                    <br><br>
                    <a class="button button-primary" style="width: 300px;" href="#">Rent Now for 1000 MVP</a>
                </div>
                <div class="six columns" align="left">
                    <h4>Guardians of the Galaxy Vol. 2</h4>
                    <p>
                        Director: James Gunn <br>
                        Released: 05 May 2017 <br>
                        Runtime: 136 min <br>
                        Genre: Action, Adventure, Comedy, Sci-Fi <br>
                        Language: English <br>
                        Actors: Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel
                    </p>
                    <p>The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.</p>
                    <div class="rating">
                        <h5>
                            Rating
                        </h5>
                        <p>
                            Internet Movie Database: 7,6/10 <br>
                            Rotten Tomatoes: 85% <br>
                            Metacritic: 67/100
                        </p>
                    </div>
                </div>
            </div>
            <br>
            <h5>Reviews :</h5>
            <div align="left" style="display: flex; flex-wrap: wrap; justify-content: center;">
                <div class="review" style="width: 350px; border: solid; border-width: thin; border-radius: 15px; padding: 20px; margin: 20px;">
                    <p style="margin-bottom: 0px;">
                        <strong> Patria Gani </strong> : 4.9/5 <br><br>
                        Filmnya bagus banget, bikin pengen nonton lagi berkali kali, untung
                        adan moveekuu, nonton film legal harga murah. Top pokoknya!!!
                    </p>
                </div>
                <div class="review" style="width: 350px; border: solid; border-width: thin; border-radius: 15px; padding: 20px; margin: 20px;">
                    <p style="margin-bottom: 0px;">
                        <strong> Patria Gani </strong> : 4.9/5 <br><br>
                        Filmnya bagus banget, bikin pengen nonton lagi berkali kali, untung
                        adan moveekuu, nonton film legal harga murah. Top pokoknya!!!
                    </p>
                </div>
                <div class="review" style="width: 350px; border: solid; border-width: thin; border-radius: 15px; padding: 20px; margin: 20px;">
                    <p style="margin-bottom: 0px;">
                        <strong> Patria Gani </strong> : 4.9/5 <br><br>
                        Filmnya bagus banget, bikin pengen nonton lagi berkali kali, untung
                        adan moveekuu, nonton film legal harga murah. Top pokoknya!!!
                    </p>
                </div>
                <div class="review" style="width: 350px; border: solid; border-width: thin; border-radius: 15px; padding: 20px; margin: 20px;">
                    <p style="margin-bottom: 0px;">
                        <strong> Patria Gani </strong> : 4.9/5 <br><br>
                        Filmnya bagus banget, bikin pengen nonton lagi berkali kali, untung
                        adan moveekuu, nonton film legal harga murah. Top pokoknya!!!
                    </p>
                </div>
            </div>
            <br>
            <div class="pagination">
                <b>ini nanti pagination reviews</b>
            </div>
            <br><br>

      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
    name: 'MovieDetail',
    components: {
        Footer
    }
}
</script>

<style>

</style>