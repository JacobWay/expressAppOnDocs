const express = require("express");
const app = express();
const port = 9999;

//const routing = require("./guide/routing.js");

//app.use("/", routing);
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
app.get("/rooms/:roomid", (request, response, next) => {
    response.send(request.params);
    response.end();
});

app.listen(port, () => {
    console.log(`express app listens on port ${port}`);
});
