var mongoose = require('../lib/mongo');

var commentSchema = mongoose.Schema({
    user: String,
    comment: String
});

module.exports = mongoose.model('Comment', commentSchema);
