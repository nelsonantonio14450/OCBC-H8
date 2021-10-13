create table data_staff(
nik int PRIMARY KEY,
nama varchar(50),
alamat varchar(200),
handphone varchar(200));

insert into data_staff(nik, nama, alamat, handphone) VALUES ('82005', 'nelson', 'muara karang', '085210416192');
insert into data_staff(nik, nama, alamat, handphone) VALUES ('82008', 'asd', 'asd asd', '12312312312');

select top 3 * from data_staff

ALTER TABLE data_staff ADD joindate Date ; /*e*/

insert into data_staff(nik, nama, alamat, handphone, joindate) VALUES ('82006', 'asd', 'asd asd', '123123', '2021/8/9');

create table staffoutsource(/*h*/
nik int PRIMARY KEY,
nama varchar(50),
alamat varchar(200),
handphone varchar(200),
joindate Date);

/*i*/
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82001', 'nelson1', 'muara karang', '085210416192', '2021/8/9');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82002', 'nelson2', 'muara karang', '085210416192', '2021/8/9');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82003', 'nelson3', 'muara karang', '085210416192', '2021/8/10');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82004', 'nelson4', 'muara karang', '085210416192', '2021/8/10');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82005', 'nelson5', 'muara karang', '085210416192', '2021/8/10');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82006', 'nelson6', 'muara karang', '085210416192', '2021/8/19');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82007', 'nelson7', 'muara karang', '085210416192', '2021/8/19');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82008', 'nelson8', 'muara karang', '085210416192', '2021/8/19');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82009', 'nelson9', 'muara karang', '085210416192', '2021/8/29');
insert into staffoutsource(nik, nama, alamat, handphone, joindate) VALUES ('82010', 'nelson10', 'muara karang', '085210416192', '2021/8/29');

insert into data_staff(nik, nama, alamat, handphone, joindate) VALUES ('82011', 'asd', 'muara karang', '085210416192', '2021/8/29');


select * from data_staff d full join staffoutsource s on d.joindate = s.joindate where s.joindate = '2021/8/9';/*J*/

select * from data_staff d right join staffoutsource s on d.joindate = s.joindate;

select * from data_staff d left join staffoutsource s on d.joindate = s.joindate;

select * from data_staff d full join staffoutsource s on d.joindate = s.joindate ; /*M*/

select d.nama, d.alamat, s.handphone, s.joindate 
from data_staff d 
left join staffoutsource s on d.joindate = s.joindate
where s.joindate = '2021/8/9';

