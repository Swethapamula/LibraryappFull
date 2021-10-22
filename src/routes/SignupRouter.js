const express=require('express');
const SignupRouter= express.Router();
const Signupdata=require('../model/Signupdata');

function router(nav)
{
SignupRouter.get("/", function(req,res){
    res.render("signup");
  });
 
  SignupRouter.post("/add", function(req,res){
    var Item={
      username:req.body.firstname,
      email:req.body.email,
      phoneno:req.body.phoneno,
      password:req.body.password
    }
   
    Signupdata.findOne({username:Item.username},(err,user)=>{
    if(err)
    {
        console.log(err);
     }
    else  if (user!==null)
     {
     console.log("user already Exists");
     }
     else
     {
       var userdata=Signupdata(Item);
       userdata.save();
       res.redirect('/')
    
     }

    })
  
  });
  return SignupRouter;

}
module.exports=router;