const BlogCommentModel = require("../../models/news_blogs/blog_comment.model");
const { v4: uuidv4 } = require("uuid");
class BlogCommentController {
  //============================
  //ALL BLOGS COMMENT CONTROLLER
  //============================
  static all_blog_comment(req, res) {
    try {
      BlogCommentModel.all_blog_comment_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get blog comment", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //============================
  //ALL BLOGS COMMENT CONTROLLER
  //============================
  static single_blog_comment(req, res) {
    try {
      const { id } = req.params;
      BlogCommentModel.single_blog_comment_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog comment", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //==============================
  //FIND BLOGS COMMENT CONTROLLER
  //==============================
  static find_blog_comment(req, res) {
    try {
      const { id } = req.params;
      BlogCommentModel.find_blog_comment_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get find blog comment", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //============================
  //ALL BLOGS COMMENT CONTROLLER
  //============================
  static create_blog_comment(req, res) {
    try {
      const data = {
        blog_comment_author: req.body.blog_comment_author,
        blog_comment_content: req.body.blog_comment_content,
        blog_comment_post_id: req.body.blog_comment_post_id,
        blog_comment_is_reply: req.body.blog_comment_is_reply,
        blog_comment_date: new Date().toISOString(),
        status: req.body.status,
      };
      BlogCommentModel.create_blog_comment_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blog comment", err });
        }
        res.status(201).json({
          message: "blog comment create success",
          id: result.insertId,
        });
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //============================
  //ALL BLOGS COMMENT CONTROLLER
  //============================
  static update_blog_comment(req, res) {
    try {
      const { id } = req.params;
      const data = {
        blog_comment_author: req.body.blog_comment_author,
        blog_comment_content: req.body.blog_comment_content,
        blog_comment_post_id: req.body.blog_comment_post_id,
        blog_comment_is_reply: req.body.blog_comment_is_reply,
        blog_comment_date: new Date().toISOString(),
        status: req.body.status,
      };
      BlogCommentModel.update_blog_comment_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blog comment", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blog comment not found" });
        }
        res.status(200).json({ message: "blog comment update success" });
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //============================
  //ALL BLOGS COMMENT CONTROLLER
  //============================
  static delete_blog_comment(req, res) {
    try {
      const { id } = req.params;

      BlogCommentModel.delete_blog_comment_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blog comment", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blog comment not found" });
        }
        res.status(200).json({ message: "blog comment delete success" });
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
}
module.exports = BlogCommentController;
