const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Add project form
router.get("/", (req, res) => {
  res.render('index');
});

module.exports = router;
