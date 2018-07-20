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
    console.log(req.body);
    let {username, password} = req.body;
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.genSalt(password, salt);

    bcrypt.hash(password, 10, function(err, hash) {
        console.log(hash);
        password = hash;
      });

    console.log(username);
    db.User.findOne({username})
        .then((user) => {   
            console.log(user);
            if(user) {
                return res.status(409).json({error: "Username already exists"});
            }

            const new_user = new db.User({
                username,
                password
            });
            new_user.save((err, user) => {
                console.log(user)
                if (err) {
                    console.log(err);
                    return err;
                }

                const token = getJWT(user._id, user.username);
                res.cookie("token", token);
                res.status(200).json({msg: "New user registered"});
            });
        }).catch((err) => {
            console.log(err);
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
                res.cookie("token", token);
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



// Submit project to mongo db
// apirouter.post("/submitproject", (req, res) => {
//     const {projectName, projectDescription, projectLanguages, projectLink} = req.body;
//     console.log(req.body);
//     projectName.save()
//     projectDescription.save()
//     projectLanguages.save()
//     projectLink.save()
//         .then(item => {
//             res.send("Information saved to the database");
//             console.log(res.send);
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save to the database");
//             console.log(res.status);
//         })
// });


// Submit desired project to mongo db
apirouter.post("/findproject", (req, res) => {
    const {selectedInterests, selectedSkills} = req.body;
    db.FindProject.findOne
    console.log(req.body);
    selectedInterests.save()
    selectedSkills.save()
        .then(item => {
            res.send("Information successfully saved to the database")
        })
        .catch(err => {
            res.send("Unable to save to the database");
        })
});

apirouter.post
module.exports = apirouter;