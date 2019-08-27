var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passsportLocalMongoose=require('passport-local-mongoose');

var imagesSchema=new Schema({
    image:{
        type:String,
        default:''
    }
});

var daysSchema=new Schema({
    counter:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    images:[ imagesSchema]
});

var Post = new Schema({
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    view:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    days:[ daysSchema]
    },{
        timestamps:true
    });


module.exports = mongoose.model('Post', Post);