const express = require("express");
const app = express();
const port = 9999;

const routing = require("./guide/routing.js");

//app.use("/", routing);
app.get("/ab*d", (reqest, response, next) => {
    response.write("ab*d");
    response.end();
});

app.listen(port, () => {
    console.log(`express app listens on port ${port}`);
});
