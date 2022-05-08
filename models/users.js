const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const user = new Schema({
    _id                 :{ type: String },
    Name                : String,
    Email               : String,
    Date_of_joining     : Date,
    Correct_soln        : Array

}, {
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model('user',user,'user');