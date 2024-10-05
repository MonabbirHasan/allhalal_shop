require("./config/config");
const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

//=========================
// APPLICATION ROUTE PATH
//=========================
// const ProductVoucherRouter = require("./routes/platform_store/store_product_voucher.routes");
// const StoreProductCartRouter = require("./routes/platform_store/store_product_cart.routes");
// const ProductReviewRouter = require("./routes/platform_store/store_product_review.routes");
// const StoreProductFavoritRouter = require("./routes/platform_store/store.favorits.routes");
// const StorePDIRouter = require("./routes/platform_store/store_product_order_item.routes");
// const StorePOrderRouter = require("./routes/platform_store/store_product_order.routes");
// const ShippingRouter = require("./routes/platform_store/store_product_shipping.routes");
// const StorePDRouter = require("./routes/platform_store/store_product_details.routes");
// const PlatformStoreRouter = require("./routes/platform_store/platform_store.routes");
// const StoreCategoryRouter = require("./routes/platform_store/store_category.routes");
// const StoreProductRouter = require("./routes/platform_store/store_products.routes");
// BLOG API REQUIRE HERE
const BlogCategoryRouter = require("./routes/news_blogs/blog_category.routes");
const BlogReactionRouter = require("./routes/news_blogs/blog_reaction.routes");
const BlogCommentRouter = require("./routes/news_blogs/blog_comment.routes");
const BlogViewRouter = require("./routes/news_blogs/blog_views.routes");
const BlogsRouter = require("./routes/news_blogs/blogs.routes");
// FINANCIAL API FILE REQUIRE HERE
const FinancialRouter = require("./routes/financial/coin_exhange_rate.routes");
 // EARNING API FILE REQUIRE HERE
const EarnUserTaskRouter = require("./routes/earnings/user_task_completion.routes");
const EarnSpinWheelRouter = require("./routes/earnings/earn_spin_wheel.routes");
const EarnUserSubRouter = require("./routes/earnings/user_subscription.routes");
const EarnDailyTaskRouter = require("./routes/earnings/earning_task.routes");
const EarnSubRouter = require("./routes/earnings/subscription.routes");
const UserCoinRouter = require("./routes/earnings/user_coins.routes");
// OTHER API FILE RQUIRE HERE
// const EarningTaskRouter = require("./routes/earnings/earning_task.routes");
// const PaymentMethodRouter = require("./routes/payment_method.routes");
// const UserCoinRouter = require("./routes/earnings/user_coins.routes");
// const TransactionRouter = require("./routes/transactions.routes");
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
// STORE PRODUCT ROUTE START
// app.use("/api/store/favorit", StoreProductFavoritRouter);
// app.use("/api/platform/stores", PlatformStoreRouter);
// app.use("/api/store/product_details", StorePDRouter);
// app.use("/api/store/voucher", ProductVoucherRouter);
// app.use("/api/store/category", StoreCategoryRouter);
// app.use("/api/store/products", StoreProductRouter);
// app.use("/api/store/reviews", ProductReviewRouter);
// app.use("/api/store/cart", StoreProductCartRouter);
// app.use("/api/store/order_item", StorePDIRouter);
// app.use("/api/store/orders", StorePOrderRouter);
// app.use("/api/store/shipping", ShippingRouter);
// STORE PRODUCT ROUTE END
// EARNING ROUTE START
app.use("/api/earning/user_task_completion", EarnUserTaskRouter);
app.use("/api/earning/user_subscription", EarnUserSubRouter);
app.use("/api/earning/daily_tasks", EarnDailyTaskRouter);
app.use("/api/earning/spin_wheel", EarnSpinWheelRouter);
app.use("/api/earning/subscription", EarnSubRouter);
app.use("/api/earning/user_coin", UserCoinRouter);
// OTHER ROUTE START
// app.use("/api/payment/transaction", TransactionRouter);
// app.use("/api/payment/methods", PaymentMethodRouter);
app.use("/api/blog/reaction", BlogReactionRouter);
app.use("/api/blog/category", BlogCategoryRouter);
app.use("/api/blog/comments", BlogCommentRouter);
app.use("/api/platform/users", UsersRouter);
app.use("/api/blog/views", BlogViewRouter);
app.use("/api/blog/blogs", BlogsRouter);
// FINANCIAL API FILE REQUIRE HERE
app.use("/api/financial/coin_exchange", FinancialRouter);
//=========================
// SERVER RUNNING ON PORT
//=========================
app.listen(process.env.PORT || 3000, (err) => {
  console.log(`server running at port http://localhost:3000`);
});
