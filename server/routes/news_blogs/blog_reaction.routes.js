const express = require("express");
const authentication = require("../../middleware/authentication");
const BlogReactionController = require("../../controllers/news_blogs/blog_reaction.controller");
const router = express.Router();
router.use(authentication);

router.get("/", BlogReactionController.all_reaction);
router.post("/", BlogReactionController.create_reaction);
router.get("/:id", BlogReactionController.single_reaction);
router.patch("/:id", BlogReactionController.update_reaction);
router.delete("/:id", BlogReactionController.delete_reaction);
module.exports = router;
