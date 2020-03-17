const db = require("../models");

module.exports = {
    createOne: function (req, res) {
        console.log("Creating Quote...")
        db.Quote
            .create(req.body)
            .then(dbQuote => res.json(dbQuote))
            .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
        console.log("Gathering quotes....")
        db.Quote
            .find()
            .sort({ created_at: -1})
            .then(dbQuote => res.json(dbQuote))
            .catch(err => res.status(422).json(err))
    }
}