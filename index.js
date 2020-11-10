const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appRoutes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/example", { useNewUrlParser: "true" });
mongoose.connection.on("error", (err) => { console.log("err", err) });
mongoose.connection.on("connected", (err, res) => { console.log("mongoose is connected!") });

app.use('/', appRoutes);

app.listen(3000, () => {
    console.log('Loyihamiz 3000 chi portda ishga tushdi!');
});