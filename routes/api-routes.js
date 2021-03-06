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

apirouter.get('/logout', function(req,res) {
    res.status(200).send({ auth: false, token: null });
    res.send("logout success");
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

apirouter.post("/submitproject", (req, res) => {
    console.log(req.body);
    const{projectName, projectDescription, projectLanguages, projectLink} = req.body;
    // Mongoose code to submit into the mongodb database
    db.projectSubmit.findOne({projectName})
        .then((project) => {
            console.log(project);
            if(project) {
                return res.status(409).json({error: "That project name already exists"});
            }
            const new_project = new db.projectSubmit({
                projectName,
                projectDescription,
                projectLanguages,
                projectLink
            });
            new_project.save((err, project) => {
                console.log(project)
                if(err) {
                    console.log(err);
                    return err;
                }
            })
        })
})

apirouter.get("/findproject", (req, res) =>{
    console.log(req.body);
    const{selectedInterests, selectedSkills} = req.body;
    db.projectFind.findOne({selectedInterests, selectedSkills})
        .then(returnedProject);
            console.log(returnedProject);
            if(returnedProject) {
                return res.status(409).json({error});
            }
        const new_returnedProject = new db.projectFind({
            selectedInterests,
            selectedSkills
        });
        new_returnedProject.save((err, returnedProject) => {
            console.log(returnedProject);
            if(err) {
                console.log(err);
                return err;
            }
        })
})

apirouter.post
module.exports = apirouter;