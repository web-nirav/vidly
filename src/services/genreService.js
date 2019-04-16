import http from "./httpService";
import logger from "./logService";

export function getGenres() {
  try {
    return http.get("genres");
  } catch (error) {
    logger.log(error);
  }
}
