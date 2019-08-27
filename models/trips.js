var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passsportLocalMongoose=require('passport-local-mongoose');

var Trip = new Schema({
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    noOfTrips:{
        type:Number,
        default:0
    }
});


module.exports = mongoose.model('Trip', Trip);