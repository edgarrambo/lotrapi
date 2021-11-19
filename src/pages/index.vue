<script setup>
import { useAdvice } from './composables/useAdvice';
import { ref } from "vue";
const { advices, search } = useAdvice();

const searchItem = ref("");
</script>
<template>
    <div>
        <input
        v-model="searchItem"
        @change="search(searchItem)"
        type="text"
        placeholder="Search for Advice"
        class="w-full py-4 mt-16 text-xl text-center rounded-full" 
         />

       <div class="grid grid-cols-2 gap-16 pt-16">
       <div v-for="(advice, index) in advices" :key="index" >
           <p>
             {{advice.advice}}
           </p>
       </div>
       </div>
    </div>
</template>