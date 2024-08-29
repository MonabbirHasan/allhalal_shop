const { requirePropFactory } = require("@mui/material");
const BlogsModel = require("../../models/news_blogs/blogs.model");
const { v4: uuidv4 } = require("uuid");
class BlogsController {
  //=========================
  //ALL BLOGS CONTROLLER
  //=========================
  static all_blogs(req, res) {
    try {
      BlogsModel.all_blogs_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get blogs", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //=========================
  //SINGLE BLOGS CONTROLLER
  //=========================
  static single_blogs(req, res) {
    try {
      const { id } = req.params;
      BlogsModel.single_blogs_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blogs", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //=========================
  //CREATE BLOGS CONTROLLER
  //=========================`
  static create_blogs(req, res) {
    try {
      // req.uploadedFileName
      const data = {
        blog_id: uuidv4(),
        blog_title: req.body.blog_title,
        blog_tags: req.body.blog_tags,
        blog_publish:new Date().toISOString(),
        blog_category: req.body.blog_category,
        blog_author: req.body.blog_author,
        blog_thumbnail: req.uploadedFileName,
        blog_description: req.body.blog_description,
        status: req.body.status,
      };

      BlogsModel.create_blogs_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blogs", err });
        }
        res
          .status(201)
          .json({ message: "blogs create success", id: data.blog_id });
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //=========================
  //UPDATE BLOGS CONTROLLER
  //=========================
  static update_blogs(req, res) {
    try {
      const data = {
        blog_title: req.body.blog_title,
        blog_tags: req.body.blog_tags,
        blog_publish:new Date().toISOString(),
        blog_category: req.body.blog_category,
        blog_author: req.body.blog_author,
        blog_description: req.body.blog_description,
        status: req.body.status,
        blog_thumbnail:
          req.body.blog_thumbnail === undefined
            ? req.uploadedFileName
            : req.body.blog_thumbnail,
      };
      const { id } = req.params;
      BlogsModel.update_blogs_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blogs", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blogs not found!" });
        }
        res.status(200).json({ message: "blogs update success" });
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
  //=========================
  //DELETE BLOGS CONTROLLER
  //=========================
  static delete_blogs(req, res) {
    try {
      const { id } = req.params;
      BlogsModel.delete_blogs_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blogs", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "blogs not found!" });
        }
        res.status(200).json({ message: "blogs delete success" });
      });
    } catch (error) {
      return res.status(500).json(err);
    }
  }
}
module.exports = BlogsController;
