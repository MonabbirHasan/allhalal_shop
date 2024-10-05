CREATE TABLE  platform_store(
    platform_store_id VARCHAR(255) PRIMARY KEY,
    platform_store VARCHAR(255),
    platform_store_icon TEXT,
    platform_store_verity VARCHAR(255),
    status enum("active","inactive")
)
CREATE TABLE products (
  product_id VARCHAR(255) PRIMARY KEY,
  product_name VARCHAR(255),
  product_desc LONGTEXT,
  product_price DECIMAL(10, 2),
  product_category_id VARCHAR(255),
  product_stock INT,
  product_vendor_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status enum("active","inactive")
);
CREATE TABLE product_category (
  category_id VARCHAR(255) PRIMARY KEY ,
  category_name VARCHAR(255),
  status enum("active","inactive")
);
CREATE TABLE product_details (
  detail_id VARCHAR(255) PRIMARY KEY,
  product_id VARCHAR(255),
  detail_key VARCHAR(255),  -- For example, 'size', 'color', 'expiry_date'
  detail_value VARCHAR(255),
    status enum("active","inactive")
);
CREATE TABLE product_orders (
    order_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    order_status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     status enum("active","inactive")
);

CREATE TABLE product_order_items (
  order_item_id VARCHAR(255) PRIMARY KEY,
  order_id VARCHAR(255),
  product_id VARCHAR(255),
  quantity INT,
  price DECIMAL(10, 2),
  status enum("active","inactive")
);
CREATE TABLE payment_methods (
    payment_method_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    payment_type ENUM('bank', 'credit_card', 'paypal', 'paytm','bkash','nagad','rocket') NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE bank_accounts (
    bank_account_id VARCHAR(255) PRIMARY KEY,
    payment_method_id VARCHAR(255),
    bank_name VARCHAR(255) NOT NULL,
    account_number VARCHAR(255) NOT NULL,
    account_holder_name VARCHAR(255) NOT NULL,
    ifsc_code VARCHAR(20), -- For Indian banks, modify for other countries
    swift_code VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status enum("active","inactive")
 );
CREATE TABLE credit_cards (
    credit_card_id VARCHAR(255) PRIMARY KEY,
    payment_method_id VARCHAR(255) NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    card_holder_name VARCHAR(255) NOT NULL,
    card_expiry DATE NOT NULL,
    card_type ENUM('Visa', 'MasterCard', 'Amex', 'Discover', 'Other') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
-- CREATE TABLE paypal_accounts (
--     paypal_account_id VARCHAR(255) PRIMARY KEY,
--     payment_method_id VARCHAR(255) NOT NULL,
--     paypal_email VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--      status enum("active","inactive")
-- );
-- CREATE TABLE stripe_accounts (
--     stripe_account_id VARCHAR(255) PRIMARY KEY,
--     payment_method_id VARCHAR(255) NOT NULL,
--     stripe_customer_id VARCHAR(255) NOT NULL, -- Reference to Stripe's customer ID
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     status enum("active","inactive")
-- );
-- CREATE TABLE paytm_accounts (
--     paytm_account_id VARCHAR(255) PRIMARY KEY,
--     payment_method_id VARCHAR(255) NOT NULL,
--     paytm_phone_number VARCHAR(15) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     status enum("active","inactive")
-- );
-- CREATE TABLE phonepe_accounts (
--     phonepe_account_id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     payment_method_id BIGINT NOT NULL,
--     phonepe_phone_number VARCHAR(15) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     FOREIGN KEY (payment_method_id) REFERENCES payment_methods(payment_method_id) ON DELETE CASCADE
-- );
CREATE TABLE bkash_accounts (
    bkash_account_id VARCHAR(255) PRIMARY KEY,
    payment_method_id VARCHAR(255) NOT NULL,
    bkash_phone_number VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE nagad_accounts (
    nagad_account_id VARCHAR(255) PRIMARY KEY,
    payment_method_id VARCHAR(255) NOT NULL,
    nagad_phone_number VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE other_payment_methods (
    other_payment_id VARCHAR(255) PRIMARY KEY,
    payment_method_id VARCHAR(255) NOT NULL,
    provider_name VARCHAR(255) NOT NULL, -- Example: 'Payoneer'
    account_identifier VARCHAR(255) NOT NULL, -- Example: Email or Phone
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   status enum("active","inactive")
);
CREATE TABLE product_favorite (
    favorite_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE product_cart (
    cart_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    price DECIMAL(10, 2) NOT NULL,  -- Price at the time of adding to the cart
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE product_shipping (
    shipping_id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255) NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    shipping_status ENUM('pending', 'in_transit', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE product_reviews (
    review_id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE product_voucher (
    voucher_id VARCHAR(100) PRIMARY KEY,
    voucher_code VARCHAR(50) NOT NULL UNIQUE,
    discount_percentage DECIMAL(5, 2) NOT NULL,  -- E.g., 10.00 for 10%
    expires_at DATE NOT NULL,
    status enum("active","inactive")
);
CREATE TABLE payment_transactions (
    transaction_id VARCHAR(100) PRIMARY KEY,
    order_id VARCHAR(100) NOT NULL,
    payment_method_id VARCHAR(100) NOT NULL,
    amount_paid DECIMAL(10, 2) NOT NULL,
    transaction_type enum("deposit","withdraw")
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status enum("active","inactive")
);
CREATE TABLE user_coins (
  user_id VARCHAR(255) PRIMARY KEY,  -- Foreign key to users table
  total_coins INT DEFAULT 0,         -- Total coins earned by the user
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE earning_tasks (
  task_id VARCHAR(255) PRIMARY KEY,
  task_name VARCHAR(255) NOT NULL,          -- e.g., "Daily Task", "Watch Ads"
  task_type ENUM('daily', 'ads', 'app_install', 'click', 'bonus', 'other') NOT NULL,
  coin_reward INT NOT NULL,                 -- Coins earned for completing the task
  task_limit INT,                           -- Limit on how many times this task can be completed daily (e.g., ads can be watched 5 times)
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE user_task_logs (
  log_id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,            -- Foreign key to users table
  task_id VARCHAR(255) NOT NULL,            -- Foreign key to earning_tasks table
  coins_earned INT NOT NULL,                -- Coins earned for this instance
  task_completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE clothing_sizes (
  size_id VARCHAR(255) PRIMARY KEY,
  size_label VARCHAR(50),  -- e.g., 'S', 'M', 'L', 'XL'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active'
);
CREATE TABLE brands (
  brand_id VARCHAR(255) PRIMARY KEY,
  brand_name VARCHAR(255) UNIQUE,  -- e.g., 'Nike', 'Adidas'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active'
);
CREATE TABLE product_weights (
  weight_id VARCHAR(255) PRIMARY KEY,
  weight_value DECIMAL(10, 2),  -- e.g., 1.5 (in kg)
  weight_unit VARCHAR(10) DEFAULT 'kg',  -- Default weight unit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active'
);
CREATE TABLE product_attributes (
  attribute_id VARCHAR(255) PRIMARY KEY,
  product_id VARCHAR(255),  -- Foreign key referencing products table
  size_id VARCHAR(255),     -- Foreign key referencing clothing_sizes
  brand_id VARCHAR(255),    -- Foreign key referencing brands
  weight_id VARCHAR(255),   -- Foreign key referencing product_weights
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active',
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (size_id) REFERENCES clothing_sizes(size_id),
  FOREIGN KEY (brand_id) REFERENCES brands(brand_id),
  FOREIGN KEY (weight_id) REFERENCES product_weights(weight_id)
);
CREATE TABLE perishable_goods (
  perishable_id VARCHAR(255) PRIMARY KEY,
  product_id VARCHAR(255),  -- Foreign key referencing products table
  perishability_score INT,  -- Score to indicate how perishable the item is (e.g., 1-10 scale)
  refrigerated BOOLEAN DEFAULT FALSE,  -- Does it require refrigeration?
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active',
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE grocery_products (
  grocery_id VARCHAR(255) PRIMARY KEY,
  product_id VARCHAR(255),  -- Foreign key referencing products table
  is_organic BOOLEAN DEFAULT FALSE,  -- Is the product organic?
  freshness_date DATE,  -- Date to indicate freshness
  expiration_date DATE,  -- Expiration date for perishable items
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active',
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE grocery_categories (
  category_id VARCHAR(255) PRIMARY KEY,
  category_name VARCHAR(255) UNIQUE,  -- e.g., 'Fruits', 'Vegetables', 'Dairy Products'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active'
);

CREATE TABLE nutritional_info (
  info_id VARCHAR(255) PRIMARY KEY,
  product_id VARCHAR(255),  -- Foreign key referencing products table
  calories DECIMAL(10, 2),
  protein DECIMAL(10, 2),
  carbohydrates DECIMAL(10, 2),
  fats DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive') DEFAULT 'active',
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

SELECT COUNT(*) AS task_count 
FROM user_task_logs 
WHERE user_id = 'USER_ID' 
  AND task_id = 'TASK_ID' 
  AND DATE(task_completed_at) = CURDATE();
SELECT task_limit 
FROM earning_tasks 
WHERE task_id = 'TASK_ID';
INSERT INTO user_task_logs (log_id, user_id, task_id, coins_earned) 
VALUES ('LOG_ID', 'USER_ID', 'TASK_ID', 'COINS_EARNED');
