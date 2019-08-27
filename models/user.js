var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passsportLocalMongoose=require('passport-local-mongoose');
var User = new Schema({
    name:{
        type:String,
        default:''
    },
    noOfPhotos:{
        type:Number,
        default:0
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passsportLocalMongoose);

module.exports = mongoose.model('User', User);