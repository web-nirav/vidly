import config from "../cofing/config.json";
import http from "./httpService";
import logger from "./logService";

const apiEndpoint = config.apiEndpoint + "movies";

function movieUrl(movieId) {
  return `${apiEndpoint}/${movieId}`;
}

export function getMovies() {
  try {
    return http.get(apiEndpoint);
  } catch (error) {
    logger.log(error);
  }
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovies(movieId) {
  return http.delete(movieUrl(movieId));
}
