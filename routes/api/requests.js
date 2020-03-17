const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

//Matches with "/api/books"
router.route("/")
    .post(requestsController.createOne)
    .get(requestsController.findAll)


module.exports = router;