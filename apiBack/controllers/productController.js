const Product = require('../models/product');

const productController = {
    create: async(req,res)=>{
        try {
            const product = {
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                img:req.body.img
            };
            const response = await Product.create(product);
            res.status(201).json({response,msg:"Produto criado"});
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req,res)=>{
        try {
            const product = await Product.find()
            res.json(product);
            
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req,res)=>{
        try {
            const id = req.params.id
            const product = await Product.findById(id);
            if(!product){
                res.status(404).json({msg:"Product not found"})
                return;
            }
            res.json(product);
            
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req,res)=>{
        try {
            const id = req.params.id    
            const product = Product.findById(id);
            if(!product){
                res.status(404).json({msg:"Product not found"})
                return;
            }
            const deletedProduct = await Product.findByIdAndDelete(id);
            res.status(200).json({deletedProduct,msg:"Product deleted"});

        } catch (error) {
            console.log(error)
        }
    },
    update: async(req,res)=>{
        try {
            const id = req.params.id    
            
            const product = {
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                img:req.body.img
            };
            
            const updatedProduct = await Product.findByIdAndUpdate(id, product);
            res.status(200).json({product,msg:"Product Updated"})
            
        } catch (error) {
            console.log(error)
        }
    }

};

module.exports = productController;

