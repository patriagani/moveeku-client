<template>
    <div style="margin: 10px; padding-top:15px; border: solid; border-width: thin; width: 250px; height: 450px;">
        <img style="width: 220px; height: 336px;" :alt="movie.data.Title" width="220px" :src="movie.data.Poster">
        <strong>
            <p style="margin-bottom: 10px; font-size: 16px;"><router-link style="color: black;" :to="{ path: `/detail/${movie._id}` }" >{{movie.data.Title}}</router-link></p>  
        </strong>
        <a class="button button-primary" style="width: 220px" href="#">Rent Now For 1000 MVP</a>
    </div>
</template>

<script>
export default {
    props: ['movie'],
}
</script>>