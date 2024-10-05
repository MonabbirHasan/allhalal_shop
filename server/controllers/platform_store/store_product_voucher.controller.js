const ProductVoucherModel = require("../../models/platform_store/store_product_voucher.model");
class ProductVoucherController {
  /*-----------------------------
// ALL PRODUCT VOUCHER 
-------------------------------*/
  static all_product_voucher(req, res) {
    try {
      ProductVoucherModel.all_product_voucher_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product voucher", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// SINGLE PRODUCT VOUCHER 
-------------------------------*/
  static single_product_voucher(req, res) {
    try {
      const { id } = req.params;
      ProductVoucherModel.single_product_voucher_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single product voucher", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE PRODUCT VOUCHER 
-------------------------------*/
  static create_product_voucher(req, res) {
    try {
      const data = {};
      ProductVoucherModel.create_product_voucher_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create product voucher", err });
        }
        res.status(201).json({
          message: "product voucher create success",
          id: data.product_voucher_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE PRODUCT VOUCHER 
-------------------------------*/
  static update_product_voucher(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      ProductVoucherModel.update_product_voucher_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product voucher", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product voucher not found" });
          }
          res.status(200).json({
            message: "product voucher update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE PRODUCT VOUCHER 
-------------------------------*/
  static delete_product_voucher(req, res) {
    try {
      const { id } = req.params;
      ProductVoucherModel.delete_product_voucher_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete product voucher", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "product voucher not found" });
        }
        res.status(200).json({
          message: "product voucher delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = ProductVoucherController;
