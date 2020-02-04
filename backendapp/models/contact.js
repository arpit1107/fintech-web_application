//backendapp/models/contact.js
// grap the mongoes module

const mongooes=require('mongoose');

const contact = new mongooes.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    }
});

module.exports = mongooes.model('contact',contact);
