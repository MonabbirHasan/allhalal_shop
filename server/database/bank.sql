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

-- Table for Accounts
CREATE TABLE accounts (
    account_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    account_type ENUM('checking', 'savings', 'business') NOT NULL,
    account_balance DECIMAL(15,2) DEFAULT 0.00,
    account_status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Transactions
CREATE TABLE transactions (
    transaction_id VARCHAR(255) PRIMARY KEY,
    account_id VARCHAR(255),
    transaction_type ENUM('deposit', 'withdrawal', 'transfer', 'fee') NOT NULL,
    transaction_amount DECIMAL(15,2) NOT NULL,
    transaction_date DATETIME,
    transaction_description TEXT,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id),
    status INT DEFAULT 1
);

-- Table for Loans
CREATE TABLE loans (
    loan_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    loan_amount DECIMAL(15,2),
    loan_type ENUM('personal', 'home', 'auto', 'student') NOT NULL,
    loan_interest_rate DECIMAL(5,2),
    loan_term INT, -- Term in months
    loan_status ENUM('approved', 'pending', 'rejected') DEFAULT 'pending',
    loan_start_date DATE,
    loan_end_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Cards
CREATE TABLE cards (
    card_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    card_number VARCHAR(20) UNIQUE,
    card_type ENUM('debit', 'credit') NOT NULL,
    card_expiry DATE,
    card_status ENUM('active', 'inactive', 'blocked') DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Branches
CREATE TABLE branches (
    branch_id VARCHAR(255) PRIMARY KEY,
    branch_name VARCHAR(255),
    branch_address TEXT,
    branch_contact VARCHAR(255),
    branch_manager VARCHAR(255),
    status INT DEFAULT 1
);

-- Table for Transactions History (for archival and audit)
CREATE TABLE transactions_history (
    history_id VARCHAR(255) PRIMARY KEY,
    transaction_id VARCHAR(255),
    transaction_date DATETIME,
    transaction_details TEXT,
    FOREIGN KEY (transaction_id) REFERENCES transactions(transaction_id),
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
