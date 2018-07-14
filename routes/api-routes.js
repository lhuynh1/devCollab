const express = require('express');
const apirouter = express.Router();
const jsonwebtoken = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const db = require('../models');

const getJWT = (_id, username) => {
    const token = jsonwebtoken.sign({
        // signing a token with 1 hour of expiration
        data: {
            _id,
            username
        }
    }, 'secret', { expiresIn: '1h' })
};

// signup
apirouter.post("/signup", (req, res) => {
    const {username, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.genSalt(password, salt);

    db.User.findOne({username})
        .then((user) => {
            if(user) {
                return res.status(409).json({error: "Username already exists"});
            }

            const new_user = new db.User({
                username,
                password: hash
            });
            new_user.save((err, user) => {
                if (err) {
                    return err;
                }

                const token = getJWT(user._id, user.username);
                res.cookie("token", token);
                res.status(200).json({msg: "New user registered"});
            });
        }).catch((err) => {
            res.status(400).json({err: "Connection error"});
        });
});

// signin
apirouter.post("/signin", (req, res) => {
    const {username, password} = req.body;

    db.User.findOne({username})
        .then((user) => {
            if (bcrypt.compareSync(password, user.password)) {
                const token = getJWT(user._id, user.username);
                res.cookie("toekn", token);
                res.status(200).json({msg: "Successfully signed in"});
            } else {
                res.status(400).json({error: "Passwords do not match"});
            }
        }).catch((err) => {
            res.status(400).json({err: "Connection error"});
        });
});

// verifying cookie upon login
const verifyCookie = (req, res, next) => {
    jsonwebtoken.verify(token, 'good', (err, decoded) => {
        if(err) {
            res.status(401).json({error: "Access denied"});
        } else {
            next();
        }
    });
};

module.exports = apirouter;