const express = require("express");
const app = express();
const port = 9999;

// require birds router.
const birds = require("./guide/routing/birds.js");

// require middleware from middleware directory
const myMiddleware = require("./middleware/myMiddleware.js");
app.use(myMiddleware({option1: "1"}));

//const routing = require("./guide/routing.js");

//app.use("/", routing);
// use the middleware of the router of birds.
app.use("/birds", birds);

// middleware function
function myLogger(request, response, next){
  console.log("Logged at: ", Date.now());
  next();
}

// use the middleware.
app.use(myLogger);

// middleware of requestTime
function requestTime(request, response, next){
  request.requestTime = Date.now();
  next();
}

app.use(requestTime);

app.get("/", (request, response, next) => {
  responseText = "";
  responseText += "<p>Hello, express.</p>";
  responseText += "<small>request time: " + request.requestTime + "</small>";
  response.send(responseText);
});

app.listen(port, () => {
    console.log(`express app listens on port ${port}`);
});
