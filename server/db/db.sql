
CREATE TABLE liked (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    image_id INT NOT NULL
);


CREATE TABLE users (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_ VARCHAR(200) NOT NULL,
    liked BIGINT REFERENCES liked (user_id)
);


INSERT INTO users (first_name, last_name, email, password_)VALUES ('jimmy', 'tam', '123','123');
INSERT INTO users (first_name, last_name, email, password_)VALUES ('jon', 'morris', '222','222');
INSERT INTO users (first_name, last_name, email, password_)VALUES ('sally', 'clark', '333','333');


SELECT * FROM liked;

SELECT * FROM users;


drop table users;
drop table liked;