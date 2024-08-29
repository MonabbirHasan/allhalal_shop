-- Table for Users
CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255) UNIQUE,
    user_phone VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    user_address TEXT,
    user_dob DATE,
    user_status ENUM('active', 'inactive') DEFAULT 'active',
    status INT DEFAULT 1
);

-- Table for Products
CREATE TABLE products (
    product_id VARCHAR(255) PRIMARY KEY,
    product_name VARCHAR(255),
    product_description LONGTEXT,
    product_category_id INT,
    product_brand_id VARCHAR(255),
    product_price DECIMAL(10,2),
    product_thumbnail VARCHAR(255),
    product_gallery TEXT,
    product_print_options TEXT, -- Details about print options
    status INT DEFAULT 1,
    FOREIGN KEY (product_category_id) REFERENCES categories(category_id),
    FOREIGN KEY (product_brand_id) REFERENCES brands(brand_id)
);

-- Table for Designs
CREATE TABLE designs (
    design_id VARCHAR(255) PRIMARY KEY,
    design_name VARCHAR(255),
    design_file VARCHAR(255),
    design_description TEXT,
    design_creator_id VARCHAR(255),
    status INT DEFAULT 1,
    FOREIGN KEY (design_creator_id) REFERENCES users(user_id)
);

-- Table for Orders
CREATE TABLE orders (
    order_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    order_date DATETIME,
    order_total DECIMAL(10,2),
    order_status ENUM('pending', 'processed', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    status INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Order Items
CREATE TABLE order_items (
    order_item_id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255),
    product_id VARCHAR(255),
    design_id VARCHAR(255),
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (design_id) REFERENCES designs(design_id)
);

-- Table for Payments
CREATE TABLE payments (
    payment_id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255),
    payment_date DATETIME,
    payment_amount DECIMAL(10,2),
    payment_method ENUM('credit_card', 'paypal', 'bank_transfer'),
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    status INT DEFAULT 1
);

-- Table for Shipping
CREATE TABLE shipping (
    shipping_id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255),
    shipping_address TEXT,
    shipping_method ENUM('standard', 'express'),
    shipping_status ENUM('pending', 'shipped', 'delivered', 'returned') DEFAULT 'pending',
    shipping_date DATETIME,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    status INT DEFAULT 1
);

-- Table for Categories
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255),
    status INT DEFAULT 1
);

-- Table for Brands
CREATE TABLE brands (
    brand_id VARCHAR(255) PRIMARY KEY,
    brand_name VARCHAR(255),
    brand_logo VARCHAR(255),
    status INT DEFAULT 1
);

-- Table for Reviews
CREATE TABLE reviews (
    review_id VARCHAR(255) PRIMARY KEY,
    product_id VARCHAR(255),
    user_id VARCHAR(255),
    review_rating INT,
    review_comment TEXT,
    review_date DATETIME,
    status INT DEFAULT 1,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Vouchers
CREATE TABLE vouchers (
    voucher_id VARCHAR(255) PRIMARY KEY,
    voucher_code VARCHAR(255) UNIQUE,
    voucher_discount DECIMAL(5,2),
    voucher_start_date DATE,
    voucher_end_date DATE,
    voucher_status ENUM('active', 'inactive') DEFAULT 'active',
    status INT DEFAULT 1
);

-- Table for Notifications
CREATE TABLE notifications (
    notification_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    notification_message TEXT,
    notification_date DATETIME,
    is_read INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);
