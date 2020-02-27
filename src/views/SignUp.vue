<template>
    <div class="Login">
        <br><br>
        <h4>Sign Up New Account</h4>
        <p align="center">Already have an account? Sign in <router-link :to="{ path: '/login' }">here</router-link></p>
        <div class="container" style="padding-left:200px; padding-right: 200px; padding-bottom: 50px;">
            <form align="left">
                <label for="exampleEmailInput">Your Name</label>
                <input class="u-full-width" type="text" placeholder="Your Name" id="exampleNameInput">
                <label for="exampleEmailInput">Your Username</label>
                <input class="u-full-width" type="text" placeholder="Your Username" id="exampleUsernameInput">
                <label for="exampleEmailInput">Your email</label>
                <input class="u-full-width" type="email" placeholder="Your E-mail" id="exampleEmailInput">
                <label for="exampleEmailInput">Your Password</label>
                <input class="u-full-width" type="password" placeholder="Your Password" id="examplePasswordInput">
                <input class="button-primary" type="submit" value="Sign Up">
            </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'SignUp',
  components: {
    Footer
  }
}
</script>

<style>

</style>