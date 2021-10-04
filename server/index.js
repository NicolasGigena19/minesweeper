/* eslint consistent-return:0 */

const env = require("dotenv").config();
const express = require("express");
const { resolve } = require("path");
const logger = require("./util//logger");
const setup = require("./middlewares/frontendMiddleware");

const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), "build"),
  publicPath: "/"
});

const port = env.PORT || 80;
const host = env.HOST;
const prettyHost = env.HOST || "localhost";
console.log(env.HOST);

// Start your app.
app.listen(port, host, err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
