/*eslint-disable no-console */
const express = require("express");

const hostname = "localhost";
const port = 3000;

const app = express();

// Start server
app.listen(port, hostname, () => {
  console.log(
    "Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n"
  );
});
