const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users/users.model");
class UserController {
  /**************************
   * GET USER CONTROLLER
   **************************/
  static all_users(req, res) {
    try {
      UserModel.all_user_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get user", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  }
  /**************************
   * SINGLE USER CONTROLLER
   **************************/
  static single_users(req, res) {
    try {
      const { id } = req.params;
      UserModel.single_user_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to single user", err });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  }
  /**************************
   * RAGISTER USER CONTROLLER
   **************************/
  static ragister_user(req, res) {
    try {
      const data = {
        user_id: uuid(),
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        role: req.body.role,
        is_online: req.body.is_online,
        is_active: req.body.is_active,
      };
      UserModel.FindByEmail(req.body.email, (user_data) => {
        if (user_data) {
          return res.status(409).json({ message: "user is already exists" });
        }
        UserModel.create_user_model(data, (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create user", err });
          }
          res
            .status(201)
            .json({ message: "user create success", id: data.user_id });
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
  /**************************
   * LOGIN USER CONTROLLER
   **************************/
  static login_user(req, res) {
    const data = req.body;
    UserModel.FindByEmailPass(data, (user) => {
      if (
        !user ||
        user.email !== data.email ||
        user.password !== data.password
      ) {
        return res
          .status(409)
          .json({ message: "Unauthorized - Email or Password is incorrect" });
      }
      // If credentials are valid, generate a token
      const payload = {
        user_id: user.user_id,
        email: user.email,
        name: user.username,
        role: user.role,
      };
      const token = jwt.sign(
        { user: payload },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }
      );

      // Set the token in an HTTP-only cookie
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ token });
    });
  }
  /******************************
   *LOGOUT USERS FROM MODEL
   *****************************/
  static user_logout(req, res) {
    // Clear the token by expiring it
    res.cookie("token", "", { expires: new Date(0), httpOnly: true });
    res.status(200).json({ message: "Logout successful" });
  }
  /**************************
   * UPDATE USER CONTROLLER
   **************************/
  static update_users(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      UserModel.update_user_model(data, id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update user", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "user not found!" });
        }
        res.status(200).json({ message: "user update success" });
      });
    } catch (error) {
      console.error(error);
    }
  }
  /**************************
   * DELETE USER CONTROLLER
   **************************/
  static delete_users(req, res) {
    try {
      const { id } = req.params;
      UserModel.delete_user_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete user", err });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "user not found!" });
        }
        res.status(200).json({ message: "user delete success" });
      });
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = UserController;
