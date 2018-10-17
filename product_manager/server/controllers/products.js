
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports={
    index: (req,res)=>{
        Product.find({}, function(err, products){
            console.log('got products at index', products);
            res.json(products);
        })
    },

    create: (req,res)=>{
        var newProduct = new Product();
        newProduct.title = req.body.title;
        newProduct.price = req.body.price;
        newProduct.image_url = req.body.image_url;
        newProduct.save(function(err){
            if(err){
                res.json(err);
            }
            else{
                res.json(newProduct);
            }
        })
    },

    show: (req, res) => {
        Product.findOne({_id:req.params.id}, function (err, product){
            if(err){
                res.json(err);
            }else{

                res.json(product);
            }
        })
    },

    update: (req, res) => {
        Product.findOne({_id: req.params.id}, function(err, product){
            product.title = req.body.title;
            product.price = req.body.price;
            product.image_url = req.body.image_url;
            product.save(function(err){
                if (err){
                    res.json(err);
                }else{
                    res.json(product);
                }
            })
        })
    },

    delete: (req, res) => {
        Product.remove({_id: req.params.id}, function(err){
            console.log(req.params.id);
           if(err){
               console.log("error in deleting");
               res.json(err);
           } else {
               console.log("successfully deleted");
               res.json({message: "Product deleted"});
           }
           })
    }
}