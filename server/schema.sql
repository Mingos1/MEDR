



CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    user_email VARCHAR,
    date_created TIMESTAMP,
    last_login TIMESTAMP
)

CREATE TABLE medication (
    medication_id SERIAL PRIMARY KEY,
    medication_name VARCHAR(255),
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
    user_medication VARCHAR REFERENCES users(username),
    date_created TIMESTAMP,
    last_update TIMESTAMP
)

-- Fake users

INSERT INTO users(user_name, user_password, user_email) VALUES ('john boy', 'kitty123', 'jboy@gmail.com')
