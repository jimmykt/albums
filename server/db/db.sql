CREATE TABLE users(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_ VARCHAR(200) NOT NULL
);


INSERT INTO users (first_name, last_name, email, password_)VALUES ('jimmy', 'tam', '123','321');
