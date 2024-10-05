const express = require("express");
const authentication = require("../../middleware/authentication");
const SubscriptionController = require("../../controllers/earnings/subscription.controller");
const router = express.Router();
router.use(authentication);

router.get("/", SubscriptionController.all_earn_subscription);
router.post("/", SubscriptionController.create_earn_subscription);
router.get("/:id", SubscriptionController.single_earn_subscription);
router.patch("/:id", SubscriptionController.update_earn_subscription);
router.delete("/:id", SubscriptionController.delete_earn_subscription);
module.exports = router;
