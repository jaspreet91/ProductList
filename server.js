const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require ('mongoose');
const app = express();
const productCollection = require('./backend/model/mongoose.model');

mongoose.connect(
    'mongodb+srv://jaspreet:marwah@cluster0-riuip.mongodb.net/TapOnIt?retryWrites=true'
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

app.get('/',function(req,res){
  productCollection.find({},function(err,responseData){
    if(err){
      console.log(err);
    } else{
      res.status(200).json(responseData);
    }
  });
});

app.post('/',function(req,res){
  productCollection.create({
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    likes: req.body.likes,
  description: req.body.description
  },function(err){
    if(err){
      console.log(err);
    }
    else{
      res.status(201).json({message: 'data saved'});
    }
  });
});

app.put('/',function(req,res){

  productCollection.findOneAndUpdate({_id: req.body._id},{
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    likes: req.body.likes,
  description: req.body.description
  },function(err){
    if(err){
      console.log(err);
    }
    else{
      res.status(201).json({message: 'data updated'});
    }
  });
});


app.listen(4000, function(){
  console.log('server has started');
})



