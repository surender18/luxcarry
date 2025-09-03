const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/luxcarry')
.then(()=>{
    console.log("MongoDB connected")
})
.catch((err)=>{
    console.log("MongoDB connection error",err)
})

module.exports=mongoose.connection