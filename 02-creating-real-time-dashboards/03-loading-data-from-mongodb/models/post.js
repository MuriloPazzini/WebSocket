var mongoose = require('../lib/mongo');

var postSchema = mongoose.Schema({
    user: String,
    title: String
});

module.exports = mongoose.model('Post', postSchema);
