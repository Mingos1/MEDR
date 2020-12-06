
CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR,
    email_verified BOOLEAN,
    date_created TIMESTAMP,
    last_login TIMESTAMP
)

CREATE TABLE medication (
    mid SERIAL PRIMARY KEY,
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
