const ProductReviewModel = require("../../models/platform_store/store_product_review.model");

class ProductReviewController {
  /*-----------------------------
// ALL PRODUCT REVIEW 
-------------------------------*/
  static all_product_review(req, res) {
    try {
      ProductReviewModel.all_product_review_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product review", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// SINGLE PRODUCT REVIEW 
-------------------------------*/
  static single_product_review(req, res) {
    try {
      const { id } = req.params;
      ProductReviewModel.single_product_review_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single product review", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE PRODUCT REVIEW 
-------------------------------*/
  static create_product_review(req, res) {
    try {
      const data = {};
      ProductReviewModel.create_product_review_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create product review", err });
        }
        res.status(201).json({
          message: "product review create success",
          id: data.product_review_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE PRODUCT REVIEW 
-------------------------------*/
  static update_product_review(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      ProductReviewModel.update_product_review_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product review", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "product review not found" });
          }
          res.status(200).json({
            message: "product review update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE PRODUCT REVIEW 
-------------------------------*/
  static delete_product_review(req, res) {
    try {
      const { id } = req.params;
      ProductReviewModel.delete_product_review_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete product review", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "product review not found" });
        }
        res.status(200).json({
          message: "product review delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = ProductReviewController;
