const CoinExchangeRateModel = require("../../models/financial/coin_exhange_rate.model");
const { v4: uuidv4 } = require("uuid");
class CoinExchangeRateController {
  /*---------------------------------
// ALL COIN EXHANGE RATE WHEEL
------------------------------------*/
  static all_coin_exhange_rate(req, res) {
    try {
      CoinExchangeRateModel.all_coin_exhange_rate_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get coin exchange reate", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------------
// SINGLE COIN EXHANGE RATE WHEEL
------------------------------------*/
  static single_coin_exhange_rate(req, res) {
    try {
      const { id } = req.params;
      CoinExchangeRateModel.single_coin_exhange_rate_model(id, (er, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single coin exchange reate", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------------
// CREATE COIN EXHANGE RATE WHEEL
------------------------------------*/
  static create_coin_exhange_rate(req, res) {
    try {
      const data = {
        coin_exhange_id: uuidv4(),
        coin_exhange_user_id: req.body.coin_exhange_user_id,
        coin_exhange_rate: req.body.coin_exhange_rate,
        coin_exhange_status: req.body.coin_exhange_status,
      };
      CoinExchangeRateModel.create_coin_exhange_rate_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create coin exchange reate", err });
          }
          res.status(201).json({
            message: "coin exchange rate create success",
            id: data.coin_exhange_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------------
// UPDATE COIN EXHANGE RATE WHEEL
------------------------------------*/
  static update_coin_exhange_rate(req, res) {
    try {
      const data = {
        coin_exhange_id: uuidv4(),
        coin_exhange_user_id: req.body.coin_exhange_user_id,
        coin_exhange_rate: req.body.coin_exhange_rate,
        coin_exhange_status: req.body.coin_exhange_status,
      };
      const { id } = req.params;
      CoinExchangeRateModel.create_coin_exhange_rate_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update coin exchange reate", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "coin exchange reate not found" });
          }
          res.status(200).json({
            message: "coin exchange rate update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*---------------------------------
// DELETE COIN EXHANGE RATE WHEEL
------------------------------------*/
  static delete_coin_exhange_rate(req, res) {
    try {
      const { id } = req.params;
      CoinExchangeRateModel.delete_coin_exhange_rate_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete coin exchange reate", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "coin exchange reate not found" });
          }
          res.status(200).json({
            message: "coin exchange rate delete success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = CoinExchangeRateController;
