import axios from "axios";
const accessKey = "2d067d7210da5cd78e9df1885df93ecb";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMoviesApi = async () => {
  const { data } = await axios.get("movie/popular", {
    params: {
      api_key: accessKey,
    },
  });
  return data.results;
};

export const getSingleMovieApi = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: accessKey,
    },
  });
  return data;
};


export const searchMovies = async (query) => {
  const { data } = await axios.get("search/movie", {
    params: {
      api_key: accessKey,
      query: query,
    },
  });
  return data.results;
};


export const getMoviesCast = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: accessKey,
      
    },
  });
  return data.cast;
};