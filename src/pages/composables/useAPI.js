import { ref } from "vue";
import axios from "axios";

const movies = ref();
const movie = ref();
const quotes = ref();

// here we need the access token code from the website we signed up for.
// we also need the link for the api calls
const api = axios.create({
  baseURL: "https://the-one-api.dev/v2/",
  headers: {
    Authorization: "Bearer t-SXUBHoGd5RNoVrRbrR",
    //getting error when trying vite key, have tried front ticks and ', neither work
  },
});

export const useAPI = () => {
  const getMovies = async () => {
    const response = await api.get("movie");
    movies.value = response.data.docs;
  };

  const getMovie = async (id) => {
    const response = await api.get(`movie/${id}`);
    movie.value = response.data.docs[0];
  };

  const getQuotes = async (id) => {
    const response = await api.get(`movie/${id}/quote?limit=10`);
    quotes.value = response.data.docs;
  };

  getMovies();
  return { movies, movie, quotes, getMovies, getMovie, getQuotes };
};
