const express = require("express");
const app = express();
const port = 9999;

// require birds router.
const birds = require("./guide/routing/birds.js");

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

app.get("/", (request, response, next) => {
    response.send("Hello, express.");
});

app.listen(port, () => {
    console.log(`express app listens on port ${port}`);
});
