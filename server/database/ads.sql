-- ADS TABLES

CREATE TABLE ads (
    ads_id VARCHAR(255) PRIMARY KEY,
    ads_title VARCHAR(255),
    ads_start_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ads_end_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ads_thumbnail VARCHAR(255),
    ads_description TEXT,
    ads_redirect_url TEXT,
    ads_btn_title VARCHAR(255),
    ads_type VARCHAR(100),
    ads_category VARCHAR(255),
    ads_budgets DECIMAL(10,2),
    ads_advertisor_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_category (
    ads_category_id VARCHAR(255) PRIMARY KEY,
    ads_category_name VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_clicks (
    ads_click_id VARCHAR(255) PRIMARY KEY,
    ads_click_user_id VARCHAR(255),
    ads_click_ad_id VARCHAR(255),
    ads_click_count INT DEFAULT 0,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_impressions (
    ads_impression_id VARCHAR(255) PRIMARY KEY,
    ads_impression_user_id VARCHAR(255),
    ads_impression_ad_id VARCHAR(255),
    ads_impression_count INT DEFAULT 0,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_conversions (
    ads_conversion_id VARCHAR(255) PRIMARY KEY,
    ads_conversion_user_id VARCHAR(255),
    ads_conversion_ad_id VARCHAR(255),
    ads_conversion_count INT DEFAULT 0,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_profile (
    ads_profile_id VARCHAR(255) PRIMARY KEY,
    ads_profile_user_id VARCHAR(255),
    ads_profile_address VARCHAR(255),
    ads_profile_company_name VARCHAR(255),
    ads_profile_user_name VARCHAR(255),
    ads_profile_company_location VARCHAR(255),
    ads_profile_email VARCHAR(255),
    ads_profile_phone VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_subscriptions (
    ads_subscription_id VARCHAR(255) PRIMARY KEY,
    ads_subscription_limit INT,
    ads_subscription_price DECIMAL(10,2),
    ads_subscription_user_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_transactions (
    ads_transaction_id VARCHAR(255) PRIMARY KEY,
    ads_transaction_user_id VARCHAR(255),
    ads_transaction_amount DECIMAL(10,2),
    ads_transaction_method VARCHAR(255),
    ads_transaction_email VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_views (
    ads_view_id VARCHAR(255) PRIMARY KEY,
    ads_view_ad_id VARCHAR(255),
    ads_view_count INT DEFAULT 0,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE ads_analytics (
    ads_analytic_id VARCHAR(255) PRIMARY KEY,
    ads_analytic_impression_id VARCHAR(255),
    ads_analytic_conversion_id VARCHAR(255),
    ads_analytic_view_id VARCHAR(255),
    ads_analytic_click_id VARCHAR(255),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
