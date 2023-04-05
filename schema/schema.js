const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name:{type:String ,required:true},
    description:String,
    category:{type:String , required:true},
    price:{type:Number,required:true},
    image:String,
    quantity:{type:Number,required:true},
    rating:Number
})
let bookCollection =  mongoose.model("book",schema)

module.exports = bookCollection

// {
//     "name":"chanakiy niti",
//   "description":"success story",
//   "category":"best",
//   "price":6,
//   "image":"url",
//   "quantity":10,
//   "rating":8.5
// }