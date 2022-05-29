DROP TABLE IF EXISTS employer;
CREATE TABLE employer (
  employerId INT PRIMARY KEY,
  companyName VARCHAR(30),
  industry VARCHAR(20)
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  employeeId INT PRIMARY KEY,
  fullname VARCHAR(30),
  age INT,
  employerId INT
);
