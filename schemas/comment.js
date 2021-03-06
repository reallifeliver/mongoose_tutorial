const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Types : {ObjectId}} = Schema;

const commentSchema = new Schema({
    commenter : {
        type : ObjectId,
        required : true,
        ref : 'User'
    },
    comment : {
        type : String,
        required : true
    },
    createAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Comment", commentSchema);