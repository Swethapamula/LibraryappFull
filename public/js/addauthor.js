
function validateauthor()
{
    var authname=document.getElementById("txtauthor").value;
    if (authname=="")
    {
        document.getElementById("sname").innerHTML="Enter Author Name";
        document.getElementById("sname").style.color="red";
        document.getElementById("txtauthor").focus();

    }

else
     {
    var regex1 = /[0-9]/;
    if(regex1.test(authname)) 
    {
     document.getElementById("sname").innerHTML="Numbers not allowed";
     document.getElementById("sname").style.color="red"; 
     document.getElementById("txtauthor").focus();

    }
}
return false;

}

function validateCountry()
{

    var country=document.getElementById("txtcountry").value;
    if (country.length==0)
    {
        document.getElementById("scountry").innerHTML="Enter Nationality";
        document.getElementById("scountry").style.color="red"; 
        document.getElementById("txtcountry").focus();
   

    }
    else
     {
    var regex1 = /[0-9]/;
    if(regex1.test(country)) 
    {
     document.getElementById("scountry").innerHTML="Numbers not allowed";
     document.getElementById("scountry").style.color="red"; 
     document.getElementById("txtcountry").focus();

    }
    return false;

 }
}


function ValidateImg()
{
    if( document.getElementById("filename").value=="")
    {
        document.getElementById("sfile").innerHTML="Select file";
        document.getElementById("sfile").style.color="red"; 
        return false;
    }
}


function Validate()
{
    var authname=document.getElementById("txtauthor").value;
     var country=document.getElementById("txtcountry").value;
     var file=document.getElementById("filename").value

     if (authname==""||country==""||file=="")
     {
         document.getElementById("ssubmit").innerHTML="Enter all fields";
         document.getElementById("ssubmit").style.color="red"; 
         return false;


     }

     else{
         return true;
     }



    
}
function clear()
    {
        document.getElementById("ssubmit").innerHTML="";
        document.getElementById("sfile").innerHTML="";
        document.getElementById("scountry").innerHTML="";
        document.getElementById("sname").innerHTML="";

        return true;

    }
    document.getElementById("txtauthor").onkeyup = clear;
    document.getElementById("txtcountry").onkeyup = clear;
    document.getElementById("filename").onkeyup = clear;

    
