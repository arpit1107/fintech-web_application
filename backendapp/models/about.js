var mongoose =require('mongoose');
//import mongoose model
//define our model
module.exports=mongoose.model('About',{
    name:{type :String,default: ''}
});
//module.export allow us to pass this to other when it is called