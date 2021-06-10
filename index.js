const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome page!!");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("Post data are : " + JSON.stringify(req.body));
});

module.exports = app;
// app.listen(3000, () => {
//   console.log("App is running!!");
// });
