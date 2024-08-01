USE example;

CREATE TABLE warehouses(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    location VARCHAR(255),
    vehicle_id INT
);

INSERT INTO warehouses(name, location) VALUES ('Medellin Norte', 'Fake street with fake number and fake house');
SELECT * FROM warehouses;

CREATE TABLE drivers(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100), 
    warehouse_id INT,
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);

CREATE TABLE vehicles (
	id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(100) NOT NULL,
    year YEAR,
    driver_id INT,
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

CREATE TABLE shipments(
	id INT PRIMARY KEY AUTO_INCREMENT,
    item VARCHAR(255),
    quantity INT,
    werehouse_id INT,
    vehicle_id INT,
    driver_id INT,
    FOREIGN KEY (werehouse_id) REFERENCES warehouses(id),
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id),
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

ALTER TABLE warehouses
ADD CONSTRAINT fk_warehouses_vehicle_id
FOREIGN KEY (vehicle_id) REFERENCES vehicles(id);