const StoreProductOrderModel = require("../../models/platform_store/store_product_order.model");

class StoreProductOrderController {
  /*-----------------------------------
    // ALL STORE PRODUCT ORDER 
    ----------------------------------*/
  static all_store_product_order(req, res) {
    try {
      StoreProductOrderModel.all_store_product_order_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product orders", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // SINGLE STORE PRODUCT ORDER 
    ----------------------------------*/
  static single_store_product_order(req, res) {
    try {
      const { id } = req.params;
      StoreProductOrderModel.single_store_product_order_model(
        id,
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get single product orders", err });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // CREATE STORE PRODUCT ORDER 
    ----------------------------------*/
  static create_store_product_order(req, res) {
    try {
      const data = {};
      StoreProductOrderModel.create_store_product_order_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create product orders", err });
          }
          res.status(201).json({
            message: "product order create success",
            id: data.product_order_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // UPDATE STORE PRODUCT ORDER 
    ----------------------------------*/
  static update_store_product_order(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      StoreProductOrderModel.update_store_product_order_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product orders", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product orders not found" });
          }

          res.status(200).json({
            message: "product order update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // DELETE STORE PRODUCT ORDER 
    ----------------------------------*/
  static delete_store_product_order(req, res) {
    try {
      const { id } = req.params;
      StoreProductOrderModel.update_store_product_order_model(
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete product orders", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product orders not found" });
          }
          res.status(200).json({
            message: "product order delete success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = StoreProductOrderController;
