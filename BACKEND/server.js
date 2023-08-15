require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json);

const URL = "mongodb+srv://rusiru:1234@studentmanagement.55dy9g0.mongodb.net/StudentManagement?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(URL)
        console.log("connected to mongodb");
    }catch(error){
        console.log(error);
    }
}

connect();


const studentRouter = require("./routes/students.js")

app.use("/student", studentRouter )




app.listen(PORT, ()=>{
    console.log(`server is up and riunning on ${PORT}`)
})