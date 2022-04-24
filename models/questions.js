const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cronsSchema = new Schema({
    _id                 :{ type: String },
    Question_paragraph : String,
    Test_case_input    : Array ,
    Correct_output     : Array ,
    Points_for_correct : String

}, {
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model('Questions',cronsSchema,'Questions');