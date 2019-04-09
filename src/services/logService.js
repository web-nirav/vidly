import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://7c3d75f92ed5494d99f2ff4a22bb6714@sentry.io/1429413"
  });
}

function log(error) {
  console.log(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
};
