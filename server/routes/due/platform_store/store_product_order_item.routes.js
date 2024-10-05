const express = require("express");
const authentication = require("../../middleware/authentication");
const StoreProductOrderItemController = require("../../controllers/platform_store/store_product_order_item.controller");
const router = express.Router();
router.use(authentication);
router.get("/", StoreProductOrderItemController.all_store_product_order_item);
router.get(
  "/:id",
  StoreProductOrderItemController.single_store_product_order_item
);
router.post(
  "/",
  StoreProductOrderItemController.create_store_product_order_item
);
router.patch(
  "/:id",
  StoreProductOrderItemController.update_store_product_order_item
);
router.delete(
  "/:id",
  StoreProductOrderItemController.delete_store_product_order_item
);
module.exports = router;
