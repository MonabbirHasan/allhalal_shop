-- ELECTRONIC STORE TABLES

CREATE TABLE elc_product (
    elc_product_id VARCHAR(255) PRIMARY KEY,
    elc_product_title VARCHAR(255),
    elc_product_name VARCHAR(255),
    elc_product_thumbnail VARCHAR(255),
    elc_product_gallery TEXT,
    elc_product_description LONGTEXT,
    elc_product_weight VARCHAR(255),
    elc_product_category INT,
    elc_product_price DECIMAL(10,2),
    elc_product_vendor_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_category (
    elc_category_id INT PRIMARY KEY AUTO_INCREMENT,
    elc_category_name VARCHAR(255),
    elc_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_carts (
    elc_cart_id VARCHAR(255) PRIMARY KEY,
    elc_cart_user_id VARCHAR(255),
    elc_cart_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_favorits (
    elc_favorit_id VARCHAR(255) PRIMARY KEY,
    elc_favorit_product_id VARCHAR(255),
    elc_favorit_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_weight (
    elc_weight_id VARCHAR(255) PRIMARY KEY,
    elc_weight_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_offers (
    elc_offer_id VARCHAR(255) PRIMARY KEY,
    elc_offer_amount DECIMAL(10,2),
    elc_offer_user_id VARCHAR(255),
    elc_offer_product_id VARCHAR(255),
    elc_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    elc_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_vouchers (
    elc_voucher_id VARCHAR(255) PRIMARY KEY,
    elc_voucher_code VARCHAR(255),
    elc_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    elc_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    elc_voucher_user_id VARCHAR(255),
    elc_voucher_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_product_name (
    elc_product_name_id VARCHAR(255) PRIMARY KEY,
    elc_product_name VARCHAR(255),
    elc_product_from VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_reviews (
    elc_review_id VARCHAR(255) PRIMARY KEY,
    elc_review_product_id VARCHAR(255),
    elc_review_user_id VARCHAR(255),
    elc_review_rating INT,
    elc_review_comment TEXT,
    elc_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_orders (
    elc_order_id VARCHAR(255) PRIMARY KEY,
    elc_order_user_id VARCHAR(255),
    elc_order_product_id VARCHAR(255),
    elc_order_total_amount DECIMAL(10,2),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_brands (
    elc_brand_id VARCHAR(255) PRIMARY KEY,
    elc_brand_name VARCHAR(255),
    elc_brand_address TEXT,
    elc_brand_logo VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_message (
    elc_message_id VARCHAR(255) PRIMARY KEY,
    elc_message_sender_id VARCHAR(255),
    elc_message_receiver_id VARCHAR(255),
    elc_message_content TEXT,
    elc_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT,
    is_delivery INT,
    is_received INT,
    is_deleted INT,
    is_seen INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE elc_message_media (
    elc_message_media_id VARCHAR(255) PRIMARY KEY,
    elc_message_media_message_id VARCHAR(255),
    elc_message_media_file VARCHAR(255),
    elc_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
