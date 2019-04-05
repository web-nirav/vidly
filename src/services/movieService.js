import config from "../cofing/config.json";
import http from "./httpService";
import logger from "./logService";

export function getMovies() {
  try {
    return http.get(config.apiEndpoint + "movies");
  } catch (error) {
    logger.log(error);
  }
}

export function deleteMovies(movieId) {
  return http.delete(config.apiEndpoint + "movies/" + movieId);
}
