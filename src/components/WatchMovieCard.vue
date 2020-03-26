<template>
    <div style="margin: 10px; padding-top:15px; border: solid; border-width: thin; width: 250px; height: 450px;">
        <img style="width: 220px; height: 336px;" :alt="movie.data.Title" width="220px" :src="movie.data.Poster">
        <strong>
            <p style="margin-bottom: 10px; font-size: 16px;"><router-link style="color: black;" :to="{ path: `/detail/${movie._id}` }" >{{movie.data.Title}}</router-link></p>  
        </strong>
        <a @click="toWatchMovie(transactionId)" class="button button-primary" style="width: 220px">Watch Now</a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['movie', 'transactionId', 'url'],
    methods: {
        toWatchMovie(transactionId) {

            const options = {
                method: 'PATCH',
                headers: {'x-auth-token': localStorage.getItem('token')},
                baseURL: `${this.url}/transactions/${transactionId}`,
                data: {playdate: new Date()}
            }

            axios(options)
                .then((response) => {
                    console.log(response.data)
                    this.$router.push(`/watchmovie/${transactionId}`)
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
    }
}
</script>>