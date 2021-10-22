
var user= document.getElementById("name");
var pwd=document.getElementById("pwd");
var suser=document.getElementById("sname");
var susername=document.getElementById("suser");
var spwd=document.getElementById("spwd");



function validatepassword()
{

     var number=/[0-9]/;
     var lowercasere=/[a-z]/;
     var uppercasere = /[A-Z]/;

    if (pwd.value.length<8)
     {
        document.getElementById("spwd").innerHTML="Password should contain  minimum 8 charecters";
        document.getElementById("spwd").style.color="red";
        document.getElementById("pwd").focus();
        return false;
     }
      
    else  if(!number.test(pwd.value)){

    
       document.getElementById("spwd").innerHTML="Password must contain at least one number (0-9)!";
       document.getElementById("spwd").style.color="red";

       document.getElementById("pwd").focus();
       return false;
     }
    
     else if(!lowercasere.test(pwd.value)) {
        document.getElementById("spwd").innerHTML="Password must contain at least one lowercase letter (a-z)!";
        document.getElementById("spwd").style.color="red";

       document.getElementById("pwd").focus();
       return false;
     }
     
     else  if(!uppercasere.test(pwd.value)) {
       document.getElementById("spwd").innerHTML="Password must contain at least one uppercase letter (A-Z)!";
       document.getElementById("spwd").style.color="red";

       document.getElementById("pwd").focus();
       return false;
     }
     else 
     {
         return true;
     }



}




//calling this function on button click event in html file
function validate(callback)
{
    var flag="";
 var  pwdtest= validatepassword();
 if (user.value=="")
 {
    document.getElementById("suser").innerHTML="Enter username";
    document.getElementById("suser").style.color="red";
 }
    
    if(user.value !="" &&  pwdtest==true)
     {
     flag=true;
     callback(flag);
     return true;
     }
     else{
        flag=false;
        callback(flag);
         return false;
     }
  }
  
//call backfunction to
 function navigate(status)
  {
       if (status)
       {       
       return true;
       
       }
       else{
        document.getElementById("sname").innerHTML="* Enter valid credentials";
        document.getElementById("sname").style.color="red";
       }
            
    
 
    }
    function clear()
    {
        document.getElementById("sname").innerHTML="";
        document.getElementById("spwd").innerHTML="";
        document.getElementById("suser").innerHTML="";

        return true;

    }
    document.getElementById("name").onkeyup = clear;
    document.getElementById("pwd").onkeyup = clear;
        
