const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Project
            .create(req.body)
            .then(dbModel = res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
        db.Project
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};