// its start first after application run
//module initalized 
var express=require('express');
//it is requred to import the express
var expobj=express();
// above create the object of express
var bodyparser=require('body-parser');
// used to import body parser
var methodoverride=require('method-override');
// used to import methodoverride
var mongoose=require('mongoose');
//use to import mongoose


//backend configuration file
var db=require('./backendconfiguration/db');
//here configure the db.js file
var port=process.env.PORT || 8080;
// above set the port address for run the application
expobj.use(bodyparser.json());
// parse the application data to jason foramte
expobj.use(bodyparser.json({type:'application+/vnd.api+json'}));
//parse the application/vmd.api+jason as json
expobj.use(bodyparser.urlencoded({extended: true}));
// it is used to send the data in incoded form
expobj.use(methodoverride('X-HTTP-Method-Override'));
//set the static files location 
expobj.use(express.static(__dirname + '/public'));

//routes 
require('./backendapp/routes')(expobj);
//configure the routes

//start app 
expobj.listen(port);

console.log('\nNode server is start sucessfully');
console.log('\nto check it open any webbrowser and typre "localhost":'+port+'"and see magic');
//expose app
exports=module.exports=expobj;
//export is used to make global object


//it is configuration fontend to backend take data from form and send to database
//connect to our mongobd database
    mongoose.connect(db.url);//here also use url of database inthe place of db.url

//it is used to on the connection of data base
    mongoose.connection.on('connected',function(){
        console.log('connection to database mongodb @ 27017' );
    });
    mongoose.connection.on('err',function(err){
        if(err){
            console.log('error in th connection to the database');
        }
    });
    mongoose.connection.on('disconnected',function(){
        console.log('Disconnect the databse!!!!!');
    });
    process.on('SIGINT',function(){
        console.log('Disconnected from database mongobd through app termination');
        process.exit(0);
    });

