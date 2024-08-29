-- APPS STORE

CREATE TABLE app_carts (
    app_cart_id VARCHAR(255) PRIMARY KEY,
    app_cart_product_id VARCHAR(255) NOT NULL,
    app_cart_user_id VARCHAR(255) NOT NULL,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE apps (
    app_id VARCHAR(255) PRIMARY KEY,
    app_category VARCHAR(255),
    app_user_id VARCHAR(255),
    app_name VARCHAR(255),
    app_description LONGTEXT,
    app_version INT,
    app_file_url TEXT,
    app_icon_url TEXT,
    app_gallery TEXT,
    app_upload_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    app_price DECIMAL(10,2),
    app_title VARCHAR(255),
    app_thumbnail VARCHAR(255),
    app_status ENUM('approved', 'rejected', 'pending'),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_category (
    app_category_id INT PRIMARY KEY AUTO_INCREMENT,
    app_category_name VARCHAR(255),
    app_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_reviews (
    app_review_id VARCHAR(255) PRIMARY KEY,
    app_review_user_id VARCHAR(255),
    app_product_id VARCHAR(255),
    app_review_rating INT,
    app_review_comment TEXT,
    app_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_transactions (
    app_transaction_id VARCHAR(255) PRIMARY KEY,
    app_transaction_user_id VARCHAR(255),
    app_transaction_app_id VARCHAR(255),
    app_transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    app_transaction_amount DECIMAL(10,2),
    app_transaction_method VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_favorites (
    app_favorite_id VARCHAR(255) PRIMARY KEY,
    app_favorite_user_id VARCHAR(255),
    app_favorite_app_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_offers (
    app_offer_id VARCHAR(255) PRIMARY KEY,
    app_offer_amount DECIMAL(10,2),
    app_offer_user_id VARCHAR(255),
    app_offer_product_id VARCHAR(255),
    app_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    app_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_vouchers (
    app_voucher_id VARCHAR(255) PRIMARY KEY,
    app_voucher_code VARCHAR(255),
    app_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    app_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    app_voucher_user_id VARCHAR(255),
    app_voucher_app_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_messages (
    app_message_id VARCHAR(255) PRIMARY KEY,
    app_message_sender_id VARCHAR(255),
    app_message_receiver_id VARCHAR(255),
    app_message_content TEXT,
    app_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT DEFAULT 0,
    is_delivered INT DEFAULT 0,
    is_received INT DEFAULT 0,
    is_deleted INT DEFAULT 0,
    is_seen INT DEFAULT 0,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE app_message_media (
    app_message_media_id VARCHAR(255) PRIMARY KEY,
    app_message_media_message_id VARCHAR(255),
    app_message_media_file VARCHAR(255),
    app_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
