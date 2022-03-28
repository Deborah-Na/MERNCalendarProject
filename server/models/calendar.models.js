const mongoose = require('mongoose');
const CalendarSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title here!"],
        minlength: [2, "{PATH} must be at least 2 chars"]
    },
    content: {
        type: String,
        require: [true, "Tell us your day!"],
        minlength: [2, "You dont have anything to write?"]
    },
    uploadPic: {
        type: String
    },
    checkbox: {
        type: Boolean
    },
}, { timestamps: true });
module.exports.Calendar = mongoose.model('Calendar', CalendarSchema);