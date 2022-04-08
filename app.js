const express = require("express");
const app = express();
const port = 3000;

// Uses
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
const projectRoute = require("./routes/projects");
app.use("/", projectRoute);

app.listen(port, () => {
  console.log(`App listening on: ${port}`);
});
