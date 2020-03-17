const db = require("../models");

module.exports = {
    createOne: function(req, res) {
        console.log("Creating Service Request...")
        db.Request
            .create(req.body)
            .then(dbRequest => res.json(dbRequest))
            .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
        console.log("Finding Service Requests...")
        db.Request
            .find()
            .sort({ createdAt: -1})
            .then(dbRequest => res.json(dbRequest))
            .catch(err => res.status(422).json(err))
    }
};