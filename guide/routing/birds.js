/**
 * Express router module.
 */

const express = require("express");
const router = express.Router();

// middleware that is specific to this router.
router.use(function timeLog(request, response, next){
  console.log("time: ", Date.now());
  next();
});

// define the home page of this route of birds.
router.get("/", (request, response, next) => {
  response.send("home page of birds.");  
});

// define the about route.
router.get("/about", (request, response, next) => {
  response.send("about page of birds.");
});

module.exports = router;
