const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("Finding Addresses by Zip Codes...")
        db.Address
            .find({Zipcode: req.params.data})
            .then(dbAddress => res.json(dbAddress))
            .catch(err => res.status(422).json(err))
    }
};