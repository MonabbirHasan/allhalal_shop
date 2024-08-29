-- CLOTH TABLES

CREATE TABLE cloth_category (
    cloth_category_id INT PRIMARY KEY AUTO_INCREMENT,
    cloth_category_name VARCHAR(255),
    cloth_category_gender ENUM('men', 'women'),
    cloth_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_products (
    cloth_product_id VARCHAR(255) PRIMARY KEY,
    cloth_product_name VARCHAR(255),
    cloth_product_title VARCHAR(255),
    cloth_product_user_id VARCHAR(255),
    cloth_product_description TEXT,
    cloth_product_category INT,
    cloth_product_price DECIMAL(10,2),
    cloth_product_stock INT,
    cloth_product_gallery TEXT,
    cloth_product_thumbnail VARCHAR(255),
    cloth_product_color VARCHAR(255),
    cloth_product_sizes VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_orders (
    cloth_order_id VARCHAR(255) PRIMARY KEY,
    cloth_order_user_id VARCHAR(255),
    cloth_order_product_id VARCHAR(255),
    cloth_order_total_amount DECIMAL(10,2),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_reviews (
    cloth_review_id VARCHAR(255) PRIMARY KEY,
    cloth_review_product_id VARCHAR(255),
    cloth_review_user_id VARCHAR(255),
    cloth_review_rating INT,
    cloth_review_comment TEXT,
    cloth_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_favorites (
    cloth_favorite_id VARCHAR(255) PRIMARY KEY,
    cloth_favorite_product_id VARCHAR(255),
    cloth_favorite_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_carts (
    cloth_cart_id VARCHAR(255) PRIMARY KEY,
    cloth_cart_product_id VARCHAR(255),
    cloth_cart_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_colors (
    cloth_color_id VARCHAR(255) PRIMARY KEY,
    cloth_color_code VARCHAR(255),
    cloth_color_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_sizes (
    cloth_size_id VARCHAR(255) PRIMARY KEY,
    cloth_size_code VARCHAR(255),
    cloth_size_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_offers (
    cloth_offer_id VARCHAR(255) PRIMARY KEY,
    cloth_offer_amount DECIMAL(10,2),
    cloth_offer_user_id VARCHAR(255),
    cloth_offer_product_id VARCHAR(255),
    cloth_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cloth_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_vouchers (
    cloth_voucher_id VARCHAR(255) PRIMARY KEY,
    cloth_voucher_code VARCHAR(255),
    cloth_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cloth_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cloth_voucher_user_id VARCHAR(255),
    cloth_voucher_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_messages (
    cloth_message_id VARCHAR(255) PRIMARY KEY,
    cloth_message_sender_id VARCHAR(255),
    cloth_message_receiver_id VARCHAR(255),
    cloth_message_content TEXT,
    cloth_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT,
    is_delivery INT,
    is_received INT,
    is_deleted INT,
    is_seen INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_message_media (
    cloth_message_media_id VARCHAR(255) PRIMARY KEY,
    cloth_message_media_message_id VARCHAR(255),
    cloth_message_media_file VARCHAR(255),
    cloth_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cloth_brands (
    cloth_brand_id VARCHAR(255) PRIMARY KEY,
    cloth_brand_name VARCHAR(255),
    cloth_brand_address TEXT,
    cloth_brand_logo VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
