const router = require("express").Router();
const quotesController = require("../../controllers/quotesController");

router.route("/")
    .post(quotesController.createOne)
    .get(quotesController.findAll)

module.exports = router;