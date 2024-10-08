const express = require("express");
const authentication = require("../../middleware/authentication");
const BlogViewController = require("../../controllers/news_blogs/blog_views.controller");
const router = express.Router();
router.use(authentication);
router.get("/", BlogViewController.all_blog_view);
router.post("/", BlogViewController.create_blog_view);
router.get("/:id", BlogViewController.single_blog_view);
router.patch("/:id", BlogViewController.update_blog_view);
router.delete("/:id", BlogViewController.delete_blog_view);
module.exports = router;
