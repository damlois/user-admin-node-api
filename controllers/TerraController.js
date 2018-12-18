const terraformer = require('../models/TerraModel');


exports.base_endpoint = function(req,res){
    res.send('THIS IS BASE URL');
}

// post users details on sign up
exports.user_signup_post = function(req,res,next){


    terraformer.findOne({email: req.body.email})
    .then( function(data){
        if(data !== null){
            console.log(`Email ${req.body.email} already exists`);
            res.send({
                statusCode: 202,
                response: `Email: ${req.body.email} already exists`
            });
        }

        else{
            if(typeof(req.body.name)!=='string'
            || typeof(req.body.age)!=='number'){
                res.send('Invalid format');
            }
            else{
            terraformer.create(req.body).then(function(data){
                
                res.send('User ' + data._id + ' signed up successfully');
            
                
            }).catch(next)};
        }
    })
    .catch(next);
};

exports.user_signin_post = function(req,res,next){
    terraformer.findOne({email: req.body.email})
    .then(function(data){
        if(data == null){
            res.send({
                statusCode: 404,
                response: `User ${req.body.email} not found`
            })
        }
        else{
            res.send(`YOU ARE WELCOME ${data.name.toUpperCase()}`)
        }
    }).catch(next);
};

exports.userslist_get = function(req,res,next){
    terraformer.find({}).select({"__v":0})
    .then(function(terraformers){
        res.send(terraformers)
    })
};

exports.user_getbyid = function(req,res,next){

    terraformer.findById({_id:req.params.id}).select({"__v":0})
    .then(function(data){
        if(data == null){
            res.send(`User ${req.params.id} does not exist`)
        }
        else{
            res.send(data)
        }
    })
};

exports.user_getbyname = function(req,res,next){

    terraformer.findOne({name:{ $regex: new RegExp("^" + req.params.name.toLowerCase(), "i") }}).select({"__v":0})
    .then(function(data){
        if(data == null || undefined){
            res.send(`User ${req.params.name} does not exist`)
        }
        else{
            res.send(data)
        }
    })
};

exports.delete_byid = function(req,res,next){
    terraformer.findOne({_id:req.params.id})
    .then(function(data){
        if(data == null ){
            res.send({
                statusCode: 404,
                response: `User does not exist`})
        }
        else{
            console.log('i am here');
            terraformer.findByIdAndRemove({_id:req.params.id})
            .then(function(){
                res.send(`${req.params.id} successfully deleted`)
            });
            }
    });
};

exports.delete_all = function(req,res,next){
    terraformer.deleteMany({}).then( ()=>{
        res.send({Message: 'deleted successfully'});
    });
    
}



