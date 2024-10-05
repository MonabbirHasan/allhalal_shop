const { v4: uuidv4 } = require("uuid");
const UserTaskCompletionModel = require("../../models/earnings/user_task_completion.model");
class UserTaskCompletionController {
  /*------------------------------
// ALL USER TASK COMPLETION  
----------------------------------*/
  static all_user_task_completion(req, res) {
    try {
      UserTaskCompletionModel.all_user_task_completion_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get user task completion", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------------
// SINGLE USER TASK COMPLETION  
----------------------------------*/
  static single_user_task_completion(req, res) {
    try {
      const { id } = req.params;
      UserTaskCompletionModel.single_user_task_completion_model(
        id,
        (err, data) => {
          if (err) {
            return res.status(500).json({
              message: "failed to get single user task completion",
              err,
            });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------------
// CREATE USER TASK COMPLETION  
----------------------------------*/
  static create_user_task_completion(req, res) {
    try {
      const data = {
        earn_utc_id: uuidv4(),
        earn_utc_user_id: req.body.earn_utc_user_id,
        earn_utc_task_id: req.body.earn_utc_task_id,
        earn_utc_reward_coins: req.body.earn_utc_reward_coins,
        earn_utc_task_status: req.body.earn_utc_task_status,
      };
      UserTaskCompletionModel.create_user_task_completion_model(
        data,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "failed to create user task completion",
              err,
            });
          }
          res.status(200).json({
            message: "user task completion create success",
            id: data.earn_utc_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------------
  // UPDATE USER TASK COMPLETION  
  ----------------------------------*/
  static update_user_task_completion(req, res) {
    try {
      const data = {
        earn_utc_user_id: req.body.earn_utc_user_id,
        earn_utc_task_id: req.body.earn_utc_task_id,
        earn_utc_reward_coins: req.body.earn_utc_reward_coins,
        earn_utc_task_status: req.body.earn_utc_task_status,
      };
      const { id } = req.params;
      UserTaskCompletionModel.update_user_task_completion_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "failed to update user task completion",
              err,
            });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({
              message: "failed to update user task completion",
            });
          }
          res.status(200).json({
            message: "user task completion update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------------
  // DELETE USER TASK COMPLETION  
  ----------------------------------*/
  static delete_user_task_completion(req, res) {
    try {
      const { id } = req.params;
      UserTaskCompletionModel.delete_user_task_completion_model(
        id,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "failed to delete user task completion",
              err,
            });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({
              message: "failed to delete user task completion",
            });
          }
          res.status(200).json({
            message: "user task completion delete success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = UserTaskCompletionController;
