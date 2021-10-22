const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority");
//mongoose.connect("mongodb://localhost:27017/LibraryData");
const Schema= mongoose.Schema;
const Signupschema= new Schema(
    {
        username:String,
        email:String,
        phoneno:String,
        password:String

    }

)
const Signupdata= mongoose.model("userdata",Signupschema);
module.exports=Signupdata;