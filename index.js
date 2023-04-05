const express = require('express')

let connect =require('./conect/conect')
let bookCollection = require('./schema/schema')
const conect = require('./conect/conect')

let app = express()

app.use(express.json())
app.get("/home",async(req,res)=>{
    
   let {min,max,sort}=  req.query 
   console.log(min)
   console.log(max)
   if(min && max ){
    let data = await bookCollection.find({price:{$gt : min ,$lt : max}})
    res.send(data)
   }
   if(sort == "lth"){
    let pricelow=await bookCollection.find().sort({"price":-1})
    res.send(pricelow)
       res.send(sort)
   }
   else if(sort == "htl"){
    let pricelow=await bookCollection.find().sort({"price":1})
    res.send(pricelow)
       res.send(sort)
   }
})
 
let midelwer=(req,res,next)=>{
    let{name,category,quantity}=req.body
    try {
        if(name){
            next()
        }
        else{
            res.send("error")
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("error")
    }  
    } 
app.post("/",midelwer,async(req,res)=>{
   bookCollection.create(req.body) 
    let pricelow=await bookCollection.find().sort({"price":-1})
    res.send(pricelow)
})
app.delete('/data/:id',async(req ,res)=>{
    let{id} = req.params;
    let idDelete =await bookCollection.findByIdAndDelete(id)
    let bb=await bookCollection.find()
    res.send(bb)
})
app.patch('/patch/:id',async(req,res)=>{
    let{id} = req.params;
    let idUpdet = await bookCollection.findByIdAndUpdate(id,req.body)
    let cc =await bookCollection.find()
    res.send(cc)
})
app.listen(8080,()=>{
    console.log("8080 is running");
    conect()
})
 