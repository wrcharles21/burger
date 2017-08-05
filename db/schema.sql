CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db (
	ID INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN default false,
	date  TIMESTAMP,
	Primary Key(id)
);


