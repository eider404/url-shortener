CREATE DATABASE urlshortener;
USE urlshortener;

CREATE TABLE url (
  id int(16) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  urlReal varchar(128) NOT NULL,
  urlShort varchar(128) NOT NULL
);
