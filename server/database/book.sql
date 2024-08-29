-- BOOK TABLES

CREATE TABLE books (
    book_id VARCHAR(255) PRIMARY KEY,
    book_title VARCHAR(255),
    book_author VARCHAR(255),
    book_category INT,
    book_description LONGTEXT,
    book_isbn VARCHAR(255),
    book_price DECIMAL(10,2),
    book_stock INT,
    book_publish TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    book_thumbnail VARCHAR(255),
    book_file TEXT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_orders (
    book_order_id VARCHAR(255) PRIMARY KEY,
    book_order_user_id VARCHAR(255),
    book_order_product_id VARCHAR(255),
    book_order_total_amount DECIMAL(10,2),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_category (
    book_category_id INT PRIMARY KEY AUTO_INCREMENT,
    book_category_name VARCHAR(255),
    book_category_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_author (
    book_author_id VARCHAR(255) PRIMARY KEY,
    book_author_name VARCHAR(255),
    book_author_bio TEXT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_reviews (
    book_review_id VARCHAR(255) PRIMARY KEY,
    book_review_user_id VARCHAR(255),
    book_review_product_id VARCHAR(255),
    book_review_content TEXT,
    book_review_rating INT,
    book_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_favorites (
    book_favorite_id VARCHAR(255) PRIMARY KEY,
    book_favorite_product_id VARCHAR(255),
    book_favorite_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_carts (
    book_cart_id VARCHAR(255) PRIMARY KEY,
    book_cart_product_id VARCHAR(255),
    book_cart_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_offers (
    book_offer_id VARCHAR(255) PRIMARY KEY,
    book_offer_amount DECIMAL(10,2),
    book_offer_user_id VARCHAR(255),
    book_offer_product_id VARCHAR(255),
    book_offer_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    book_offer_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_vouchers (
    book_voucher_id VARCHAR(255) PRIMARY KEY,
    book_voucher_code VARCHAR(255),
    book_voucher_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    book_voucher_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    book_voucher_user_id VARCHAR(255),
    book_voucher_product_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE book_library (
    book_library_id VARCHAR(255) PRIMARY KEY,
    book_library_number VARCHAR(255),
    book_library_name VARCHAR(255),
    book_library_category_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
