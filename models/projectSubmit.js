const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSubmitSchema = new Schema({
    id: Schema.Types.ObjectId,
    projectName: { type: String, require: true },
    projectDescription: { type: String, required: true },
    projectLanguages: { type: Array, required: true },
    projectLink: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const projectSubmit = mongoose.model("projectSubmit", projectSubmitSchema);

module.exports = projectSubmit;