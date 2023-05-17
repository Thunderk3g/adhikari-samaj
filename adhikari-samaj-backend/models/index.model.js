const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //to perform save and other queries
const db = {};
db.mongoose = mongoose;
module.exports = db;