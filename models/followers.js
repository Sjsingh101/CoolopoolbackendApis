var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passsportLocalMongoose=require('passport-local-mongoose');

var followerSchmea=new Schema({
    followerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

var Follower = new Schema({
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    noOfFollowers:{
        type:Number,
        default:0
    },
    follower:[followerSchmea]    
});


module.exports = mongoose.model('Follower', Follower);