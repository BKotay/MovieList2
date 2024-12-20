const path = require("path");
const express = require("express");
const hbs = require("hbs");
const getMovies = require("./utils/movie");
const port = process.env.PORT || 3000;

const app = express();

const pubDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewsPath);
// hbs.registerPartials(partialsDirPath)

app.use(express.static(pubDirPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/movie", (req, res) => {
  if (!req.query.search) {
    res.send({ error: "There is an error. Please enter a movie name." });
    return;
  }

  getMovies(req.query.search, (error, data) => {
    if (error) {
      res.send({ error: "There is an error." });
      return;
    }

    res.send(data);
  });
});

app.listen(port, () => {
  console.log("This Server is running on port " + port);
});
