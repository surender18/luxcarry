const mongoose =require('mongoose')

const productSchema=mongoose.Schema({
    product_image:String,
    name:String,
    price:String,
    discount:{
        type:Array,
        default:[]
    },
    bgcolor:Number,
    panelcolor:String,
    textcolor:String,
})

module.exports= mongoose.model('product',productSchema)