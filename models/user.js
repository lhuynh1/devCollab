const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}); 

const User = mongoose.model("User", userSchema);

module.exports = User;