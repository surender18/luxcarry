const express= require("express")
const app= express()
const cookieParser= require('cookie-parser')
const path = require('path')
const db=require('./config/mongooseConnection')
const adminRouter=require('./routes/adminRouter')
const productRouter=require('./routes/ProductRouter')
const userRouter=require('./routes/userRouter')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
  res.send("Welcome to LuxCarry")
})
app.use('/admin',adminRouter)
app.use('/product',productRouter)
app.use('/user',userRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})