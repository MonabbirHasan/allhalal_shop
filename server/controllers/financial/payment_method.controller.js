const PaymentMethodModel = require("../../models/financial/payment_method.model");
class PaymentMethodController {
  /*--------------------------------
// ALL PAYMENT METHOD
----------------------------------*/
  static all_payment_method(req, res) {
    try {
      PaymentMethodModel.all_payment_method_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get payment method", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// SINGLE PAYMENT METHOD
----------------------------------*/
  static single_payment_method(req, res) {
    try {
      const { id } = req.params;
      PaymentMethodModel.single_payment_method_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get sinlge payment method", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// CREATE PAYMENT METHOD
----------------------------------*/
  static create_payment_method(req, res) {
    try {
      const data = {};
      PaymentMethodModel.create_payment_method_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create payment method", err });
        }
        res.status(201).json({
          message: "payment method create success",
          id: data.payment_method_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// UPDATE PAYMENT METHOD
----------------------------------*/
  static update_payment_method(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      PaymentMethodModel.update_payment_method_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update payment method", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "payment method not found", err });
          }
          res.status(200).json({
            message: "payment method update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// DELETE PAYMENT METHOD
----------------------------------*/
  static delete_payment_method(req, res) {
    try {
      const { id } = req.params;
      PaymentMethodModel.delete_payment_method_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete payment method", err });
        }
        if (result.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: "payment method not found", err });
        }
        res.status(200).json({
          message: "payment method delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = PaymentMethodController;
