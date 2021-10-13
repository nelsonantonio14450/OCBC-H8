create table productLines(
productLine int identity(1,1) primary key NOT NULL,
textDescription varchar(100),
htmlDescription varchar(100),
image varchar(100)
);

create table products(
productCode int identity(1,1) NOT NULL,
productName varchar(100),
productLine int NOT NULL,
productScale varchar(50),
productVendor varchar(50),
productDescription varchar(250),
qtyInStock int,
buyPrice int,
MSRP varchar(50),
primary key (productCode),
foreign key (productLine) references productLines(productLine)
)

create table offices(
officeCode int identity(1,1) NOT NULL,
city varchar(50),
phone varchar(13),
addressLine1 varchar(50),
addressLine2 varchar(50),
state varchar(50),
country varchar(50),
postalcode int,
territory varchar(50),
primary key (officeCode)
)

create table employees(
employeeNumber int identity(1,1) NOT NULL,
lastName varchar(50),
firstName varchar(50),
extension varchar(10),
email varchar(50),
officeCode int,
reportsTO int,
jobTitle varchar(50),
primary key (employeeNumber),
foreign key (officeCode) references offices(officeCode),
foreign key (reportsTO) references employees(employeeNumber)
)

create table customers(
customerNumber int identity(1,1) NOT NULL,
customerName varchar(100),
contactLastName varchar(100),
contactFirstName varchar(100),
phone varchar(14),
addressLine1 varchar(100),
addressLine2 varchar(100),
city varchar(50),
state varchar(50),
postalCode int,
country varchar(50),
salesRepEmployeeNumber int NOT NULL,
creditLimit int,
primary key (customerNumber),
foreign key (salesRepEmployeeNumber) references employees(employeeNumber)
)

create table payments(
customerNumber int NOT NULL,
checkNumber int identity(1,1) NOT NULL,
paymentDate date,
amount float,
primary key (customerNumber, checkNumber))

create table orders(
orderNumber int identity(1,1) NOT NULL,
orderDate date,
requiredDate date,
shippedDate date,
status varchar(10),
comments varchar(100),
customerNumber int NOT NULL, 
primary key (orderNumber),
foreign key (customerNumber) references customers(customerNumber)
)

create table orderdetails(
orderNumber int NOT NULL,
productCode int NOT NULL,
quantityOrdered int,
priceEach int,
orderLineNumber int,
primary key (orderNumber , productCode),
foreign key (orderNumber) references orders(orderNumber),
foreign key (productCode) references products(productCode)
)

--productLines
insert into productLines (textDescription, htmlDescription, image) values ('entah', 'https', 'aasdasd');
insert into productLines (textDescription, htmlDescription, image) values ('entah1', 'https', 'aasdasd');
insert into productLines (textDescription, htmlDescription, image) values ('entah2', 'https', 'aasdasd');
insert into productLines (textDescription, htmlDescription, image) values ('entah3', 'https', 'aasdasd');
insert into productLines (textDescription, htmlDescription, image) values ('entah4', 'https', 'aasdasd');

--products
insert into products (productName, productLine, productScale, productVendor,productDescription, qtyInStock, buyPrice, MSRP)
values ('Houndah', 1, '3x4', 'Suzuki', 'mobile', 30, 30000, 'asdasd');
insert into products (productName, productLine, productScale, productVendor,productDescription, qtyInStock, buyPrice, MSRP)
values ('Houndah1', 1, '3x4', 'Suzuki', 'mobile', 30, 30000, 'asdasd');
insert into products (productName, productLine, productScale, productVendor,productDescription, qtyInStock, buyPrice, MSRP)
values ('Houndah1', 2, '3x4', 'Suzuki', 'mobile', 30, 30000, 'asdasd');
insert into products (productName, productLine, productScale, productVendor,productDescription, qtyInStock, buyPrice, MSRP)
values ('Houndah1', 2, '3x4', 'Suzuki', 'mobile', 30, 30000, 'asdasd');
insert into products (productName, productLine, productScale, productVendor,productDescription, qtyInStock, buyPrice, MSRP)
values ('Houndah1', 3, '3x4', 'Suzuki', 'mobile', 30, 30000, 'asdasd');

--offices
insert into offices (city, phone,addressLine1, addressLine2, state,country,postalcode,territory) 
values ('jkt', '018282349234','asd', 'asd', 'javaa', 'indonesia', 14450, 'jakarta utara')
insert into offices (city, phone,addressLine1, addressLine2, state,country,postalcode,territory) 
values ('jkt1', '018282349234','asd', 'asd', 'javaa', 'indonesia', 14450, 'jakarta utara')
insert into offices (city, phone,addressLine1, addressLine2, state,country,postalcode,territory) 
values ('jkt2', '018282349234','asd', 'asd', 'javaa', 'indonesia', 14450, 'jakarta utara')
insert into offices (city, phone,addressLine1, addressLine2, state,country,postalcode,territory) 
values ('jkt3', '018282349234','asd', 'asd', 'javaa', 'indonesia', 14450, 'jakarta utara')
insert into offices (city, phone,addressLine1, addressLine2, state,country,postalcode,territory) 
values ('jkt4', '018282349234','asd', 'asd', 'javaa', 'indonesia', 14450, 'jakarta utara')

--employees
insert into employees (lastName, firstName, extension, email, officeCode, reportsTo, jobTitle) 
values ('Nel', 'Ant', '0123', 'asd@gmail.com', 1, NULL, 'Senior Developer')
insert into employees (lastName, firstName, extension, email, officeCode, reportsTo, jobTitle) 
values ('Nel1', 'Ant', '0123', 'asd@gmail.com', 1, 5, 'Junior Developer')
insert into employees (lastName, firstName, extension, email, officeCode, reportsTo, jobTitle) 
values ('Nel2', 'Ant', '0123', 'asd@gmail.com', 1, 5, 'Junior Developer')
insert into employees (lastName, firstName, extension, email, officeCode, reportsTo, jobTitle) 
values ('Nel3', 'Ant', '0123', 'asd@gmail.com', 1, 2, 'intern Developer')
insert into employees (lastName, firstName, extension, email, officeCode, reportsTo, jobTitle) 
values ('Nel4', 'Ant', '0123', 'asd@gmail.com', 1, 2, 'intern Developer')

--customers
insert into customers (customerName, contactLastName, 
contactFirstName, phone, addressLine1,addressLine2, 
city, state, postalCode, country, salesRepEmployeeNumber, 
creditLimit) 
values ('kuro', 'dya', 'na', '123123132', 'asd', '', 'jkt', 'java', 14450, 'indoneisa', 5, 30000)

insert into customers (customerName, contactLastName, 
contactFirstName, phone, addressLine1,addressLine2, 
city, state, postalCode, country, salesRepEmployeeNumber, 
creditLimit) 
values ('kuro1', 'dya', 'na', '123123132', 'asd', '', 'jkt', 'java', 14450, 'indoneisa', 6, 30000)

insert into customers (customerName, contactLastName, 
contactFirstName, phone, addressLine1,addressLine2, 
city, state, postalCode, country, salesRepEmployeeNumber, 
creditLimit) 
values ('kuro2', 'dya', 'na', '123123132', 'asd', '', 'jkt', 'java', 14450, 'indoneisa', 7, 30000)

insert into customers (customerName, contactLastName, 
contactFirstName, phone, addressLine1,addressLine2, 
city, state, postalCode, country, salesRepEmployeeNumber, 
creditLimit) 
values ('kuro3', 'dya', 'na', '123123132', 'asd', '', 'jkt', 'java', 14450, 'indoneisa', 8, 30000)

insert into customers (customerName, contactLastName, 
contactFirstName, phone, addressLine1,addressLine2, 
city, state, postalCode, country, salesRepEmployeeNumber, 
creditLimit) 
values ('kuro4', 'dya', 'na', '123123132', 'asd', '', 'jkt', 'java', 14450, 'indoneisa', 8, 30000)

--payments
insert into payments (customerNumber, paymentDate, amount) 
values (1, '2021/10/13', 50000)
insert into payments (customerNumber, paymentDate, amount) 
values (2, '2021/10/13', 30000)
insert into payments (customerNumber, paymentDate, amount) 
values (3, '2021/10/15', 70000)
insert into payments (customerNumber, paymentDate, amount) 
values (1, '2021/10/15', 30000)

--orders
insert into orders (orderDate, requiredDate, shippedDate, status, comments, customerNumber) 
values ('2021/9/21', '2021/9/23', '2021/9/25', 'shipped', '-', 1)
insert into orders (orderDate, requiredDate, shippedDate, status, comments, customerNumber) 
values ('2021/9/21', '2021/9/23', '2021/9/25', 'recieved', '-', 2)
insert into orders (orderDate, requiredDate, shippedDate, status, comments, customerNumber) 
values ('2021/9/21', '2021/9/23', '2021/9/25', 'shipped', '-', 3)
insert into orders (orderDate, requiredDate, shippedDate, status, comments, customerNumber) 
values ('2021/9/21', '2021/9/23', '2021/9/25', 'recieved', '-', 4)

--orderdetails
insert into orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber) 
values (1, 1, 30, 30000, 1)
insert into orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber) 
values (2, 2, 30, 90000, 2)
insert into orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber) 
values (3, 3, 30, 70000, 3)
insert into orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber) 
values (4, 4, 30, 40000, 6)

