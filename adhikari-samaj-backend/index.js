var express = require('express');
require('dotenv').config();
var mongoose = require('mongoose');
var indexRouter = require('./routes/index.routes');
const db = require("./models/index.model");
var app = express();
const bodyParser = require("body-parser");
const { GridFSBucket } = require('mongodb');
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
        const conn = mongoose.connection;
        const gridFsBucket = new GridFSBucket(conn.db, {
            bucketName: 'uploads',
        });
        app.locals.gridFsBucket = gridFsBucket;
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/images', express.static('uploads')); // Serve static files from "uploads" directory

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
