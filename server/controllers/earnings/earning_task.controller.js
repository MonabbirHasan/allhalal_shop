const EarningTaskModel = require("../../models/earnings/earning_task.model");
const { v4: uuidv4 } = require("uuid");
class EarningTaskController {
  /*-----------------------------
// ALL EARNING TASK
-------------------------------*/
  static all_earning_task(req, res) {
    try {
      EarningTaskModel.all_earning_task_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get earning task", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// SINGLE EARNING TASK
-------------------------------*/
  static single_earning_task(req, res) {
    try {
      const { id } = req.params;
      EarningTaskModel.single_earning_task_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single earning task", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE EARNING TASK
-------------------------------*/
  static create_earning_task(req, res) {
    try {
      const data = {
        earn_task_id: uuidv4(),
        earn_task_type: req.body.earn_task_type,
        earn_task_description: req.body.earn_task_description,
        earn_task_reward_coins: req.body.earn_task_reward_coins,
        earn_task_status: req.body.earn_task_status,
      };
      EarningTaskModel.create_earning_task_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create earning task", err });
        }
        res.status(201).json({
          message: "earning task create success",
          id: data.earn_task_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE EARNING TASK
-------------------------------*/
  static update_earning_task(req, res) {
    try {
      const data = {
        earn_task_type: req.body.earn_task_type,
        earn_task_description: req.body.earn_task_description,
        earn_task_reward_coins: req.body.earn_task_reward_coins,
        earn_task_status: req.body.earn_task_status,
      };
      const { id } = req.params;
      EarningTaskModel.update_earning_task_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update earning task", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "earning task not found" });
        }
        res.status(200).json({
          message: "earning task update success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE EARNING TASK
-------------------------------*/
  static delete_earning_task(req, res) {
    try {
      const { id } = req.params;
      EarningTaskModel.delete_earning_task_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update earning task", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "earning task not found" });
        }
        res.status(200).json({
          message: "earning task update success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = EarningTaskController;
