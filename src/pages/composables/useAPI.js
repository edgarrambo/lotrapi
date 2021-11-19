import { ref } from "vue";
import axios from "axios";

const movies = ref();

// here we need the access token code from the website we signed up for.
// we also need the link for the api calls
const api = axios.create({
  baseURL: "https://the-one-api.dev/v2/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export const useAPI = () => {
  const getMovies = async () => {
    const response = await api.get("movie");
    movies.value = response.data.docs;
  };

  getMovies();
  return { movies, getMovies };
};
