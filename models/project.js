const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: { type: String, require: true },
    description: { type: String, required: true },
    languageStack: { type: Array, required: true },
    projLink: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;