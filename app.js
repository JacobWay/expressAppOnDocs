const express = require("express");
const app = express();
const port = 9999;

// require guide subapp from guide directory.
const guideApp = require("./guide/app.js");
app.use(guideApp);

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

app.get("/app/:id", (request, response, next) => {
  if(request.params.id === "0"){
    next("route");
  }else{
    next();
  }}, (request, response, next) => {
    response.send("regular");
});

app.get("/app/:id", (request, response, next) => {
  response.send("special");
});

app.listen(port, () => {
    console.log(`express app listens on port ${port}`);
});
