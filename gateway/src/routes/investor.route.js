const express = require("express");
const router = express.Router();

const investorController = require("../controller/investor.controller");

// get all investors
router.get("/", investorController.getAll);

module.exports = router;