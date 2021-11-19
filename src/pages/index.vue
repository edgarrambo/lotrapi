<script setup>
import { useAPI } from "./composables/useAPI";
const { movies, movie, getMovies }= useAPI();
movie.value = "";
</script>

<template>
  <div class="mt-16">
    <ul class="grid grid-cols-3 gap-12">
      <router-link
      class="p-4 bg-white rounded-lg shadow-2xl cursor-pointer hover:scale-105"
      v-for="movie in movies" 
      :key="movie._id"
      :to="`/movie/${movie._id}`">
        <div>
          <h3 class="text-xl font-semibold tracking-tight">{{ movie.name }}</h3>
          <p>Runtime: {{ movie.runtimeInMinutes }} minutes long</p>
          <p>Budget in Millions: ${{ movie.budgetInMillions }} </p>
          <p>Acadey Awards: {{ movie.academyAwardWin }}</p>
          <p>Rotten Tomatoes: {{ movie.rottenTomatoesScore }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>