const StoreProductsModel = require("../../models/platform_store/store_products.model");

class StoreProductsController {
  /*-----------------------------
    // ALL PRODUCTS CONTROLLER
    ---------------------------*/
  static all_store_product(req, res) {
    try {
      StoreProductsModel.all_store_products_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get store products", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
    // SINGLE PRODUCTS CONTROLLER
    ---------------------------*/
  static single_store_product(req, res) {
    try {
      const { id } = req.params;
      StoreProductsModel.single_store_products_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single store products", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
    // CREATE PRODUCTS CONTROLLER
    ---------------------------*/
  static create_store_product(req, res) {
    try {
      const data = {};
      StoreProductsModel.create_store_products_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create store products", err });
        }
        res.status(201).json({
          message: "store product create success",
          id: data.store_product_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
    // UPDATE PRODUCTS CONTROLLER
    ---------------------------*/
  static update_store_product(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      StoreProductsModel.update_store_products_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update store products", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "store products not found" });
          }
          res.status(200).json({
            message: "store product update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
    // DELETE PRODUCTS CONTROLLER
    ---------------------------*/
  static delete_store_product(req, res) {
    try {
      const { id } = req.params;
      StoreProductsModel.update_store_products_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete store products", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "store products not found" });
        }
        res.status(200).json({
          message: "store product delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = StoreProductsController;
