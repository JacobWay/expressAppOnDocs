const express = require("express");
const app = express();
const router = express.Router();

router.use( (request, response, next) => {
  if(!request.headers["x-auth"]) return next("router");
  next();
} );

router.get("/", function(request, response){
  response.send("In routerMiddleware.js.");
});


app.use("/admin", router, (request, response) => {
  response.sendStatus(401);
});

module.exports.app = app;
module.exports.router = router;
