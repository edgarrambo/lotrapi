<script setup>
import { useRoute } from 'vue-router';

import { useAPI } from './composables/useAPI';

const route = useRoute();

const { id } = route.params;

const { movie, getMovie, quotes, getQuotes } = useAPI();
getMovie(id);
getQuotes(id);
</script>

<template>
<div 
v-if="movie" 
class="max-w-md py-8 mx-auto mt-16 text-center bg-white rounded-lg">
<h3 class="text-xl font-semibold tracking-tight">{{ movie.name }}</h3>
<p>Runtime: {{ movie.runtimeInMinutes }} minutes long</p>
<p>Budget in Millions: ${{ movie.budgetInMillions }} </p>
<p>Acadey Awards: {{ movie.academyAwardWin }}</p>
<p>Rotten Tomatoes: {{ movie.rottenTomatoesScore }}</p>
</div>
<div v-else>Loading...</div>         
<div class="max-w-md py-8 mx-auto mt-16 text-center bg-white rounded-lg">
    <h3 class="text-xl font-semibold tracking-tight">Memorable Quotes from {{movie.name}}</h3>
    <p v-for="quote in quotes"
    :key="quote._id"
    >{{ quote.dialog }}</p>

</div>
</template>