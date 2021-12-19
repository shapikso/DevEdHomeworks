CREATE TABLE universities(
id serial PRIMARY KEY,
name text not null
);

CREATE TABLE user_un (
id serial PRIMARY KEY,
name text not null,
surname text not null,
role text not null,
university_id integer,
FOREIGN KEY (university_id) REFERENCES universities(id)
);

CREATE TABLE students(
id serial PRIMARY KEY,
student_name text not null,
student_surname text not null,
university_id integer,
FOREIGN KEY (university_id) REFERENCES universities(id),
);

CREATE TABLE coures(
id serial PRIMARY KEY,
"name" text not null,
FOREIGN KEY (teacher_id) REFERENCES user_un(id)
);

CREATE TABLE courses_marks(
id serial PRIMARY KEY,
mark integer not null,
student_id integer not null,
FOREIGN KEY (student_id) REFERENCES students(id),
course_id integer not null,
FOREIGN KEY (course_id) REFERENCES courses(id));

INSERT INTO user_un("name", surname,"role",university_id)
VALUES ('Галина',	'Кухар',	'учитель',	1),
VALUES ('Юлия',	'Череп',	'учитель',	2);

INSERT INTO universities("name")
VALUES ('НГУ'),
('ДНУ');
	

INSERT INTO courses("name",teacher_id )
VALUES ('Базы данных',1),
('Теория алгоритмов',1),
('Дискретная математика',1);

insert into students(student_name,student_surname, university_id )
VALUES ('Егор','Чепушня',1),
('Арчи','Сопля',1),
('Ричи','Киргиз',1),
('Гоша','Мусорской',1),
('Павел','Суходрищев',1),
('Болд','Забор',2),
('Толян','Глист',2),
('Вася','Вялый',2);

insert into courses_marks(mark, student_id,course_id)
VALUES (80,1,1),
(90,1,1),
(60,1,1),
(90,2,1),
(70,2,1),
(88,2,1),
(88,3,1),
(88,4,1),
(80,1,2),
(90,1,2),
(60,1,2),
(90,2,2),
(70,2,2),
(88,2,2),
(88,3,2),
(88,4,2);

select * from courses_marks;
select * from courses;

delete from courses_marks where id = 1;
delete from courses where id = 1;