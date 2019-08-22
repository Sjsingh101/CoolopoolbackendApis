var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passsportLocalMongoose=require('passport-local-mongoose');
var Post = new Schema({
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image:{
        type:String,
        default:''
    },
    blog:{
        type: String,
        default: ''
    }
});


module.exports = mongoose.model('Post', Post);