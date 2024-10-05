const express = require("express");
const authentication = require("../middleware/authentication");
const FundController = require("../controller/funds.controller");
const router = express.Router();
router.use(authentication);
router.get("/", FundController.all_fund);
router.get("/:id", FundController.single_fund);
router.post("/", FundController.create_fund);
router.patch("/:id", FundController.update_fund);
router.delete("/:id", FundController.delete_fund);
router.post("/addition", FundController.addition_fund);
router.post("/substract", FundController.substract_fund);
module.exports = router;
