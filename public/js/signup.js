
//phone number validation
function phonevalidate() {

    var phonenum= document.getElementById("phonenum").value;
    var phoeneregex = /^(\+\d{x1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  

    if (phonenum.length=="" )
    {
        document.getElementById("sphonenum").innerHTML="Enter Phone#";
        document.getElementById("sphonenum").style.color="red";
        document.getElementById("phonenum").focus();
        return false;

    }

     else if (phonenum.length >12 )
    {
     
       document.getElementById("sphonenum").innerHTML="Phone number length exceeded";
       document.getElementById("sphonenum").style.color="red";
       document.getElementById("phonenum").focus();
       return false;
  
    }
  
      else if (!phonenum.match(phoeneregex))
    { 
        document.getElementById("sphonenum").innerHTML="Enter Valid Phone Number";
        document.getElementById("sphonenum").style.color="red";
        document.getElementById("phonenum").focus();
        return false;
         }
         else{
             return true;
         }
   }    
     
     //email validation
  
function ValidateEmail() 
  {
      var emailid=document.getElementById("email").value;
      var validRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailid=="")
      {
        document.getElementById("semail").innerHTML="Enter Email Id";
        document.getElementById("semail").style.color='red';
         document.getElementById("email").focus();
      }

       if (validRegex.test(emailid))
       {
    
          return true;
       }
      else{
        document.getElementById("semail").innerHTML="Invalid Email id";
        document.getElementById("semail").style.color='red';
          document.getElementById("email").focus();
          return false;
  
        }
  
  }
  
  
  
  //password validation function
  function passwordChanged() {
     var strength = document.getElementById("strength");
     var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
     var pwd = document.getElementById("password");
  
    
  
  
  if (pwd.value.length<8)
     {
        document.getElementById("spwd").innerHTML="Password should be minimum of 8 charecters";
        document.getElementById("spwd").style.color="red";
         document.getElementById("password").focus();
         return false;
     }
      
  
     re = /[0-9]/;
     if(!re.test(pwd.value)) {
        document.getElementById("spwd").innerHTML="Password must contain at least one number (0-9)!";
        document.getElementById("spwd").style.color="red";
        document.getElementById("pwd").focus();
       return false;
     }
     re = /[a-z]/;
     if(!re.test(pwd.value)) {
        document.getElementById("spwd").innerHTML="Password must contain at least one lowercase letter (a-z)!";
        document.getElementById("spwd").style.color="red";

       document.getElementById("pwd").focus();
       return false;
     }
     re = /[A-Z]/;
     if(!re.test(pwd.value)) {

        document.getElementById("spwd").innerHTML="Password must contain at least one uppercase letter (A-Z)!";
        document.getElementById("spwd").style.color="red";

       document.getElementById("pwd").focus();
       return false;
     }
  
  
     if (pwd.value.length == 0) {
        document.getElementById("spwd").innerHTML="Type Password";
        document.getElementById("spwd").style.color="red";
        document.getElementById("password").focus();
        return false;
      } 
      else if (strongRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:green">Strong!</span>';
         return true;
         
      }
     else if (mediumRegex.test(pwd.value)) {
         strength.innerHTML = '<span style="color:orange">Medium!</span>';
         return true;
         
     } 
     else {
         strength.innerHTML = '<span style="color:red">Weak!</span>';
      return false;
     }
  }
  
  //confirm password validation
  function ConfirmPassword(){
  var confirmPassword = document.getElementById("txtConfirmPassword").value;
  var pwd = document.getElementById("password").value;
      
     if (pwd != confirmPassword) {
        document.getElementById("scpwd").innerHTML="Password didn't match";
        document.getElementById("scpwd").style.color="red";
             document.getElementById("txtConfirmPassword").value=null;
             document.getElementById("txtConfirmPassword").focus();
              return false;
         }
         else{
         return true;
         }
     }
  
     function validatefirstname()
     {
        var fname=document.getElementById("fname").value;
      if (fname=="")
       {
         document.getElementById("fuser").innerHTML="Enter Firstname";
          document.getElementById("fuser").style.color="red";
          document.getElementById("fname").focus();
          return false;
       }
       else{
           return true;
       }

     }


     
  
  
  
  
  
  function password_show_hide() {
      var x = document.getElementById("password");
      var show_eye = document.getElementById("show_eye");
      var hide_eye = document.getElementById("hide_eye");
      hide_eye.classList.remove("d-none");
      if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
      } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
      }
    }
  
    function clear()
    {
        document.getElementById("fuser").innerHTML="";
        document.getElementById("semail").innerHTML="";
        document.getElementById("sphonenum").innerHTML="";
        document.getElementById("spwd").innerHTML="";
        document.getElementById("scpwd").innerHTML="";

        document.getElementById("ssubmit").innerHTML="";
        return true;

    }
    document.getElementById("fname").onkeyup = clear;
    document.getElementById("Lname").onkeyup = clear;
    document.getElementById("email").onkeyup = clear;
    document.getElementById("phonenum").onkeyup = clear;
    document.getElementById("password").onkeyup = clear;
    document.getElementById("txtConfirmPassword").onkeyup = clear;

    


   /* function Validate()
    {
      var fflag= validatefirstname();
      var lflag;
      var pflag;
      var eflag;
      var pwdflag;
      if (fflag)
      {

        var lflag=validateLastname();
         if (lflag)
         {
            eflag=ValidateEmail();

          if (eflag)
          {
            pflag=  phonevalidate();
            if (pflag)
            {
               pwdflag= passwordChanged();

               if (pwdflag)
               {
                return ConfirmPassword();
               }

            }

          }
 
         }
      }
    }*/
    function Validate()

{
 

     var fname=document.getElementById("fname").value;
     var Lname=document.getElementById("Lname").value;
     var num=document.getElementById("phonenum").value;
     var email=document.getElementById("email").value;
     var pwd1=document.getElementById("password").value;
     var pwd2=document.getElementById("txtConfirmPassword").value;

    if(fname==""|| Lname==""||num==""||email==""||pwd1==""||pwd2=="")
    {

        document.getElementById("ssubmit").innerHTML="Fill all the details";
        document.getElementById("ssubmit").style.color="red";

        return false;

    }
    
    else{
    alert("Successfully SignedUp");
    return true;
    }
}