const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const projectFindSchema = new Schema ({
    id: Schema.Types.ObjectId,
    selectedLanguages: {type: Schema.Types.ObjectId, ref: 'projectSubmit'},
    selectedInterests: {type: Array, required: true},
    selectedSkills: {type: Array, required: true}
});

const projectFind = mongoose.model("projectFind", projectFindSchema);

module.exports = projectFind;



