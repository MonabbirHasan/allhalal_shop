CREATE TABLE profile (
    user_id VARCHAR(255) PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    user_phone VARCHAR(255),
    user_address TEXT,
    user_resume TEXT, -- URL or path to the resume file
    user_profile_picture VARCHAR(255),
    user_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status INT DEFAULT 1
);
CREATE TABLE companies (
    company_id VARCHAR(255) PRIMARY KEY,
    company_name VARCHAR(255),
    company_email VARCHAR(255) UNIQUE,
    company_phone VARCHAR(255),
    company_address TEXT,
    company_description TEXT,
    company_logo VARCHAR(255),
    company_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    company_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status INT DEFAULT 1
);
CREATE TABLE jobs (
    job_id VARCHAR(255) PRIMARY KEY,
    job_title VARCHAR(255),
    job_description TEXT,
    job_requirements TEXT,
    job_location VARCHAR(255),
    job_salary DECIMAL(10,2),
    job_type ENUM('Full-Time', 'Part-Time', 'Contract', 'Temporary'),
    company_id VARCHAR(255),
    job_posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    job_expires_at TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);
CREATE TABLE applications (
    application_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    job_id VARCHAR(255),
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    application_status ENUM('Applied', 'Under Review', 'Interview', 'Rejected', 'Hired'),
    cover_letter TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);
CREATE TABLE job_categories (
    category_id VARCHAR(255) PRIMARY KEY,
    category_name VARCHAR(255),
    status INT DEFAULT 1
);
CREATE TABLE job_tags (
    tag_id VARCHAR(255) PRIMARY KEY,
    tag_name VARCHAR(255),
    status INT DEFAULT 1
);
CREATE TABLE job_tag_mapping (
    job_id VARCHAR(255),
    tag_id VARCHAR(255),
    PRIMARY KEY (job_id, tag_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (tag_id) REFERENCES job_tags(tag_id)
);
CREATE TABLE messages (
    message_id VARCHAR(255) PRIMARY KEY,
    sender_id VARCHAR(255),
    receiver_id VARCHAR(255),
    message_content TEXT,
    message_sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read INT DEFAULT 0,
    status INT DEFAULT 1,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES companies(company_id)
);
CREATE TABLE message_media (
    media_id VARCHAR(255) PRIMARY KEY,
    message_id VARCHAR(255),
    media_file VARCHAR(255),
    media_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INT DEFAULT 1,
    FOREIGN KEY (message_id) REFERENCES messages(message_id)
);
