var Userdb = require('../model/model');

// create and save new user
module.exports.create = (req,res) => {
    // validate request
    if(Object.keys(req.body).length == 0) {
        res.status(400).send({ message : 'Content can not be empty!'});
        return;
    }

    // new user
    const user = new Userdb({

        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,

    })

    // save user in the database
    user
        .save(user)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Some error occurred while creating a create operation" }))
        
}

// retrieve and return all users/ retrive and return a single user
module.exports.find = (req,res) => {
    // Userdb.find()
    //     .then(user => {
    //         res.s
    //     })
}

// update a new identified user by user id
module.exports.update = (req,res) => {

}

// Delete a user with specified user id
module.exports.delete = (req,res) => {

}