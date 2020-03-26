var express = require("express");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 2030;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controller/fitnessController");
app.use(routes);


//Mongodb connect with heroku aplication!!  
// var URI = process.env.MONGODB_URI || "YOUR OWN MONGODB URI CONNECTION WITH HEROKU LINK/NUMBER HERE";
var URI = process.env.MONGODB_URI || "mongodb://nadia:nadia222@ds249717.mlab.com:49717/heroku_xq1q7pnx";

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});