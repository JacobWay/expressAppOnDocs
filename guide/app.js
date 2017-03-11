const express = require("express");
const guideApp = express();

guideApp.use("/user/:id", function(request, response, next){
  console.log("Request URL: ", request.originalUrl);
  next();
}, function(request, response, next){
  console.log("Request Type: ", request.method);
  next();
});

guideApp.get("/user/:id", (request, response, next) => {
  response.send("In guide App.");
});

module.exports = guideApp;
