const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const apiUrl = "https://chipr.api.fdnd.nl/v1/project";

// Show Add Project Form
router.get("/", (req, res) => {
  res.render('index');
});

// Add a new project to the API
router.post("/create-project", (req, res) => {
  const type = JSON.stringify(req.body);

  // Request Options
  const options = {
    method: 'POST',
    body: type,
    headers: {
      "Content-Type": "application/json",
    },
  }

  // Fetch the request
  fetch(apiUrl, options)

    // Return the response
    .then((res) => {
      return res.json();
    })

    // Handle Errors
    .catch((err) => {
      console.log(err);
    })

  // Return to index view
  res.render("index");
})

module.exports = router;
