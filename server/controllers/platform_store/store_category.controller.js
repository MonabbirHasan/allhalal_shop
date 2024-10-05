const StoreCategoryModel = require("../../models/platform_store/store_category.model");

class StoreCategoryController {
  /*---------------------------
    // ALL STORE CATEGORY
    ---------------------------*/
  static all_store_category(req, res) {
    try {
      StoreCategoryModel.all_store_category_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get store category", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------
    // SINGLE STORE CATEGORY
    ---------------------------*/
  static single_store_category(req, res) {
    try {
      const { id } = req.params;
      StoreCategoryModel.single_store_category_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single store category", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------
    // CREATE STORE CATEGORY
    ---------------------------*/
  static create_store_category(req, res) {
    try {
      const data = {};
      StoreCategoryModel.create_store_category_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create store category", err });
        }
        res.status(201).json({
          message: "store category create success",
          id: data.store_category_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------
    // UPDATE STORE CATEGORY
    ---------------------------*/
  static update_store_category(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      StoreCategoryModel.update_store_category_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update store category", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "store category not found", err });
          }
          res.status(201).json({
            message: "store category update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------
  // DELETE STORE CATEGORY
  ---------------------------*/
  static delete_store_category(req, res) {
    try {
      const { id } = req.params;
      StoreCategoryModel.delete_store_category_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete store category", err });
        }
        if (result.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: "store category not found", err });
        }
        res.status(200).json({
          message: "store category delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = StoreCategoryController;
