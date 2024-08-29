require("./config/config");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//=========================
// APPLICATION ROUTE PATH
//=========================
const BlogCategoryRouter = require("./routes/news_blogs/blog_category.routes");
const BlogCommentRouter = require("./routes/news_blogs/blog_comment.routes");
const BlogViewRouter = require("./routes/news_blogs/blog_views.routes");
const BlogsRouter = require("./routes/news_blogs/blogs.routes");
const UsersRouter = require("./routes/users/users.routes");
//=========================
// SETUP MIDDLEWARE
//=========================
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
//=========================
// APPLICATION ROOT ROUTE
//=========================
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
//=========================
// ERROR MIDDLEWARE
//=========================
//============================
// ALL APPLICATION ROUTE HERE
//============================
app.use("/api/blog/category", BlogCategoryRouter);
app.use("/api/blog/comments", BlogCommentRouter);
app.use("/api/platform/users", UsersRouter);
app.use("/api/blog/views", BlogViewRouter);
app.use("/api/blog/blogs", BlogsRouter);
//=========================
// SERVER RUNNING ON PORT
//=========================
app.listen(process.env.PORT || 3000, (err) => {
  console.log(`server running at port http://localhost:3000`);
});
