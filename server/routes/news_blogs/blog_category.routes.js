const express = require("express");
const authentication = require("../../middleware/authentication");
const BlogCategoryController = require("../../controllers/news_blogs/blog_category.controller");
const router = express.Router();
router.use(authentication);

router.get("/", BlogCategoryController.all_category);
router.get("/:id", BlogCategoryController.single_category);
router.post("/", BlogCategoryController.create_category);
router.patch("/:id", BlogCategoryController.update_category);
router.delete("/:id", BlogCategoryController.delete_category);
module.exports = router;
