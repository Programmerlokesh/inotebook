const connecToMongo = require("./db");
const express = require("express");
connecToMongo();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Lokesh!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
