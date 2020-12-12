



CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    user_email VARCHAR,
    date_created TIMESTAMP,
    last_login TIMESTAMP
)

CREATE TABLE medications (
    med_id SERIAL,
    user_id UUID,
    PRIMARY KEY (med_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    medication_name VARCHAR(255) NOT NULL,
    dosage_size INT,
    dosage_unit VARCHAR,   
    dosage INT,
    medication_type VARCHAR,
    taken BOOLEAN,
    duration INT,
    duration_unit VARCHAR,
    morning BOOLEAN,   
    afternoon BOOLEAN,
    evening BOOLEAN,
    date_created TIMESTAMP,
    last_update TIMESTAMP
)

-- Fake users

INSERT INTO users(user_name, user_password, user_email) VALUES ('john boy', 'kitty123', 'jboy@gmail.com')


-- INSERT INTO users(med_id, user_name, user_password, user_email) VALUES ('john boy', 'kitty123', 'jboy@gmail.com')
