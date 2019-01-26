const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Keys = require('../config/keys');

module.exports = {
  register: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (user === null) {
        // hashing the password and saving user
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash)=> {
            if (err) throw err;
            req.body.password = hash
            User.create(req.body)
              .then(user =>{ 
                const payload = {_id : user._id, email: user.email, firstName:user.firstName, lastName:user.lastName}
                jwt.sign(payload, Keys.secretKey, {expiresIn: "1h"}, (err, token) => {
                  res.json({success: true, token : "Bearer " + token})
                })
              })
              .catch(err => res.status(400).json(err));
          })
        })
      } else {
        return res.status(400).json({ error: "Email already in use" });
      }
    });
  },
  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        bcrypt.compare(req.body.password, user.password)
          .then(isMatch => {
            if(isMatch){

              const payload = {_id : user._id,email: user.email, firstName: user.firstName, lastName: user.lastName}
              // creating a token: first= payload second=a sercreat key tird=expiration time {}
              jwt.sign(payload, Keys.secretKey,{expiresIn:"1h"}, (err, token) => {
                  // Bearer <- is a certain type of protocal
                res.json({success:true, token: 'Bearer ' + token})
              })

            }else{
              res.json({ errors: "Invalid password" });
            }
          } )
      })
      .catch(err =>
        res.status(404).json({ errors: "Email is not registered" })
      );
  },

  all: (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  }
};
