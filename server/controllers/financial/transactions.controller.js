const TransactionModel = require("../../models/financial/transactions.model");

class TransactionController {
  /*-----------------------------
// ALL TRANSACTIONS
-------------------------------*/
  static all_transactions(req, res) {
    try {
      TransactionModel.all_transaction_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get transaction record", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// SINGLE TRANSACTIONS
-------------------------------*/
  static single_transactions(req, res) {
    try {
      const { id } = req.params;
      TransactionModel.single_transaction_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get sinlge transaction record", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE TRANSACTIONS
-------------------------------*/
  static create_transactions(req, res) {
    try {
      const data = {};
      TransactionModel.create_transaction_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create transaction record", err });
        }
        res.status(201).json({
          message: "transaction create success",
          id: data.transaction_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE TRANSACTIONS
-------------------------------*/
  static update_transactions(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      TransactionModel.update_transaction_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update transaction record", err });
        }
        if (result.affectedRows === 0) {
          return res.status(500).json({ message: "transaction not found" });
        }
        res.status(200).json({
          message: "transaction update success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE TRANSACTIONS
-------------------------------*/
  static delete_transactions(req, res) {
    try {
      const { id } = req.params;
      TransactionModel.delete_transaction_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete transaction record", err });
        }
        if (result.affectedRows === 0) {
          return res.status(500).json({ message: "transaction not found" });
        }
        res.status(200).json({
          message: "transaction delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = TransactionController;
