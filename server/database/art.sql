-- ART TABLES

CREATE TABLE art_category (
    art_category_id INT PRIMARY KEY AUTO_INCREMENT,
    art_category_name VARCHAR(255),
    art_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_product (
    art_product_id VARCHAR(255) PRIMARY KEY,
    art_user_id VARCHAR(255),
    art_product_name VARCHAR(255),
    art_product_title VARCHAR(255),
    art_product_details LONGTEXT,
    art_product_category VARCHAR(255),
    art_product_price DECIMAL(10,2),
    art_product_gallery TEXT,
    art_product_thumbnail VARCHAR(255),
    art_product_stock INT,
    art_product_vendor_id VARCHAR(255),
    art_product_color VARCHAR(255),
    art_product_size VARCHAR(255),
    art_product_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_orders (
    art_order_id VARCHAR(255) PRIMARY KEY,
    art_order_user_id VARCHAR(255),
    art_order_product_id VARCHAR(255),
    art_order_total_amount DECIMAL(10,2),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_reviews (
    art_review_id VARCHAR(255) PRIMARY KEY,
    art_review_product_id VARCHAR(255),
    art_review_user_id VARCHAR(255),
    art_review_rating INT,
    art_review_comment TEXT,
    art_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_favorites (
    art_favorite_id VARCHAR(255) PRIMARY KEY,
    art_favorite_product_id VARCHAR(255),
    art_favorite_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_carts (
    art_cart_id VARCHAR(255) PRIMARY KEY,
    art_cart_product_id VARCHAR(255),
    art_cart_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_colors (
    art_color_id VARCHAR(255) PRIMARY KEY,
    art_color_code VARCHAR(255),
    art_color_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_sizes (
    art_size_id VARCHAR(255) PRIMARY KEY,
    art_size_code VARCHAR(255),
    art_size_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_offers (
    art_offer_id VARCHAR(255) PRIMARY KEY,
    art_offer_amount DECIMAL(10,2),
    art_offer_user_id VARCHAR(255),
    art_offer_product_id VARCHAR(255),
    art_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    art_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_vouchers (
    art_voucher_id VARCHAR(255) PRIMARY KEY,
    art_voucher_code VARCHAR(255),
    art_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    art_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    art_voucher_user_id VARCHAR(255),
    art_voucher_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_brands (
    art_brand_id VARCHAR(255) PRIMARY KEY,
    art_brand_name VARCHAR(255),
    art_brand_address TEXT,
    art_brand_logo VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_messages (
    art_message_id VARCHAR(255) PRIMARY KEY,
    art_message_sender_id VARCHAR(255),
    art_message_receiver_id VARCHAR(255),
    art_message_content TEXT,
    art_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT DEFAULT 0,
    is_delivered INT DEFAULT 0,
    is_received INT DEFAULT 0,
    is_deleted INT DEFAULT 0,
    is_seen INT DEFAULT 0,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE art_message_media (
    art_message_media_id VARCHAR(255) PRIMARY KEY,
    art_message_media_message_id VARCHAR(255),
    art_message_media_file VARCHAR(255),
    art_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
