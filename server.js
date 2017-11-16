/*eslint-disable no-console */
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
  console.log(
    "Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n"
  );
});
