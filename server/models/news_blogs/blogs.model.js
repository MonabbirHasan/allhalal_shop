const db = require("../../config/config");
const path = require("path");
const fs = require("fs").promises;
class BlogsModel {
  //=========================
  //ALL BLOGS MODEL
  //=========================
  static all_blogs_model(callback) {
    const sql = `
    SELECT 
    b.blog_id,
    b.blog_title,
    b.blog_category,
    b.blog_thumbnail,
    b.blog_description,
    b.blog_tags,
    b.blog_publish,
    b.status,
    bc.blog_category_name,
    u.username,
    u.email,
    u.role
FROM 
    blog_post AS b
JOIN 
    users AS u ON b.blog_author = u.user_id
JOIN 
    blog_category AS bc ON b.blog_category = bc.blog_category_id
    `;
    db.query(sql, callback);
  }
  //=========================
  //SINGLE BLOGS MODEL
  //=========================
  static single_blogs_model(id, callback) {
    const sql = `SELECT 
    b.blog_id,
    b.blog_title,
    b.blog_category,
    b.blog_thumbnail,
    b.blog_description,
    b.blog_tags,
    b.blog_publish,
    b.status,
    u.username,
    u.email,
    u.role
FROM blog_post AS b
JOIN users AS u ON b.blog_author = u.user_id
WHERE b.blog_id  = ?
`;
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  //=========================
  //CREATE BLOGS MODEL
  //=========================
  static create_blogs_model(data, callback) {
    const sql = "INSERT INTO blog_post SET?";
    db.query(sql, data, callback);
  }
  //=========================
  //UPDATE BLOGS MODEL
  //=========================
  static update_blogs_model(data, id, callback) {
    const sql = "UPDATE blog_post SET? WHERE blog_id=?";
    db.query(sql, [data, id], callback);
  }
  //=========================
  //DELETE BLOGS MODEL
  //=========================
  static delete_blogs_model(id, callback) {
    const sql = "SELECT * FROM blog_post WHERE blog_id=?";
    db.query(sql, [id], async (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        try {
          if (results.length === 0) {
            callback(new Error("No record found with the given id"), null);
            return;
          }
          const msg = results[0].blog_thumbnail;
          if (msg) {
            const fullPath = path.join(
              __dirname,
              "..",
              "public",
              "blog_img",
              msg
            );
            await fs.unlink(`./public/blog_img/${msg}`);
          }
          // Delete the record from the database
          const deleteQuery = "DELETE FROM blogs WHERE blog_id=?";
          db.query(deleteQuery, [id], (err) => {
            if (err) {
              callback(err, null);
            } else {
              callback(null, msg);
            }
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
  }
}
module.exports = BlogsModel;
