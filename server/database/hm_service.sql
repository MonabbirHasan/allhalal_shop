-- Home Services Tables

CREATE TABLE home_services (
    home_service_id VARCHAR(255) PRIMARY KEY,
    home_service_name VARCHAR(255),
    home_service_category_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE home_service_category (
    home_service_category_id VARCHAR(255) PRIMARY KEY,
    home_service_category_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE home_service_contact (
    home_service_contact_id VARCHAR(255) PRIMARY KEY,
    home_service_contact_name VARCHAR(255),
    home_service_contact_email VARCHAR(255),
    home_service_contact_phone VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE home_service_reviews (
    home_service_review_id VARCHAR(255) PRIMARY KEY,
    home_service_review_service_id VARCHAR(255),
    home_service_review_user_id VARCHAR(255),
    home_service_review_rating INT,
    home_service_review_comment TEXT,
    home_service_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE home_service_request (
    home_service_request_id VARCHAR(255) PRIMARY KEY,
    home_service_request_service_id VARCHAR(255),
    home_service_request_details TEXT,
    home_service_request_user_id VARCHAR(255),
    home_service_request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE home_service_message (
    home_service_message_id VARCHAR(255) PRIMARY KEY,
    home_service_message_sender_id VARCHAR(255),
    home_service_message_receiver_id VARCHAR(255),
    home_service_message_content TEXT,
    home_service_message_send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_sent INT,
    is_delivery INT,
    is_received INT,
    is_deleted INT,
    is_seen INT,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE home_service_message_media (
    home_service_message_media_id VARCHAR(255) PRIMARY KEY,
    home_service_message_media_message_id VARCHAR(255),
    home_service_message_media_file VARCHAR(255),
    home_service_message_media_create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
