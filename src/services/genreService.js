import config from "../cofing/config.json";
import http from "./httpService";
import logger from "./logService";

export function getGenres() {
  try {
    return http.get(config.apiEndpoint + "genres");
  } catch (error) {
    logger.log(error);
  }
}
