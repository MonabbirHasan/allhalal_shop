let uploadedFileName;
const express = require("express");
const authentication = require("../../middleware/authentication");
const BlogsController = require("../../controllers/news_blogs/blogs.controller");
const multer = require("multer");
const path = require("path");
const router = express.Router();
router.use(authentication);
// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const fullPath = path.join(
      __dirname,
      "..",
      "public",
      "blog_img"
    );
    cb(null, "./public/blog_img/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Math.round(Math.random() * 27082024);
    uploadedFileName = "_" + uniqueName + path.extname(file.originalname);
    cb(null, uploadedFileName);
    // console.log(file);
  },
});
// Create a multer instance with the storage configuration
const upload = multer({
  storage: storage,
  limits: { fieldSize: 200 * 1024 * 1024 },
});
router.get("/", BlogsController.all_blogs);
router.post(
  "/",
  upload.single("blog_thumbnail"),
  (req, res, next) => {
    req.uploadedFileName = uploadedFileName;
    next();
  },
  BlogsController.create_blogs
);
router.get("/:id", BlogsController.single_blogs);
router.patch(
  "/:id",
  upload.single("blog_thumbnail"),
  (req, res, next) => {
    req.uploadedFileName = uploadedFileName;
    next();
  },
  BlogsController.update_blogs
);
router.delete("/:id", BlogsController.delete_blogs);
module.exports = router;
