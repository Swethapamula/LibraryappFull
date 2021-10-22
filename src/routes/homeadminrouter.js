const express=require('express');
const homeadminrouter= express.Router();
function router1(nav)
{
    homeadminrouter.get("/", function(req,res){
        res.render("adminhome",
         {
         nav,
         title: 'Library',
         Addbooks: 'Add Books',
         AddAuthors:"Add Authors"
         }
           
         );
    
    });
    return homeadminrouter;

}
module.exports=router1;