/*eslint-disable no-console */
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes");

const hostname = "localhost";
const port = 3001;

const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router);

// Start server
app.listen(port, hostname, () => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== "test") {
    console.log("Server started on http://" + hostname + ":" + port + "\n");
  }
});

module.exports = app;
