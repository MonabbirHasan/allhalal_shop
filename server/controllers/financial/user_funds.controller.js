const response = require("../functions/response.function");
const FundModel = require("../models/funds.model");
const { v4: uuidv4 } = require("uuid");
const Notifee = require("../functions/notifee");
class FundController {
  //=====================
  // ALL FUND CONTROLLER
  //=====================
  static all_fund(req, res) {
    try {
      FundModel.all_fund_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get fund", err });
        }
        // req.io.emit("funds", data);
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json({ message: "something wrong", err });
    }
  }
  //========================
  // SINGLE FUND CONTROLLER
  //========================
  static single_fund(req, res) {
    try {
      const { id } = req.params;
      FundModel.single_fund_model(id, (err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get fund", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json({ message: "something wrong", err });
    }
  }
  //========================
  // CREATE FUND CONTROLLER
  //========================
  static create_fund(req, res) {
    try {
      const data = {
        fund_id: uuidv4(),
        fund_balance: req.body.fund_balance,
        user_id: req.body.user_id,
      };
      // Check if funds and advertiser_id are provided
      if (!data.fund_balance || !data.user_id) {
        return res.status(400).json({
          message: "Missing required fields: fund_balance or user_id",
        });
      }
      FundModel.create_fund_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({
            message: "Failed to create user fund",
            err,
          });
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({
            message: "Single user fund not found",
          });
        }
        req.io.emit("funds", data);
        Notifee.send_message(
          "🤑Funds Updated🤑",
          "our system funds wes updated now you can check your funds from Your profile"
        );
        res.status(200).json({
          message: "Single user fund updated successfully",
        });
      });
    } catch (error) {
      return res.status(500).json({ message: "server error", error });
    }
  }
  //==========================
  // SUBSTRACT FUND CONTROLLER
  //==========================
  static substract_fund(req, res) {
    try {
      const data = {
        user_id: req.body.user_id,
        fund_balance: parseFloat(req.body.fund_balance),
        fund_status: 1,
      };
      FundModel.substract_fund_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error in substract_fund_model", err });
        }
        res.status(200).json({ message: "fund substract success" });
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error in substract_fund controller", error });
    }
  }
  //==========================
  // ADDITION FUND CONTROLLER
  //==========================
  static addition_fund(req, res) {
    try {
      const data = {
        user_id: req.body.user_id,
        fund_balance: req.body.fund_balance,
        fund_status: 1,
      };
      FundModel.addition_fund_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to addition funds", err });
        }
        res.status(200, { message: "fund addition success" });
      });
    } catch (error) {
      return res.status(500).json({ message: "something is wrong", error });
    }
  }
  //========================
  // UPDATE FUND CONTROLLER
  //========================
  static update_fund(req, res) {
    try {
      const data = {
        user_id: req.body.user_id,
        fund_balance: req.body.fund_balance,
        fund_status: 1,
      };
      const { id } = req.params;
      FundModel.update_fund_model(id, data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update funds", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "fund not found" });
        }
        // req.io.emit("funds", data);
        res.status(200).json({ message: "fund update success" });
      });
    } catch (error) {
      return res.status(500).json({ message: "server error", error });
    }
  }
  //========================
  // DELETE FUND CONTROLLER
  //========================
  static delete_fund(req, res) {
    try {
      const { id } = req.params;
      FundModel.delete_fund_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete fund", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "fund not found", err });
        }
        res.status(200).json({ message: "fund delete success" });
      });
    } catch (error) {
      return res.status(500).json({ message: "server error", error });
    }
  }
}
module.exports = FundController;
