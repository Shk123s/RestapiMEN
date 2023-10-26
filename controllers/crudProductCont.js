const createerror = require('http-errors');
const mongoose = require('mongoose');

const Product = require('../Models/ProductModel');
const AllProduct = 
    async (req,res,next)=>{
        try {
         const result = await Product.find({},{__v:0});
        //  console.log(result)
         res.send(result);
        } catch (error) {
         console.log(error);
        }
     }
const AddProduct = 
async (req,res,next)=>{
    // console.log(req.body);
    try {
        
        const product =  new Product(req.body);
        const result =  await product.save();
        // console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error);
        if (error.name === "ValidationError") {
            next(createerror(422,error.message));
            return;
        }
        next(error);
    }
    // promise and then 
    // const product = new Product({
    //     name:req.body.name,
    //     price:req.body.price
    // });
    // product.save()
    // .then(result=>{
    //     console.log(result);
    //     res.send(result);
    // })
    // .catch(err=>{
    //     console.log(err.message);
    // })
   
}

const GetProductbyId =
async (req,res,next)=>{
    try {
        const id = req.params.id
        // const product = await Product.findById(id);
        const product = await Product.findOne({_id:id});
        if(!product)
        {
            throw createerror(404,"Product does not exist");
        }
        console.log(product);
        res.send(product);
    } catch (error) {
        console.log(error.message);
        if(error instanceof mongoose.CastError)
        {
             next(createerror(400,"Invalid product Id"));
             return;
        }
        next(error);
    }
}

const UpdateProduct = async (req,res,next)=>{
    try {
        const id = req.params.id;
        const update = req.body;
        const optional = {new:true}
        const result = await Product.findByIdAndUpdate(id,update,optional);
        if(!result)
     {
         throw createerror(404,"Product does not exist");
     }
        // console.log(result);
        res.send(result);
    } catch (error) {

        console.log(error.message);
        if(error instanceof mongoose.CastError)
        {
             next(createerror(400,"Invalid product Id"));
             return;
        }
        next(error);
    }
 
}

const deleteProduct =
async (req,res,next)=>{
    try {
     const id = req.params.id
     //  const product = await Product.deleteOne({_id:id})
      const product = await Product.findByIdAndDelete(id);
      if(!product)
      {
          throw createerror(404,"Product does not exist");
      }
    //   console.log("delte hogaya");
      res.send(product);
    } catch (error) {
     console.log(error.message);
     if(error instanceof mongoose.CastError)
     {
          next(createerror(400,"Invalid product Id"));
          return;
     }
     next(error);
    }
 }

 module.exports = {AllProduct,AddProduct,GetProductbyId,UpdateProduct,deleteProduct}