// grab the nerd model we just crearted 
var About = require('./models/contact');

    module.exports = function(expobj){
        //server routes
        //handle things like api call
        //authentication routes
        //sample test api
        expobj.get('/api/about',function(req,res){
            //use mongoose to get all data in the database
            About.find(function(err,about){
                //if there is an error retrieving ,send the error.
                
                if(err)
                    res.send(err);// if error is comming the nothing will exected
                res.json(about); // it return all the data in json format
            });
        });
        //route to handle creating goes here (app.post)
        //route to handle delete goes here(app.delete)

        //frontend routes 
        //route to handle all angular request
       // expobj.get('*',function(req,res){
            // res.sendFile('./pubic/index.html'); // load our home html file
        //});

    //};

// grap the nerd model we just created
// var About =require('./models/contact');
   
    module.exports =function(expobj){
        //add contact
            expobj.post('/api/about',(req,res)=>{
                //login to display data onthe console
                console.log("FirstName: "+req.body.first_name+'\nLastName: '+req.body.last_name+ '\nPhone: '+req.body.phone);

                //logic to add contact
                let newContact =new About({
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    phone:req.body.phone
                });

                newContact.save(function(err,contact){
                    if(err){
                        res.json({msg:'failed to add contact'});
                    }
                    else{
                        res.json({msg:'contact added sucessfully'});
                    }

                });

            });
   };

   //update contact
   //logic to get individual data to update from database to server
    expobj.get('/api/about/:id',function(req ,res){

        About.find({_id:req.params.id},function(err,datatoupd){
            //if there is an error retrieving,send the error.
            if(err)
               res.send(err);
            res.json(datatoupd);   
        });

   });

   //logic to put individual data to update from server to database
    expobj.put('/api/about/:id',function(req,res){
       //logic to update contact
       console.log("Updated data"+req.body._id+req.body.first_name);
       About.update({_id: req.body._id},{$set:{first_name:req.body.first_name,last_name:req.body.last_name,phone:req.body.phone}},{
            multi:true},function(err,update){
            if(err){
                res.json(err);
            }else{
                res.json(update);
            }
        });
   });
   
   //logic to delete the data from database
   expobj.delete('/api/about/:id',function(req,res){
       //logic to delete data
       About.remove({_id: req.params._id},function(err,result){
           if(err){
               res.json(err);
           }else{
               res.json(result);
           }
           

       })
   });

};
