const StoreProductDetailsModel = require("../../models/platform_store/store_product_details.model");
class StoreProductDetailsController {
  /*-----------------------------------
    // ALL STORE PRODUCT DETAILS
    ----------------------------------*/
  static all_store_product_details(req, res) {
    try {
      StoreProductDetailsModel.all_store_product_details_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product details", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // SINGLE STORE PRODUCT DETAILS
    ----------------------------------*/
  static single_store_product_details(req, res) {
    try {
      const { id } = req.params;
      StoreProductDetailsModel.single_store_product_details_model(
        id,
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get single product details", err });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // CREATE STORE PRODUCT DETAILS
    ----------------------------------*/
  static create_store_product_details(req, res) {
    try {
      const data = {};
      StoreProductDetailsModel.create_store_product_details_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create product details", err });
          }
          res.status(201).json({
            message: "product details create success",
            id: data.product_details_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // UPDATE STORE PRODUCT DETAILS
    ----------------------------------*/
  static update_store_product_details(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      StoreProductDetailsModel.update_store_product_details_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product details", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product details not found" });
          }
          res.status(200).json({
            message: "product details update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------------
    // DELETE STORE PRODUCT DETAILS
    ----------------------------------*/
  static delete_store_product_details(req, res) {
    try {
      const { id } = req.params;
      StoreProductDetailsModel.delete_store_product_details_model(
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete product details", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product details not found" });
          }
          res.status(200).json({
            message: "product details delete success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = StoreProductDetailsController;
