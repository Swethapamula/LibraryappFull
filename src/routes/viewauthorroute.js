const express=require('express');
const viewauthorroute= express.Router();
const Authordata=require('../model/Authordata')

function router1(nav)
{

    viewauthorroute.get("/", function(req,res){

    Authordata.find()
    .then(function(authors){
        res.render("viewauthors",
         {
         nav,
         title: 'Library',
         authors
         }
           
         );
    
    });
});
viewauthorroute.get('/:id', function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author)
        {
            res.render('viewauthor',
        {    
            nav,
            title: 'Library',
            author
     
     
        })
     })
        
     })
         return viewauthorroute;

}
module.exports=router1;