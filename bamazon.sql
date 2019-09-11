	DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(45) NULL,
department VARCHAR(45) NULL,
price DECIMAL(10,2) NULL,
quantity_initial INT NULL,
PRIMARY KEY(id)
);

INSERT INTO products(product, department, price, quantity)
VALUES ("2020 BMW M5 COMPETITION", "cars", 120000, 14);

INSERT INTO products(product, department, price, quantity)
VALUES ("2020 MERCEDES BENZ GT63 AMG", "cars", 150000, 28);

INSERT INTO products(product, department, price, quantity)
VALUES ("2019 FORD MUSTANG GT", "cars", 41000, 46);

INSERT INTO products(product, department, price, quantity)
VALUES ("2019 AUDI RS7", "cars", 98000, 30);

INSERT INTO products(product, department, price, quantity)
VALUES ("2019 BMW M4 GTS", "cars", 110000, 29);

INSERT INTO products(product, department, price, quantity)
VALUES ("2019 AUDI R8 PLUS", "cars", 123000, 26);

INSERT INTO products(product, department, price, quantity)
VALUES ("2019 NISSAN GTR", "cars", 87000, 42);

INSERT INTO products(product, department, price, quantity)
VALUES ("2020 CORVETTE C8", "cars", 67000, 15);

INSERT INTO products(product, department, price, quantity)
VALUES ("2020 PORSCHE 718 SPYDER", "cars", 170000, 24);

INSERT INTO products(product, department, price, quantity)
VALUES ("2019 TESLA MODEL S", "cars", 75000, 28);