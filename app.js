const express = require('express');
const app =new express();

const nav= [
           {link:'/adminhome',name:'home'},
           {link:'/books',name:'Books'},
           {link:'/authors',name:'Authors'},
           {link:'/',name:'Logout'}];
const nav2=
[
  {link:'/home',name:'home'},
  {link:'/viewbooks',name:'Books'},
  {link:'/viewauthors',name:'Authors'},
  {link:'/',name:'Logout'}];


const booksRouter= require("./src/routes/bookroutes")(nav);
const authorRouter= require("./src/routes/authorroutes")(nav);
const homeRouter=require("./src/routes/homeroutes")(nav2);
const homeadminrouter=require("./src/routes/homeadminrouter")(nav);
const SignupRouter=require("./src/routes/SignupRouter")(nav);
const adminrouter= require("./src/routes/adminrouter")(nav);
const viewbookrouter=require("./src/routes/viewbookrouter")(nav2);
const viewauthorroute=require("./src/routes/viewauthorroute")(nav2)
const port= process.env.PORT || 50000;
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set ("view engine","ejs");
app.set("views", "./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/home',homeRouter);
app.use("/admin",adminrouter);
app.use("/adminhome",homeadminrouter);
app.use("/signup",SignupRouter);
app.use("/viewbooks",viewbookrouter);
app.use("/viewauthors",viewauthorroute);


const Signupdata=require("./src/model/Signupdata");



app.get("/", function(req,res){
  res.render("index")
});
app.get("/signin", function(req,res){
  res.render("signin")
});


app.post("/login", function(req,res){
  var Item={
    username:req.body.username,
    password:req.body.password
  }
 
  Signupdata.findOne({username:Item.username,password:Item.password},(err,user)=>{
  if(err)
  {
      console.log(err);
   }
  else  if (user!==null)
   {
   res.redirect("/home")
   }
    else if(Item.username=="admin" && Item.password=='12345')
    {     
      res.redirect("/adminhome")
    }
   else
   {
     res.redirect('/')
     console.log("Invalid credentials")
  
   }

  })

});


  //app.get("/logout", function(req,res){
  //   res.render("/")

  

 

 app.listen(port,()=>{console.log("Server ready at port" +port)});