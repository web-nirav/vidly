import config from "../cofing/config.json";
import http from "./httpService";
// import logger from "./logService";

const apiEndpoint = config.apiEndpoint + "auth";

export function login(email, password) {
  return http.post(apiEndpoint, {
    email,
    password
  });
}
