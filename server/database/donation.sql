-- DONATION TABLES

CREATE TABLE donation (
    donation_id VARCHAR(255) PRIMARY KEY,
    donation_user_id VARCHAR(255),
    donation_type VARCHAR(255),
    donation_amount DECIMAL(10,2),
    donation_details TEXT,
    donation_for VARCHAR(255),
    donation_user_img VARCHAR(255),
    donation_name VARCHAR(255),
    donation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_type (
    donation_type_id INT PRIMARY KEY AUTO_INCREMENT,
    donation_type_name VARCHAR(255),
    donation_type_time VARCHAR(255),
    donation_type_details TEXT,
    donation_type_sub INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_users (
    donation_user_id VARCHAR(255) PRIMARY KEY,
    donation_user_name VARCHAR(255),
    donation_user_img VARCHAR(255),
    donation_user_email VARCHAR(255),
    donation_user_phone VARCHAR(255),
    donation_user_address VARCHAR(255),
    donation_user_pin VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_distributions (
    donation_distribution_id VARCHAR(255) PRIMARY KEY,
    donation_distribution_name VARCHAR(255),
    donation_distribution_details TEXT,
    donation_distribution_location VARCHAR(255),
    donation_distribution_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_transactions (
    donation_transaction_id VARCHAR(255) PRIMARY KEY,
    donation_transaction_user_id VARCHAR(255),
    donation_transaction_name VARCHAR(255),
    donation_transaction_email VARCHAR(255),
    donation_transaction_amount DECIMAL(10,2),
    donation_transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    donation_transaction_method VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_message (
    donation_message_id VARCHAR(255) PRIMARY KEY,
    donation_message_sender_id VARCHAR(255),
    donation_message_receiver_id VARCHAR(255),
    donation_message_content TEXT,
    donation_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT,
    is_delivery INT,
    is_received INT,
    is_deleted INT,
    is_seen INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_message_media (
    donation_message_media_id VARCHAR(255) PRIMARY KEY,
    donation_message_media_message_id VARCHAR(255),
    donation_message_media_file VARCHAR(255),
    donation_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donation_notification (
    notification_id VARCHAR(255) PRIMARY KEY,
    notification_user_id VARCHAR(255),
    notification_message TEXT,
    notification_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
