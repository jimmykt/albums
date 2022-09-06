CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_ VARCHAR(200) NOT NULL,
    liked BIGINT REFERENCES liked (user_id)
);


INSERT INTO users (first_name, last_name, email, password_)VALUES ('jimmy', 'tam', '123','123');
INSERT INTO users (first_name, last_name, email, password_)VALUES ('jon', 'morris', '222','222');
INSERT INTO users (first_name, last_name, email, password_)VALUES ('sally', 'clark', '333','333');


CREATE TABLE liked (
    user_id INT PRIMARY KEY NOT NULL,
    image_id VARCHAR(50) NOT NULL
);

SELECT * FROM liked;

SELECT * FROM users;