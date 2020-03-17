const router = require("express").Router();
const adminRoutes = require("./admins");
const requestRoutes = require("./requests");
const quoteRoutes = require("./quotes");

// Book routes

router.use("/admins", adminRoutes);
router.use("/requests", requestRoutes);
router.use("/quotes", quoteRoutes);



module.exports = router;