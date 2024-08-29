-- BLOG TABLES

CREATE TABLE blog_post (
    blog_id VARCHAR(255) PRIMARY KEY,
    blog_title VARCHAR(255),
    blog_category INT,
    blog_thumbnail VARCHAR(255),
    blog_description LONGTEXT,
    blog_tags VARCHAR(255),
    blog_publish TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    blog_author VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE blog_category (
    blog_category_id INT PRIMARY KEY AUTO_INCREMENT,
    blog_category_name VARCHAR(255),
    blog_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE blog_comments (
    blog_comment_id VARCHAR(255) PRIMARY KEY,
    blog_comment_author VARCHAR(255),
    blog_comment_content TEXT,
    blog_comment_post_id VARCHAR(255),
    blog_comment_is_reply BOOLEAN DEFAULT FALSE,
    blog_comment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE blog_views (
    blog_view_id VARCHAR(255) PRIMARY KEY,
    blog_view_number INT DEFAULT 0,
    blog_view_post_id VARCHAR(255),
    blog_view_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
