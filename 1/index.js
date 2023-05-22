const express = require('express')
const mongoose = require('mongoose')
const StudentMarks = require('./student-model')
app = express();

app.use(express.json());


app.get("/", async (req, res) => {
    res.send("Hello World");
})

app.get('/addMarks', async (req, res) => {

    const studentmarks = await StudentMarks.create({ name: "Hemnag", rollno: 6274, wad: 32, dsbda: 24, cc: 24, cns: 23, ai: 4 });
    console.log(studentmarks);
    res.send(studentmarks);
})


app.get("/showstudents", async (req, res) => {
    const students = await StudentMarks.find()

    res.send({ "total students": students.length, "students": students });
})


mongoose.connect('mongodb+srv://hemangbarhate:hemangbarhate93@cluster0.2sdg3wj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(4000, () => {
        console.log("Listening to port 4000");
    })
})