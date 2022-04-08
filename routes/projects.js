const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Show Add Project Form
router.get("/", (req, res) => {
  res.render('index');
});

// Add a new project to the API
router.post("/create-project", (req, res) => {
  const type = JSON.stringify(req.body);
  const options = {
    method: 'POST',
    body: type,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  fetch('https://chipr.api.fdnd.nl/v1/project', options)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    
  })
  res.render('index');
})

module.exports = router;
