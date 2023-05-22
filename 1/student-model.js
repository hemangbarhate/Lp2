const mongoose = require('mongoose');

const studentMarksSchema = new mongoose.Schema({ name: String, rollno: Number, wad: Number, dsbda: Number, cns: Number, cc: Number, ai: Number });

const StudentMarks = mongoose.model("StudentMarks", studentMarksSchema);
module.exports = StudentMarks;