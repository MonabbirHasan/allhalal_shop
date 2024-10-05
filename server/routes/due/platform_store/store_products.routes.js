const express = require("express");
const authentication = require("../../middleware/authentication");
const StoreProductsController = require("../../controllers/platform_store/store_products.controller");
const router = express.Router();
router.use(authentication);
router.get("/", StoreProductsController.all_store_product);
router.post("/", StoreProductsController.create_store_product);
router.get("/:id", StoreProductsController.single_store_product);
router.patch("/:id", StoreProductsController.update_store_product);
router.delete("/:id", StoreProductsController.delete_store_product);
module.exports = router;
