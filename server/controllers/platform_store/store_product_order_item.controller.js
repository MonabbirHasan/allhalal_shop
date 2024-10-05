const StoreProductOrderItemModel = require("../../models/platform_store/store_product_order_item.model");

class StoreProductOrderItemController {
  /*-----------------------------------
    // ALL STORE ORDER ITEM
    ----------------------------------*/
  static all_store_product_order_item(req, res) {
    try {
      StoreProductOrderItemModel.all_store_product_order_item_model(
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get product order item", err });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // SINGLE STORE ORDER ITEM
    ----------------------------------*/
  static single_store_product_order_item(req, res) {
    try {
      const { id } = req.params;
      StoreProductOrderItemModel.all_store_product_order_item_model(
        id,
        (err, data) => {
          if (err) {
            return res.status(500).json({
              message: "failed to get single product order item",
              err,
            });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // CREATE STORE ORDER ITEM
    ----------------------------------*/
  static create_store_product_order_item(req, res) {
    try {
      const data = {};
      StoreProductOrderItemModel.create_store_product_order_item_model(
        data,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "failed to create product order item",
              err,
            });
          }
          res.status(201).json({
            message: "product order item create success",
            id: data.product_order_item_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
  // UPDATE STORE ORDER ITEM
  ----------------------------------*/
  static update_store_product_order_item(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      StoreProductOrderItemModel.update_store_product_order_item_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "failed to update product order item",
              err,
            });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({
              message: " product order item not found",
              err,
            });
          }
          res.status(200).json({
            message: "product order item update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
  // DELETE STORE ORDER ITEM
  ----------------------------------*/
  static delete_store_product_order_item(req, res) {
    try {
      const { id } = req.params;
      StoreProductOrderItemModel.delete_store_product_order_item_model(
        id,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "failed to delete product order item",
              err,
            });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({
              message: " product order item not found",
              err,
            });
          }
          res.status(200).json({
            message: "product order item delete success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = StoreProductOrderItemController;
