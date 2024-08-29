-- GROCERY STORE TABLES

CREATE TABLE grocary_products (
    grocary_product_id VARCHAR(255) PRIMARY KEY,
    grocary_product_category VARCHAR(255),
    grocary_product_brands VARCHAR(255),
    grocary_product_vendor_id VARCHAR(255),
    grocary_product_title VARCHAR(255),
    grocary_product_description LONGTEXT,
    grocary_product_price DECIMAL(10,2),
    grocary_product_thumbnail VARCHAR(255),
    grocary_product_gallery TEXT,
    grocary_product_colors VARCHAR(255),
    grocary_product_sizes VARCHAR(255),
    grocary_product_weight VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_bitamins (
    grocary_bitamin_id VARCHAR(255) PRIMARY KEY,
    grocary_bitamin_name VARCHAR(255),
    grocary_bitamin_details TEXT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_offers (
    grocary_offer_id VARCHAR(255) PRIMARY KEY,
    grocary_offer_amount DECIMAL(10,2),
    grocary_offer_user_id VARCHAR(255),
    grocary_offer_product_id VARCHAR(255),
    grocary_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grocary_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_vouchers (
    grocary_voucher_id VARCHAR(255) PRIMARY KEY,
    grocary_voucher_code VARCHAR(255),
    grocary_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grocary_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grocary_voucher_user_id VARCHAR(255),
    grocary_voucher_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_orders (
    grocary_order_id VARCHAR(255) PRIMARY KEY,
    grocary_order_user_id VARCHAR(255),
    grocary_order_product_id VARCHAR(255),
    grocary_order_total_amount DECIMAL(10,2),
    grocary_order_weight VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_message (
    grocary_message_id VARCHAR(255) PRIMARY KEY,
    grocary_message_sender_id VARCHAR(255),
    grocary_message_receiver_id VARCHAR(255),
    grocary_message_content TEXT,
    grocary_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT,
    is_delivery INT,
    is_received INT,
    is_deleted INT,
    is_seen INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_message_media (
    grocary_message_media_id VARCHAR(255) PRIMARY KEY,
    grocary_message_media_message_id VARCHAR(255),
    grocary_message_media_file VARCHAR(255),
    grocary_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_category (
    grocary_category_id INT PRIMARY KEY AUTO_INCREMENT,
    grocary_category_name VARCHAR(255),
    grocary_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_reviews (
    grocary_review_id VARCHAR(255) PRIMARY KEY,
    grocary_review_product_id VARCHAR(255),
    grocary_review_user_id VARCHAR(255),
    grocary_review_rating INT,
    grocary_review_comment TEXT,
    grocary_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_favorits (
    grocary_favorit_id VARCHAR(255) PRIMARY KEY,
    grocary_favorit_product_id VARCHAR(255),
    grocary_favorit_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_carts (
    grocary_cart_id VARCHAR(255) PRIMARY KEY,
    grocary_cart_product_id VARCHAR(255),
    grocary_cart_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_colors (
    grocary_color_id VARCHAR(255) PRIMARY KEY,
    grocary_color_code VARCHAR(255),
    grocary_color_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_sizes (
    grocary_size_id VARCHAR(255) PRIMARY KEY,
    grocary_size_code VARCHAR(255),
    grocary_size_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_weight (
    grocary_weight_id VARCHAR(255) PRIMARY KEY,
    grocary_weight_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE grocary_brands (
    grocary_brand_id VARCHAR(255) PRIMARY KEY,
    grocary_brand_name VARCHAR(255),
    grocary_brand_address TEXT,
    grocary_brand_logo VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
