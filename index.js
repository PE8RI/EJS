const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from public
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.send("Hi, this is my page");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];

  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.get("/rolldice", (req, res) => {
  let dice = Math.floor(Math.random() * 10) + 1;
  res.render("rolldice.ejs", { dice });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
