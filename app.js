const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');


app.use("/public", static);
app.use(bodyParser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});