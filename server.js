// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
   
    res.render('public/index', { title: 'Home'});
  });