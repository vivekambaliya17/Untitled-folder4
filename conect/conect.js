const mongoose = require('mongoose')

let conect = async()=>{
    try {
        console.log("running");
        await mongoose.connect("mongodb+srv://ambaliyavivek17:9033523395@cluster0.csuqghl.mongodb.net/?retryWrites=true&w=majority")
        console.log("conect")
    } catch (error) {
        console.log(error)
    }
}
module.exports = conect