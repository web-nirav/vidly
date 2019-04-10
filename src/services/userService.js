import config from "../cofing/config.json";
import http from "./httpService";
// import logger from "./logService";

const apiEndpoint = config.apiEndpoint + "users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
