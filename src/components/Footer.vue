<template>
  <div style="background: black; padding-top:50px; color: grey;">
      <div class="container">
        <div class="row">
          <div class="three columns">
            <h5 align="left">Helpful Links</h5>
            <ul align="left">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/login">Sign in</router-link></li>
              <li><router-link to="/signup">Sign Up</router-link></li>
            </ul>
          </div>

          <div class="three columns">
            <h5 align="left">For Action Lover</h5>
            <ul align="left">
              <li><router-link to="/genre/Action">Action</router-link></li>
              <li><router-link to="/genre/Superhero">Superhero</router-link></li>
              <li><router-link to="/genre/Crime">Crime</router-link></li>
              <li><router-link to="/genre/Action-Comedy">Action-Comedy</router-link></li>
              <li><router-link to="/genre/Sci-Fi">Sci-Fi</router-link></li>
            </ul>
          </div>

          <div class="three columns">
            <h5 align="left">Family Movie</h5>
            <ul align="left">
              <li><router-link to="/genre/Comedy">Comedy</router-link></li>
              <li><router-link to="/genre/Animation">Animation</router-link></li>
              <li><router-link to="/genre/Drama">Drama</router-link></li>
              <li><router-link to="/genre/Fantasy">Fantasy</router-link></li>
              <li><router-link to="/genre/Romance">Romance</router-link></li>
            </ul>
          </div>

          <div class="three columns">
            <h5 align="left">Other Genre</h5>
            <ul align="left">
              <li><router-link to="/genre/Comedy-Romance">Comedy-Romance</router-link></li>
              <li><router-link to="/genre/Mystery">Mystery</router-link></li>
              <li><router-link to="/genre/Horror">Horror</router-link></li>
              <li><router-link to="/genre/Thriller">Thriller</router-link></li>
              <li><router-link to="/genre/Adventure">Adventure</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <div>
        <p style="margin: 0px; font-size: 16px">Made by: PatriaGani - Copyright Moveeku - 2020</p>
      </div>
      <br>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>