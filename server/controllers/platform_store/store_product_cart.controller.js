const ProductCartModel = require("../../models/platform_store/store_product_cart.model");

class ProductCartController {
  /*--------------------------------
// ALL PRODUCT CART
----------------------------------*/
  static all_product_cart(req, res) {
    try {
      ProductCartModel.all_product_cart_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get product cart", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// SINGLE PRODUCT CART
----------------------------------*/
  static single_product_cart(req, res) {
    try {
      const { id } = req.params;
      ProductCartModel.single_product_cart_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get sinlge product cart", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// CREATE PRODUCT CART
----------------------------------*/
  static create_product_cart(req, res) {
    try {
      const data = {};
      ProductCartModel.create_product_cart_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create product cart", err });
        }
        res.status(201).json({
          message: "product cart create success",
          id: data.product_favorit_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// UPDATE PRODUCT CART
----------------------------------*/
  static update_product_cart(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      ProductCartModel.update_product_cart_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update product cart", err });
        }
        if (result.affectedRows === 0) {
          return res
            .status(500)
            .json({ message: "product cart not found", err });
        }
        res.status(200).json({
          message: "product cart update success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*--------------------------------
// DELETE PRODUCT CART
----------------------------------*/
  static delete_product_cart(req, res) {
    try {
      const { id } = req.params;
      ProductCartModel.delete_product_cart_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete product cart", err });
        }
        if (result.affectedRows === 0) {
          return res
            .status(500)
            .json({ message: "product cart not found", err });
        }
        res.status(200).json({
          message: "product cart delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = ProductCartController;
