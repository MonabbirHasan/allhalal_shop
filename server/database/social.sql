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

-- Table for Friends
CREATE TABLE friends (
    user_id VARCHAR(255),
    friend_id VARCHAR(255),
    friendship_date DATETIME,
    PRIMARY KEY (user_id, friend_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (friend_id) REFERENCES users(user_id)
);

-- Table for Posts
CREATE TABLE posts (
    post_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    post_content TEXT,
    post_image VARCHAR(255), -- URL or path to the image
    post_video VARCHAR(255), -- URL or path to the video
    post_date DATETIME,
    post_privacy ENUM('public', 'friends', 'private') DEFAULT 'friends',
    status INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Comments
CREATE TABLE comments (
    comment_id VARCHAR(255) PRIMARY KEY,
    post_id VARCHAR(255),
    user_id VARCHAR(255),
    comment_content TEXT,
    comment_date DATETIME,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Likes
CREATE TABLE likes (
    like_id VARCHAR(255) PRIMARY KEY,
    post_id VARCHAR(255),
    comment_id VARCHAR(255),
    user_id VARCHAR(255),
    like_date DATETIME,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (comment_id) REFERENCES comments(comment_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Messages
CREATE TABLE messages (
    message_id VARCHAR(255) PRIMARY KEY,
    sender_id VARCHAR(255),
    receiver_id VARCHAR(255),
    message_content TEXT,
    message_date DATETIME,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id)
);

-- Table for Message Media
CREATE TABLE message_media (
    media_id VARCHAR(255) PRIMARY KEY,
    message_id VARCHAR(255),
    media_file VARCHAR(255), -- URL or path to the media file
    media_type ENUM('image', 'video', 'document'),
    media_date DATETIME,
    FOREIGN KEY (message_id) REFERENCES messages(message_id)
);

-- Table for Notifications
CREATE TABLE notifications (
    notification_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    notification_type ENUM('like', 'comment', 'message', 'friend_request', 'event'),
    notification_message TEXT,
    notification_date DATETIME,
    is_read INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Groups
CREATE TABLE groups (
    group_id VARCHAR(255) PRIMARY KEY,
    group_name VARCHAR(255),
    group_description TEXT,
    group_image VARCHAR(255),
    group_creation_date DATETIME,
    group_status ENUM('public', 'private') DEFAULT 'public'
);

-- Table for Group Memberships
CREATE TABLE group_memberships (
    group_id VARCHAR(255),
    user_id VARCHAR(255),
    membership_date DATETIME,
    PRIMARY KEY (group_id, user_id),
    FOREIGN KEY (group_id) REFERENCES groups(group_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Events
CREATE TABLE events (
    event_id VARCHAR(255) PRIMARY KEY,
    event_name VARCHAR(255),
    event_description TEXT,
    event_date DATETIME,
    event_location VARCHAR(255),
    event_creator VARCHAR(255),
    FOREIGN KEY (event_creator) REFERENCES users(user_id)
);

-- Table for Event Attendees
CREATE TABLE event_attendees (
    event_id VARCHAR(255),
    user_id VARCHAR(255),
    attendance_date DATETIME,
    PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Table for Photos
CREATE TABLE photos (
    photo_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    photo_album_id VARCHAR(255),
    photo_url VARCHAR(255),
    photo_description TEXT,
    photo_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (photo_album_id) REFERENCES albums(album_id)
);

-- Table for Albums
CREATE TABLE albums (
    album_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    album_name VARCHAR(255),
    album_description TEXT,
    album_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
