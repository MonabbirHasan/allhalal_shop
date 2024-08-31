const BlogReactionModel = require("../../models/news_blogs/blog_reaction.model");

class BlogReactionController {
  //===========================
  //ALL REACTION CONTROLLER
  //===========================
  static all_reaction(req, res) {
    try {
      BlogReactionModel.all_reaction_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get blog reaction", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //SINGLE REACTION CONTROLLER
  //===========================
  static single_reaction(req, res) {
    try {
      const { id } = req.params;
      BlogReactionModel.single_reaction_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog reaction", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //CREATE REACTION CONTROLLER
  //===========================
  static create_reaction(req, res) {
    try {
      const data = {
        comment_id: req.body.comment_id,
        user_id: req.body.user_id,
        reaction_type: req.body.reaction_type,
      };
      BlogReactionModel.create_reaction_model(data, (err, result) => {
        if (err) {
          if (err.code == "ER_DUP_ENTRY") {
            return res.status(409).json({ message: "Duplicate Like" });
          }
          return res
            .status(503)
            .json({ message: "failed to create blog reaction", err });
        }
        res
          .status(201)
          .json({ message: "blog reaction success", id: result.insertId });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //UPDATE REACTION CONTROLLER
  //===========================
  static update_reaction(req, res) {
    try {
      const { id } = req.params;
      const data = {
        comment_id: req.body.comment_id,
        user_id: req.body.user_id,
        reaction_type: req.body.reaction_type,
      };
      BlogReactionModel.update_reaction_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blog reaction", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: " blog reaction not found" });
        }
        res.status(200).json({ message: "blog reaction update success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  //===========================
  //DELETE REACTION CONTROLLER
  //===========================
  static delete_reaction(req, res) {
    try {
      const { id } = req.params;
      BlogReactionModel.delete_reaction_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blog reaction", err });
        }
        if (result.affectedRows === 0) {
          return res.status(500).json({ message: " blog reaction not found" });
        }
        res.status(200).json({ message: "blog reaction delete success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = BlogReactionController;
