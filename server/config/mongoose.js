const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect("mongodb://jimenez:jimenez@zeuscluster0-shard-00-00-oosq7.mongodb.net:27017,zeuscluster0-shard-00-01-oosq7.mongodb.net:27017,zeuscluster0-shard-00-02-oosq7.mongodb.net:27017/test?ssl=true&replicaSet=ZeusCluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var models_path = __dirname + "/../models";
fs.readdirSync(models_path).forEach((file) => {
  if(file.includes('.js')){
    console.log("loading " + file + "...");
    require(models_path + "/" + file);
  }
})