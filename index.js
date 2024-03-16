const express = require("express");
const route = require("./route");

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/", route);

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
