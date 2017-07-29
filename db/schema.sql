CREATE DATABASE burgers_db;

CREATE TABLE burgers_db (
	ID int NOT NULL,
	burgerName varchar(255) NOT NULL,
	devoured boolean NOT NULL,
	dateCreated   TIMESTAMP,
	PrimaryKey(id)
);