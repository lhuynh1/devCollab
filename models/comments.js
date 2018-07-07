const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    comment: { type: String },
    date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;