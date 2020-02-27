<template>
    <div class="Login">
        <br><br>
        <h4>Login to Your Account</h4>
        <p align="center">Doesn't have an account? Sign up <router-link :to="{ path: '/signup' }">here</router-link></p>
        <div class="container" style="padding-left:200px; padding-right: 200px; padding-bottom: 50px;">
            <form align="left">
                <label for="exampleEmailInput">Your email</label>
                <input class="u-full-width" type="email" placeholder="Your E-mail" id="exampleEmailInput">
                <label for="exampleEmailInput">Your Password</label>
                <input class="u-full-width" type="password" placeholder="Your Password" id="examplePasswordInput">
                <input class="button-primary" type="submit" value="Login">
            </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Footer
  }
}
</script>

<style>

</style>