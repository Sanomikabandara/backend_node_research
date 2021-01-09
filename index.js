const express = require("express");
const BodyParser = require("body-parser");
const Cors = require("cors");
const Routes = require('./Route');

const app = new express();
app.use('/', Routes);

app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));

app.listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("app is listen port 3000");
});