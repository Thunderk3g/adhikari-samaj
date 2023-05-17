var express = require('express'); //creating express instance
require('dotenv').config(); //importing env file
var mongoose = require('mongoose');
var indexRouter = require('./routes/index.routes');
const db = require("./models/index.model");
var app = express();
const bodyParser = require("body-parser");
mongoose.set('strictQuery', false);

//connecting to mongodb database
db.mongoose
    .connect(
        process.env.mongodbUrl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }
    )
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

app.use(bodyParser.urlencoded({ extended: true })); //reading the body of the request
app.use(bodyParser.json());

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


