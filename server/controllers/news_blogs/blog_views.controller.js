const BlogViewMode = require("../../models/news_blogs/blog_views.model");
const { v4: uuidv4 } = require("uuid");
class BlogViewController {
  //===========================
  //ALL BLOGS VIEWS CONTROLLER
  //===========================
  static all_blog_view(req, res) {
    try {
      BlogViewMode.all_blog_view_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get blog view", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //=============================
  //SINGLE BLOGS VIEWS CONTROLLER
  //=============================
  static single_blog_view(req, res) {
    try {
      const { id } = req.params;
      BlogViewMode.single_blog_view_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog view", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //=============================
  //CREATE BLOGS VIEWS CONTROLLER
  //=============================
  static create_blog_view(req, res) {
    try {
      const data = {
        blog_view_id: uuidv4(),
        blog_view_count: req.body.blog_view_count,
        blog_view_post_id: req.body.blog_view_post_id,
        blog_view_user_id: req.body.blog_view_user_id,
        status: req.body.status,
      };
      BlogViewMode.create_blog_view_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blog view", err });
        }
        res
          .status(201)
          .json({ message: "blog view create success", id: data.blog_view_id });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //==============================
  //UPDATE BLOGS VIEWS CONTROLLER
  //==============================
  static update_blog_view(req, res) {
    try {
      const { id } = req.params;
      const data = {
        blog_view_count: req.body.blog_view_count,
        blog_view_post_id: req.body.blog_view_post_id,
        blog_view_user_id: req.body.blog_view_user_id,
        status: req.body.status,
      };
      BlogViewMode.update_blog_view_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blog view", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blog view not found!" });
        }
        res.status(200).json({ message: "blog view update success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //==============================
  //DELETE BLOGS VIEWS CONTROLLER
  //==============================
  static delete_blog_view(req, res) {
    try {
      const { id } = req.params;
      BlogViewMode.delete_blog_view_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blog view", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blog view not found!" });
        }
        res.status(200).json({ message: "blog view delete success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = BlogViewController;
