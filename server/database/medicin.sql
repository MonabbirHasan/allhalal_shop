CREATE TABLE medicines (
    medicine_id VARCHAR(255) PRIMARY KEY,
    medicine_name VARCHAR(255),
    medicine_description TEXT,
    medicine_category_id VARCHAR(255),
    medicine_supplier_id VARCHAR(255),
    medicine_price DECIMAL(10,2),
    medicine_quantity_in_stock INT,
    medicine_expiry_date DATE,
    medicine_image VARCHAR(255),
    status INT DEFAULT 1,
    FOREIGN KEY (medicine_category_id) REFERENCES medicine_categories(category_id),
    FOREIGN KEY (medicine_supplier_id) REFERENCES suppliers(supplier_id)
);
CREATE TABLE medicine_categories (
    category_id VARCHAR(255) PRIMARY KEY,
    category_name VARCHAR(255),
    status INT DEFAULT 1
);
CREATE TABLE suppliers (
    supplier_id VARCHAR(255) PRIMARY KEY,
    supplier_name VARCHAR(255),
    supplier_email VARCHAR(255),
    supplier_phone VARCHAR(255),
    supplier_address TEXT,
    status INT DEFAULT 1
);
CREATE TABLE customers (
    customer_id VARCHAR(255) PRIMARY KEY,
    customer_name VARCHAR(255),
    customer_email VARCHAR(255) UNIQUE,
    customer_phone VARCHAR(255),
    customer_address TEXT,
    customer_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    customer_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status INT DEFAULT 1
);
CREATE TABLE orders (
    order_id VARCHAR(255) PRIMARY KEY,
    customer_id VARCHAR(255),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_total_amount DECIMAL(10,2),
    order_status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE order_details (
    order_detail_id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255),
    medicine_id VARCHAR(255),
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (medicine_id) REFERENCES medicines(medicine_id)
);
CREATE TABLE offers (
    offer_id VARCHAR(255) PRIMARY KEY,
    offer_description TEXT,
    offer_discount_percentage DECIMAL(5,2),
    offer_start_date DATE,
    offer_end_date DATE,
    status INT DEFAULT 1
);
CREATE TABLE vouchers (
    voucher_id VARCHAR(255) PRIMARY KEY,
    voucher_code VARCHAR(255) UNIQUE,
    voucher_discount DECIMAL(5,2),
    voucher_start_date DATE,
    voucher_end_date DATE,
    voucher_customer_id VARCHAR(255),
    status INT DEFAULT 1,
    FOREIGN KEY (voucher_customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE reviews (
    review_id VARCHAR(255) PRIMARY KEY,
    medicine_id VARCHAR(255),
    customer_id VARCHAR(255),
    review_rating INT CHECK (review_rating BETWEEN 1 AND 5),
    review_comment TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (medicine_id) REFERENCES medicines(medicine_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE messages (
    message_id VARCHAR(255) PRIMARY KEY,
    sender_id VARCHAR(255),
    receiver_id VARCHAR(255),
    message_content TEXT,
    message_sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read INT DEFAULT 0,
    status INT DEFAULT 1,
    FOREIGN KEY (sender_id) REFERENCES customers(customer_id),
    FOREIGN KEY (receiver_id) REFERENCES suppliers(supplier_id) -- Or another table if you have staff
);
CREATE TABLE message_media (
    media_id VARCHAR(255) PRIMARY KEY,
    message_id VARCHAR(255),
    media_file VARCHAR(255),
    media_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (message_id) REFERENCES messages(message_id)
);
CREATE TABLE offers (
    offer_id VARCHAR(255) PRIMARY KEY,
    offer_title VARCHAR(255),
    offer_description TEXT,
    offer_discount DECIMAL(5,2),
    offer_start_date DATE,
    offer_end_date DATE,
    status INT DEFAULT 1
);
