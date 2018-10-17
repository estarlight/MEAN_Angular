//example
var mongoose = require('mongoose');
var Author = mongoose.model('Author');

module.exports={
    index: (req,res)=>{
        Author.find({}, function(err, authors){
            console.log('got authors', authors);
            res.json(authors);
        })
    },
    create: (req,res)=>{
        var newAuthor = new Author();
        newAuthor.name = req.body.name;
        newAuthor.save(function(err){
            if(err){
                res.json(err);
            }
        })
    },

    show: (req, res) => {
        Author.findOne({_id:req.params.id}, function (err, author){
            if(err){
                res.json(err);
            }else{

                res.json(author);
            }
        })
    },

    update: (req, res) => {
        Author.findOne({_id: req.params.id}, function(err, author1){
            author1.name = req.body.name;
            author1.save(function(err){
                if (err){
                    res.json(err);
                }else{
                    res.json(author1);
                }
            })
        })
    },

    delete: (req, res) => {
        Author.remove({_id: req.params.id}, function(err){
            console.log(req.params.id);
           if(err){
               console.log("error in deleting");
               res.json(err);
           } else {
               console.log("successfully deleted");
               res.json({message: "Author deleted"});
           }
           })
    }
    

}