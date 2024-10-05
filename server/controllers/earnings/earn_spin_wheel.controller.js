const EarnSpinWheelModel = require("../../models/earnings/earn_spin_wheel.model");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
class EarnSpinWheelController {
  /*-----------------------------
// ALL EARNING SPIN WHEEL
-------------------------------*/
  static all_earn_spin_wheel(req, res) {
    try {
      EarnSpinWheelModel.all_earn_spin_wheel_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get spin wheel", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// USER SPIN SPIN WHEEL
-------------------------------*/
  static user_earn_spin_wheel(req, res) {
    // Get today's date
    const today = moment().format("YYYY-MM-DD");
    const data = {
      earn_sw_id: uuidv4(),
      earn_sw_user_id: req.body.earn_sw_user_id,
      earn_sw_result: req.body.earn_sw_result,
      earn_sw_status: req.body.earn_sw_status,
    };
    EarnSpinWheelModel.user_earn_spin_wheel_model(
      today,
      data,
      (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Internal server error", error: err });
        }

        if (result.message) {
          // If the user has reached the limit, return the message
          return res.status(400).json(result);
        }

        // Send success response with spin result and spins left
        return res.json(result);
      }
    );
  }
  /*-----------------------------
// SINGLE EARNING SPIN WHEEL
-------------------------------*/
  static single_earn_spin_wheel(req, res) {
    try {
      const { id } = req.params;
      EarnSpinWheelModel.single_earn_spin_wheel_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single spin wheel", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE EARNING SPIN WHEEL
-------------------------------*/
  static create_earn_spin_wheel(req, res) {
    try {
      const data = {
        earn_sw_id: uuidv4(),
        earn_sw_user_id: req.body.earn_sw_user_id,
        earn_sw_result: req.body.earn_sw_result,
        earn_sw_status: req.body.earn_sw_status,
      };
      EarnSpinWheelModel.create_earn_spin_wheel_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create spin wheel", err });
        }
        res
          .status(201)
          .json({ message: "spin wheel create success", id: data.earn_sw_id });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE EARNING SPIN WHEEL
-------------------------------*/
  static update_earn_spin_wheel(id, req, res) {
    try {
      const data = {
        earn_sw_user_id: req.body.earn_sw_user_id,
        earn_sw_result: req.body.earn_sw_result,
        earn_sw_status: req.body.earn_sw_status,
      };
      const { id } = req.params;
      EarnSpinWheelModel.update_earn_spin_wheel_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update spin wheel", err });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "spin wheel not found" });
          }
          res.status(200).json({ message: "spin wheel update success" });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE EARNING SPIN WHEEL
-------------------------------*/
  static delete_earn_spin_wheel(req, res) {
    try {
      const { id } = req.params;
      EarnSpinWheelModel.update_earn_spin_wheel_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update spin wheel", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "spin wheel not found" });
        }
        res.status(200).json({ message: "spin wheel update success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = EarnSpinWheelController;
