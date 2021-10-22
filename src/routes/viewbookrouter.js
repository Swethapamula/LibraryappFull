const express=require('express');
const viewbookrouter= express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){

    viewbookrouter.get("/", function(req,res){

    Bookdata.find()
    .then(function(books)
    {
        res.render("viewbooks",
        {
        
        nav,
        title: 'Library',
        books
        }
          
        );
    

    })

});
viewbookrouter.get('/:id', function(req,res){
   const id=req.params.id;
   Bookdata.findOne({_id:id})
   .then(function(book)
   {
       res.render('viewbook',
   {    
       nav,
       title: 'Library',
       book


   })
})
   
})

     
return viewbookrouter;
}

module.exports=router;