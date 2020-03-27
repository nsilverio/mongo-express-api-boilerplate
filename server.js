const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');


// Initialize router as an instance of expresponses 
const router = express();
const port = 8011;

// process URL encoded forms
router.use(bodyParser.urlencoded({ extended:true }));

// connect to the database
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
  
    // Add this line below to make it work with the new version of mongodb
    // (make sure to add the database name and not the collection name)
    database = database.db("ns-mongo")
  
    require("./routes")(router, database)
    router.listen(process.env.PORT ||  port, () => {
      console.log("👁  " + process.env.PORT ||  port)
    })
  })




