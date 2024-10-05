CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    coins_balance INT DEFAULT 0,
    referrer_id INT DEFAULT NULL,
    is_subscribed BOOLEAN DEFAULT FALSE,
    subscription_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (referrer_id) REFERENCES users(user_id),
    FOREIGN KEY (subscription_id) REFERENCES subscriptions(subscription_id)
);

CREATE TABLE earn_subscription (
    subscription_id INT AUTO_INCREMENT PRIMARY KEY,
    plan_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    task_limit INT NOT NULL,  -- How many tasks can be completed daily
    task_reward DECIMAL(10, 2) NOT NULL,  -- Reward per task
    validity_days INT NOT NULL,  -- Subscription validity period
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE earn_user_subscription  (
    earn_user_sub_id VARCHAR(255) PRIMARY KEY,
    earn_user_sub_user_id VARCHAR(255) NOT NULL,
    earn_user_sub_sub_id VARCHAR(255) NOT NULL,
    earn_user_sub_start_date DATE NOT NULL,
    earn_user_sub_end_date DATE NOT NULL,  -- Calculated based on validity_days from earn_subscription
    earn_user_sub_tasks_completed_today INT DEFAULT 0,  -- Track the number of tasks completed today
    earn_user_sub_last_task_date DATE,  -- Track the last date the user performed a task
    earn_user_sub_status ENUM("active","inactive"),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE user_task_completion (
    task_completion_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    earn_task_id VARCHAR(255) NOT NULL,
    completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reward_coins INT NOT NULL
);

CREATE TABLE earn_daily_tasks (
    earn_task_id INT AUTO_INCREMENT PRIMARY KEY,
    earn_task_type ENUM('watch_ad', 'click_ad', 'install_app', 'spin_wheel', 'daily_task') NOT NULL,
    earn_task_description TEXT NOT NULL,
    earn_task_reward_coins INT NOT NULL,
    earn_task_is_active BOOLEAN DEFAULT TRUE
);
CREATE TABLE user_tasks (
    user_task_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    task_id INT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id)
);
CREATE TABLE coins_transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    task_id INT DEFAULT NULL,
    coins_earned INT DEFAULT 0,
    coins_spent INT DEFAULT 0,
    transaction_type ENUM('earn', 'spend') NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id)
);
CREATE TABLE user_coins(
    user_coin_id VARCHAR(255) PRIMARY KEY,
    user_coin_user_id VARCHAR(255) not null,
    user_coin INT,
    user_coin_status ENUM("active",'inactive')
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
CREATE TABLE earn_spin_wheel (
    spin_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    spin_result VARCHAR(255) NOT NULL,
    spin_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 );
CREATE TABLE referrals (
    referral_id INT AUTO_INCREMENT PRIMARY KEY,
    referrer_id INT NOT NULL,
    referred_id INT NOT NULL,
    reward_coins INT NOT NULL,
    referred_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (referrer_id) REFERENCES users(user_id),
    FOREIGN KEY (referred_id) REFERENCES users(user_id)
);
CREATE TABLE daily_tasks_tracker (
    daily_task_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    tasks_completed INT DEFAULT 0,
    task_limit INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE withdrawals (
    withdrawal_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    requested_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_date TIMESTAMP DEFAULT NULL,
    payment_method VARCHAR(255) DEFAULT NULL,
    payment_details TEXT DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE coins_exhange_rate(
    coin_exhange_id VARCHAR(255) PRIMARY KEY not null,
    coin_exhange_user_id VARCHAR(255) not null,
    coin_exhange_rate DECIMAL(10,2),
    coin_exhange_status ENUM('active','inactive')
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
)
CREATE INDEX idx_user_id ON user_tasks(user_id);
CREATE INDEX idx_task_id ON user_tasks(task_id);
CREATE INDEX idx_transaction_date ON coins_transactions(transaction_date);
