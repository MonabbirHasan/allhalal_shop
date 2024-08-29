const BlogCategoryModel = require("../../models/news_blogs/blog_category.model");

class BlogCategoryController {
  //===========================
  //ALL CATEGORY CONTROLLER
  //===========================
  static all_category(req, res) {
    try {
      BlogCategoryModel.all_category_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all blog category", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //SINGLE CATEGORY CONTROLLER
  //===========================
  static single_category(req, res) {
    try {
      const { id } = req.params;
      BlogCategoryModel.single_category_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog category", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //CREATE CATEGORY CONTROLLER
  //===========================
  static create_category(req, res) {
    try {
      const data = req.body;
      BlogCategoryModel.create_category_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blog category", err });
        }
        res.status(201).json({
          message: "blog category create success",
          id: result.insertId,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //UPDATE CATEGORY CONTROLLER
  //===========================
  static update_category(req, res) {
    try {
      const data = req.body;
      const { id } = req.params;
      BlogCategoryModel.update_category_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blog category", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blog category not found" });
        }
        res.status(200).json({ message: "blog category update success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //DELETE CATEGORY CONTROLLER
  //===========================
  static delete_category(req, res) {
    try {
      const { id } = req.params;
      BlogCategoryModel.delete_category_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blog category", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blog category not found" });
        }
        res.status(200).json({ message: "blog category delete success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = BlogCategoryController;
