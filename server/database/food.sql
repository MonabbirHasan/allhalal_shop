-- FOOD PRODUCTS TABLES

CREATE TABLE food_products (
    food_product_id VARCHAR(255) PRIMARY KEY,
    food_product_name VARCHAR(255),
    food_product_category VARCHAR(255),
    food_product_title VARCHAR(255),
    food_product_description LONGTEXT,
    food_product_weight VARCHAR(255),
    food_product_thumbnail VARCHAR(255),
    food_product_vendor_id VARCHAR(255),
    food_product_brands VARCHAR(255),
    food_product_gallery TEXT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_carts (
    food_cart_id VARCHAR(255) PRIMARY KEY,
    food_cart_product_id VARCHAR(255),
    food_cart_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_favorits (
    food_favorit_id VARCHAR(255) PRIMARY KEY,
    food_favorit_product_id VARCHAR(255),
    food_favorit_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_offers (
    food_offer_id VARCHAR(255) PRIMARY KEY,
    food_offer_amount DECIMAL(10,2),
    food_offer_user_id VARCHAR(255),
    food_offer_product_id VARCHAR(255),
    food_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    food_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_vouchers (
    food_voucher_id VARCHAR(255) PRIMARY KEY,
    food_voucher_code VARCHAR(255),
    food_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    food_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    food_voucher_user_id VARCHAR(255),
    food_voucher_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_category (
    food_category_id INT PRIMARY KEY AUTO_INCREMENT,
    food_category_name VARCHAR(255),
    food_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_reviews (
    food_review_id VARCHAR(255) PRIMARY KEY,
    food_review_product_id VARCHAR(255),
    food_review_user_id VARCHAR(255),
    food_review_rating INT,
    food_review_comment TEXT,
    food_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_brands (
    food_brand_id VARCHAR(255) PRIMARY KEY,
    food_brand_name VARCHAR(255),
    food_brand_address TEXT,
    food_brand_logo VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_name (
    food_name_id VARCHAR(255) PRIMARY KEY,
    food_name VARCHAR(255),
    food_name_details TEXT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_orders (
    food_order_id VARCHAR(255) PRIMARY KEY,
    food_order_user_id VARCHAR(255),
    food_order_product_id VARCHAR(255),
    food_order_total_amount DECIMAL(10,2),
    food_order_weight VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_weight (
    food_weight_id VARCHAR(255) PRIMARY KEY,
    food_weight_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_message (
    food_message_id VARCHAR(255) PRIMARY KEY,
    food_message_sender_id VARCHAR(255),
    food_message_receiver_id VARCHAR(255),
    food_message_content TEXT,
    food_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT,
    is_delivery INT,
    is_received INT,
    is_deleted INT,
    is_seen INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE food_message_media (
    food_message_media_id VARCHAR(255) PRIMARY KEY,
    food_message_media_message_id VARCHAR(255),
    food_message_media_file VARCHAR(255),
    food_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
