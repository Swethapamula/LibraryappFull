const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@cluster0.f0m8q.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority");
const Schema= mongoose.Schema;
const BookSchema=new  Schema(
    {
        title:String,
        Author:String,
        genre:String,
        Image:String
    }
);
var Bookdata = mongoose.model('bookData', BookSchema);
module.exports=Bookdata;