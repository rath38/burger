
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	dates date NOT NULL,
	PRIMARY KEY (id)
);
