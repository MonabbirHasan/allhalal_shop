-- Table for User Profiles (Patients and Doctors)
CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_phone VARCHAR(255),
    user_password VARCHAR(255),
    user_role ENUM('patient', 'doctor') NOT NULL,
    user_specialty VARCHAR(255),
    user_address TEXT,
    user_image VARCHAR(255),
    status INT DEFAULT 1
);

-- Table for Appointments
CREATE TABLE appointments (
    appointment_id VARCHAR(255) PRIMARY KEY,
    patient_id VARCHAR(255),
    doctor_id VARCHAR(255),
    appointment_date DATETIME,
    appointment_status ENUM('scheduled', 'completed', 'cancelled') DEFAULT 'scheduled',
    notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES users(user_id),
    FOREIGN KEY (doctor_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Prescriptions
CREATE TABLE prescriptions (
    prescription_id VARCHAR(255) PRIMARY KEY,
    appointment_id VARCHAR(255),
    doctor_id VARCHAR(255),
    patient_id VARCHAR(255),
    prescription_date DATETIME,
    medication TEXT,
    dosage TEXT,
    instructions TEXT,
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (doctor_id) REFERENCES users(user_id),
    FOREIGN KEY (patient_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Calls
CREATE TABLE calls (
    call_id VARCHAR(255) PRIMARY KEY,
    appointment_id VARCHAR(255),
    caller_id VARCHAR(255),
    receiver_id VARCHAR(255),
    call_start DATETIME,
    call_end DATETIME,
    call_duration INT,
    call_recording VARCHAR(255),
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (caller_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Specialties
CREATE TABLE specialties (
    specialty_id VARCHAR(255) PRIMARY KEY,
    specialty_name VARCHAR(255),
    description TEXT,
    status INT DEFAULT 1
);

-- Table for Medical Records
CREATE TABLE medical_records (
    record_id VARCHAR(255) PRIMARY KEY,
    patient_id VARCHAR(255),
    record_date DATETIME,
    record_details TEXT,
    FOREIGN KEY (patient_id) REFERENCES users(user_id),
    status INT DEFAULT 1
);

-- Table for Ratings
CREATE TABLE ratings (
    rating_id VARCHAR(255) PRIMARY KEY,
    appointment_id VARCHAR(255),
    doctor_id VARCHAR(255),
    patient_id VARCHAR(255),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (doctor_id) REFERENCES users(user_id),
    FOREIGN KEY (patient_id) REFERENCES users(user_id),
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
