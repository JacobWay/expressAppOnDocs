const express = require("express");
const app = express();
const port = 9999;

app.get("/", (reqest, response, next) => {
    response.send("Hello, express!");
});

app.listen(port, () => {
    console.log(`express app listens on port ${port}`);
});
