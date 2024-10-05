const UserCoinModel = require("../../models/earnings/user_coins.model");
const { v4: uuidv4 } = require("uuid");
class UserCoinController {
  /*----------------------
// ALL USER COINS 
-------------------------*/
  static all_user_coin(req, res) {
    try {
      UserCoinModel.all_user_coin_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get user coin", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*----------------------
// SINGLE USER COINS 
-------------------------*/
  static single_user_coin(req, res) {
    try {
      const { id } = req.params;
      UserCoinModel.single_user_coin_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single user coin", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*----------------------
// SINGLE USER COINS 
-------------------------*/
  static user_coin(req, res) {
    try {
      const { id } = req.params;
      UserCoinModel.user_coin_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get user coin", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*----------------------
// CREATE USER COINS 
-------------------------*/
  static create_user_coin(req, res) {
    try {
      const data = {
        user_coin_id: uuidv4(),
        user_coin: req.body.user_coin,
        user_coin_user_id: req.body.user_coin_user_id,
        user_coin_status: req.body.user_coin_status,
      };
      UserCoinModel.create_user_coin_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create user coin", err });
        }
        res
          .status(201)
          .json({ message: "user coin create success", id: data.user_coin_id });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*----------------------
// UPDATE USER COINS 
-------------------------*/
  static update_user_coin(req, res) {
    try {
      const data = {
        user_coin: req.body.user_coin,
        user_coin_user_id: req.body.user_coin_user_id,
        user_coin_status: req.body.user_coin_status,
      };
      const { id } = req.params;
      UserCoinModel.update_user_coin_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update user coin", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "user coin not found" });
        }
        res.status(200).json({ message: "user coin update success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*----------------------
// DELETE USER COINS 
-------------------------*/
  static delete_user_coin(req, res) {
    try {
      const { id } = req.params;
      UserCoinModel.delete_user_coin_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete user coin", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "user coin not found" });
        }
        res.status(200).json({ message: "user coin delete success" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = UserCoinController;
