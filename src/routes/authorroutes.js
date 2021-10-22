const express=require('express');
const authorRouter= express.Router();
const Authordata=require('../model/Authordata')

function router1(nav)
{

    authorRouter.get("/", function(req,res){

    Authordata.find()
    .then(function(authors){
        res.render("authors",
         {
         nav,
         title: 'Library',
         authors
         }
           
         );
    
    });
});
    authorRouter.get('/:id', function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author)
        {

            res.render('author',
        {    
            nav,
            title: 'Library',
            author
     
     
        })
     })
        
     })
         return authorRouter;

}
module.exports=router1;