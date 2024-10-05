const ProductFavoritsModel = require("../../models/platform_store/store_favorits.model");

class ProductFavoritsController {
  /*--------------------------------
// ALL PRODUCT FAVORITS
----------------------------------*/
  static all_product_favorit(req, res) {
    try {
      ProductFavoritsModel.all_product_favorits_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product favorits", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// SINGLE PRODUCT FAVORITS
----------------------------------*/
  static single_product_favorit(req, res) {
    try {
      const { id } = req.params;
      ProductFavoritsModel.single_product_favorits_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get sinlge product favorits", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// CREATE PRODUCT FAVORITS
----------------------------------*/
  static create_product_favorit(req, res) {
    try {
      const data = {};
      ProductFavoritsModel.create_product_favorits_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create product favorits", err });
          }
          res.status(201).json({
            message: "product favorit create success",
            id: data.product_favorit_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// UPDATE PRODUCT FAVORITS
----------------------------------*/
  static update_product_favorit(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      ProductFavoritsModel.update_product_favorits_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product favorits", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(500)
              .json({ message: "product favorits not found", err });
          }
          res.status(200).json({
            message: "product favorit update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// DELETE PRODUCT FAVORITS
----------------------------------*/
  static delete_product_favorit(req, res) {
    try {
      const { id } = req.params;
      ProductFavoritsModel.delete_product_favorits_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete product favorits", err });
        }
        if (result.affectedRows === 0) {
          return res
            .status(500)
            .json({ message: "product favorits not found", err });
        }
        res.status(200).json({
          message: "product favorit delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = ProductFavoritsController;
