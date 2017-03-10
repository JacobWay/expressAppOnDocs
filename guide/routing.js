const express = require("express");
const router = express.Router();

router.get('/secret', function (err, req, res, next) {
  console.log('Accessing the secret section ...')
  if(err){
    next(err) // pass control to the next handler
  }
})

module.exports = router;

