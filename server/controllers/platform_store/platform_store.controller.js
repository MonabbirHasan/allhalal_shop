const { v4: uuidv4 } = require("uuid");
const PlatformStoreModel = require("../../models/platform_store/platform_store.model");
class PlatformStoreController {
  /*-----------------------
    // ALL PLATFORM STORE
    ----------------------*/
  static all_platform_store(req, res) {
    try {
      PlatformStoreModel.all_platform_store_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get platform_store", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------
    // SINGLE PLATFORM STORE
    ----------------------*/
  static single_platform_store(req, res) {
    try {
      const { id } = req.params;
      PlatformStoreModel.single_platform_store_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single platform_store", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------
    // CREATE PLATFORM STORE
    ----------------------*/
  static create_platform_store(req, res) {
    try {
      const data = {};
      PlatformStoreModel.create_platform_store_model(data, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create platform_store", err });
        }
        res.status(201).json({
          message: "platform store create success",
          id: data.platform_store_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------
    // UPDATE PLATFORM STORE
    ----------------------*/
  static update_platform_store(req, res) {
    try {
      const data = {};
      const { id } = req.params;
      PlatformStoreModel.update_platform_store_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update platform_store", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "platform_store not found" });
          }
          res.status(200).json({
            message: "platform store update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*------------------------
    // DELETE PLATFORM STORE
    ----------------------*/
  static delete_platform_store(req, res) {
    try {
      const { id } = req.params;
      PlatformStoreModel.delete_platform_store_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete platform_store", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "platform_store not found" });
        }
        res.status(200).json({
          message: "platform store delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = PlatformStoreController;
