const express = require("express");
const authentication = require("../../middleware/authentication");
const ProductCartController = require("../../controllers/platform_store/store_product_cart.controller");
const router = express.Router();
router.use(authentication);
router.get("/", ProductCartController.all_product_cart);
router.post("/", ProductCartController.create_product_cart);
router.get("/:id", ProductCartController.single_product_cart);
router.patch("/:id", ProductCartController.update_product_cart);
router.delete("/:id", ProductCartController.delete_product_cart);
module.exports = router;
