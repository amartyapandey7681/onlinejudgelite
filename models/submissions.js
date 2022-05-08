const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const submission = new Schema({
    _id                 :{ type: String },
    question_id         : String,
    User_Id             : String,
    Accepted            : Boolean

}, {
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model('submissions',submission,'submissions');