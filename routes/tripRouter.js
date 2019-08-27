const express = require('express');
const bodyParser = require('body-parser');
var mongoose=require('mongoose');
var authenticate = require('../authenticate');
var Trips = require('../models/trips');

const tripRouter = express.Router();
tripRouter.use(bodyParser.json());

tripRouter.route('/trip')
.options(authenticate.verifyUser, (req, res) => { res.sendStatus(200); })
.post(authenticate.verifyUser,(req, res, next) => {
    req.body.authorId = req.user._id;
    Trips.create(req.body)
    .then((trip)=>{
      console.log('Trip created',trip);
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(trip);
      
    },(err)=>next(err))
    .catch((err)=>next(err));
})

module.exports = tripRouter;