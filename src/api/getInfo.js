import { MOVIE_API, MOVIE_API_KEY } from "../config.js";

export const getGenresList = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const URI =
    MOVIE_API +
    "/genre/movie/list?" +
    new URLSearchParams({
      api_key: MOVIE_API_KEY,
    });
  try {
    const response = await fetch(URI, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const getMoviesListByGenres = async (id, genres) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const URI =
    MOVIE_API +
    "/genre/movie/list?" +
    new URLSearchParams({
      api_key: MOVIE_API_KEY,
      with_genres: id,
      page: Math.floor(Math.random() * 3) + 1,
    });
  try {
    const response = await fetch(URI, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error getting documents", err);
  }
};
