const express = require("express");
const authentication = require("../../middleware/authentication");
const UserTaskCompletionController = require("../../controllers/earnings/user_task_completion.controller");
const router = express.Router();
router.use(authentication);
router.get("/", UserTaskCompletionController.all_user_task_completion);
router.post("/", UserTaskCompletionController.create_user_task_completion);
router.get("/:id", UserTaskCompletionController.single_user_task_completion);
router.patch("/:id", UserTaskCompletionController.update_user_task_completion);
router.delete("/:id", UserTaskCompletionController.delete_user_task_completion);
module.exports = router;
