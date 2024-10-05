const db = require("../../config/config");
class ProductFavoritsModel {
  /*--------------------------------
// ALL PRODUCT FAVORITS MODEL
----------------------------------*/
  static all_product_favorits_model(callback) {
    const sql = "SELECT * FROM product_favorits";
    db.quary(sql, callback);
  }
  /*--------------------------------
// SINGLE PRODUCT FAVORITS MODEL
----------------------------------*/
  static single_product_favorits_model(id, callback) {
    const sql = "SELECT * FROM product_favorits WHERE product_favorit_id=?";
    db.quary(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*--------------------------------
// CREATE PRODUCT FAVORITS MODEL
----------------------------------*/
  static create_product_favorits_model(data, callback) {
    const sql = "INSERT INTO product_favorits SET?";
    db.quary(sql, data, callback);
  }
  /*--------------------------------
// UDPATE PRODUCT FAVORITS MODEL
----------------------------------*/
  static update_product_favorits_model(data, id, callback) {
    const sql = "UPDATE product_favorits SET? WHERE product_favorit_id=?";
    db.quary(sql, [data, id], callback);
  }
  /*--------------------------------
// DELETE PRODUCT FAVORITS MODEL
----------------------------------*/
  static delete_product_favorits_model(id, callback) {
    const sql = "DELETE FROM product_favorits WHERE product_favorit_id=?";
    db.quary(sql, [id], callback);
  }
}
module.exports = ProductFavoritsModel;
