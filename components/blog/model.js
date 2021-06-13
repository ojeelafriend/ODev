const mongoose = require('mongoose');
const Schema = mongoose();

const mySchema = new Schema({});

const model = mongoose.model('Article', mySchema);

module.exports = model;
