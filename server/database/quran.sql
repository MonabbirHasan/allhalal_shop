-- Table for Users
CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255) UNIQUE,
    user_phone VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    user_profile_picture VARCHAR(255),
    user_date_of_birth DATE,
    user_registration_date DATETIME,
    user_status ENUM('active', 'inactive') DEFAULT 'active',
    status INT DEFAULT 1
);

-- Table for Quran
CREATE TABLE quran (
    surah_id INT,
    ayah_id INT,
    ayah_text TEXT,
    surah_name VARCHAR(255),
    ayah_number INT,
    PRIMARY KEY (surah_id, ayah_id)
);

-- Table for Translations
CREATE TABLE translations (
    translation_id VARCHAR(255) PRIMARY KEY,
    translation_name VARCHAR(255),
    translation_language VARCHAR(255),
    translation_text TEXT,
    FOREIGN KEY (translation_id) REFERENCES quran(surah_id)
);

-- Table for Recitations
CREATE TABLE recitations (
    recitation_id VARCHAR(255) PRIMARY KEY,
    recitation_name VARCHAR(255),
    recitation_file VARCHAR(255), -- URL or path to the audio file
    recitation_duration TIME,
    recitation_description TEXT
);

-- Table for Bookmarks
CREATE TABLE bookmarks (
    bookmark_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    surah_id INT,
    ayah_id INT,
    bookmark_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (surah_id, ayah_id) REFERENCES quran(surah_id, ayah_id)
);

-- Table for Notes
CREATE TABLE notes (
    note_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    surah_id INT,
    ayah_id INT,
    note_text TEXT,
    note_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (surah_id, ayah_id) REFERENCES quran(surah_id, ayah_id)
);

-- Table for Categories
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255),
    category_description TEXT,
    status INT DEFAULT 1
);

-- Table for Feedback
CREATE TABLE feedback (
    feedback_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    feedback_text TEXT,
    feedback_date DATETIME,
    status INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
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
