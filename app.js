const express = require("express");

// const tasks = require("./tasks");


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/tasks", (req, res) => {
//   res.json(tasks);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
