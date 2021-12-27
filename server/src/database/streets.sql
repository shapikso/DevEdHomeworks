CREATE TABLE streets(
id serial PRIMARY KEY,
name text not null
);

CREATE TABLE persons(
id serial PRIMARY KEY,
first_name text not null,
last_name text not null,
age integer not null,
street_id integer,
FOREIGN KEY (street_id) REFERENCES streets(id)
);

INSERT INTO streets(id, "name")
VALUES (1,'Пушкина'),
(2,'Первая'),
(3,'Ленина'),
(4,'проспект Правды'),
(5,'Летчиков');

INSERT INTO persons(id, first_name, last_name, age,street_id)
VALUES (1,'Егор','Чепушня',33,1),
(2,'Арчи','Сопля',42,1),
(3,'Ричи','Киргиз',26,2),
(4,'Гоша','Мусорской',29,2),
(5,'Павел','Суходрищев',29,3),
(6,'Болд','Забор',49,3),
(7,'Толян','Глист',35,4),
(8,'Вася','Вялый',16,4),
(9,'Денис','Косяк',49,5),
(10,'Петр','Монгол',55,5),
(11,'Изя','Жирный',34, null),
(12,'Мотвей','Везучий',20, null);