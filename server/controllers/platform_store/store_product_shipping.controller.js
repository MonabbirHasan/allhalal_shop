const ProductShippingModel = require("../../models/platform_store/store_product_shipping.model");

class ProductShippingController {
  /*-----------------------------
// ALL PRODUCT SHIPPING
-------------------------------*/
  static all_product_shipping(req, res) {
    try {
      ProductShippingModel.all_product_shipping_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product shipping", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// SINGLE PRODUCT SHIPPING
-------------------------------*/
  static single_product_shipping(req, res) {
    try {
      const { id } = req.params;
      ProductShippingModel.single_product_shipping_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single product shipping", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE PRODUCT SHIPPING
-------------------------------*/
  static create_product_shipping(req, res) {
    try {
      const data = {};
      ProductShippingModel.create_product_shipping_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create product shipping", err });
          }
          res.status(201).json({
            message: "product shipping create success",
            id: data.product_shipping_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE PRODUCT SHIPPING
-------------------------------*/
  static update_product_shipping(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      ProductShippingModel.update_product_shipping_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product shipping", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product shipping not found" });
          }
          res.status(200).json({
            message: "product shipping update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE PRODUCT SHIPPING
-------------------------------*/
  static delete_product_shipping(req, res) {
    try {
      const { id } = req.params;
      ProductShippingModel.delete_product_shipping_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete product shipping", err });
        }
        if (result.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: "product shipping not found" });
        }
        res.status(200).json({
          message: "product shipping delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = ProductShippingController;
