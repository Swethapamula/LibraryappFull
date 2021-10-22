



function booktitle()
{
     var title=document.getElementById("txtbktitle").value

    if( title=="")
    {
        document.getElementById("stitle").innerHTML="Enter Book title";
        document.getElementById("stitle").style.color="red"; 
        return false;
    }


}
function author()
{
    var author=document.getElementById("txtbkauthor").value ;
     if (author=="")
     {
        document.getElementById("sauthor").innerHTML="Enter author name";
        document.getElementById("sauthor").style.color="red"; 
        document.getElementById("txtbkauthor").focus();
     }
     else
     {
        var regex = /[0-9]/;
        if(regex.test(author)) {
            document.getElementById("sauthor").innerHTML="Author name cannot have numbers";
            document.getElementById("sauthor").style.color="red"; 
            document.getElementById("txtbkauthor").focus();

        }
    
     }

     return false;



}

function genre()
{
    var genre=document.getElementById("txtgenre").value;
    if (genre.length==0)
    {
        document.getElementById("sgenre").innerHTML="Enter genre";
        document.getElementById("sgenre").style.color="red"; 
        document.getElementById("txtgenre").focus();
   

    }
    else
     {
    var regex1 = /[0-9]/;
    if(regex1.test(genre)) 
    {
     document.getElementById("sgenre").innerHTML="Numbers not allowed";
     document.getElementById("sgenre").style.color="red"; 
     document.getElementById("txtgenre").focus();

    }
    return false;

 }


}



function Imageval()
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
    var bookname=document.getElementById("txtbktitle").value;
     var author=document.getElementById("txtbkauthor").value ;
     var genre=document.getElementById("txtgenre").value;
     var file=document.getElementById("filename").value

     if (bookname==""||author==""||genre==""||file=="")
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
        document.getElementById("stitle").innerHTML="";
        document.getElementById("sauthor").innerHTML="";
        document.getElementById("sfile").innerHTML="";
        document.getElementById("sgenre").innerHTML="";
        document.getElementById("ssubmit").innerHTML="";

        return true;

    }
    document.getElementById("txtbktitle").onkeyup = clear;
    document.getElementById("txtbkauthor").onkeyup = clear;
    document.getElementById("txtgenre").onkeyup = clear;
    document.getElementById("filename").onkeyup = clear;

    

