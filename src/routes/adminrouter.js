const express=require('express');
const adminrouter= express.Router();
const Bookdata= require('../model/Bookdata');
const Authordata=require('../model/Authordata');

const multer=require('multer');

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/Images')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname)

    }
});

const upload=multer(
        {
        storage:storage,
        limits:{filesize:1024*1024*5}
    });



function router(nav){


  adminrouter.get("/", function(req,res){
      const uniqid=req.query.id;
      const action=req.query.action

//loading addbook page
      if (action=='addbook')
      {
          res.render("addbook",
           {
           nav,
           title: 'Add Book',
           }
             
           );
              
      }
      else if (action=="editbook")
      {
            Bookdata.findOne({_id:uniqid})
            .then(function(book)
         {
            res.render("editbook",
             {
             
             nav,
             title: 'Edit Book',
             book
             }
            )})     
            
         

      }
     //loading add author page
     else if ( action=='addauthor')
     {
        res.render("addauthor",
         {
         nav,
         title: 'Add Author',
         })
           
    
     
     }
     //loading edit author page
     else if ( action=='editauthor')
      {
        Authordata.findOne({_id:uniqid})
        .then(function(author)
      {
        res.render("editauthor",
         {
         
         nav,
         title: 'Edit Author',
         author
         }
           
         );
        });
     

      
      }
      else if (action=='deleteauthor')
      {
       // deleting author record from database
        Authordata.deleteOne({ _id: uniqid }, function (err) {
          if(!err)
          {
            res.redirect('/authors');
          }
          else
          {
            console.log('Failed to Delete author Details: ' + err);
    
          }
    
        })
      }
      else if (action=='deletebook')
      {
       // deleting book record from database
       Bookdata.deleteOne({ _id: uniqid }, function (err) {
          if(!err)
          {
            res.redirect('/books');
          }
          else
          {
            console.log('Failed to Delete Book: ' + err);
    
          }
    
        })
      }
      else{
        res.send("operation failed")
      }

     });


     //updating author record to database
     adminrouter.post("/updateauthor",upload.single('Image'), function(req,res){
      
      
       const id= req.body.id;
        var Item={
          author: req.body.author,
          country:req.body.country,
          Desc:req.body.Desc,
          Image:req.file.filename
        }
    
        Authordata.updateOne({"_id":id}, Item, {upsert:true}, function(err, results){
        if(err){console.log(err)}
        else{
         res.redirect("/authors");
        }
       
        }) 



    });  

    //adding author
    adminrouter.post("/addauthor",upload.single('Image'), function(req,res){
      var Item={
             author:req.body.author,
             country:req.body.country,
              Desc:req.body.Desc,
              Image:req.file.filename
          }
    var author=Authordata(Item);
  
    author.save();
    res.redirect("/authors")
 
     
      }) ;

      //adding book to db
      adminrouter.post('/addbook',upload.single('Image'), function (req,res){
        var Item ={
               title: req.body.title,
                Author:req.body.author,
                genre:req.body.genre,
                Image:req.file.filename
            
        
            }
           var book= Bookdata(Item);
           book.save();
           res.redirect('/books');
           
          })
          adminrouter.post("/updatebook",upload.single('Image'), function(req,res){
            const id= req.body.id;
             var Item={
                 title: req.body.title,
                 Author:req.body.author,
                 genre:req.body.genre,
                 Image:req.file.filename
             }
       
           Bookdata.updateOne({"_id":id}, Item, {upsert:true}, function(err, results){
             if(err){console.log(err)}
             else{
            res.redirect("/books");
             }
            
             }) ;
     
     
     
         });  

    return  adminrouter;

}
module.exports=router;