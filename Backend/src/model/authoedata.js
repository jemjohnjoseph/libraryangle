
const mongoose =require('mongoose') 
mongoose.connect('mongodb://localhost:27017/librarydb');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    // book: String,
    books: String,
    genre: String,
    image: String
});
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;
