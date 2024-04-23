  TABLE zzz(
    id INT UNSIGNED COMMENT'id',
    zxy_name VARCHAR(20) COMMENT'姓名',
    num CHAR(11) COMMENT'学号',
    zxy_address VARCHAR(255) COMMENT'地址',
    zxy_time DATETIME,
    sex ENUM('男','女') COMMENT '性别'
);
insert into zzz(id,zxy_name,sex)values(2,'丧彪','女');
insert into zzz values(1,'大壮','22330472225','郑州市金水区','2024-04-23 12:20:00','女');
select * from zzz;
DELETE FROM zzz WHERE id = 22;
update zzz SET zxy_address ='金水区明天花园' WHERE id = 2 ;
truncate zzz;
CREATE TABLE xxx(
    id int UNSIGNED COMMENT'id',
    username VARCHAR(20)COMMENT'用户名' ,
    password varchar(50) COMMENT'密码',
    age TINYINT UNSIGNED COMMENT'年龄',
    is_del TINYINT UNSIGNED
) ;
CREATE TABLE xxx1(
    id int UNSIGNED NOT NULL COMMENT'id',
    username VARCHAR(20) NOT NULL COMMENT'用户名' ,
    password varchar(50) NOT NULL COMMENT'密码',
    age TINYINT UNSIGNED COMMENT'年龄',
    is_del TINYINT UNSIGNED NOT NULL
) ;
CREATE TABLE xxx2(
    id int UNSIGNED NOT NULL COMMENT'id',
    username VARCHAR(20) NOT NULL COMMENT'用户名' ,
    password varchar(50) NOT NULL COMMENT'密码',
    age TINYINT UNSIGNED COMMENT'年龄',
    is_del TINYINT UNSIGNED DEFAULT 0,
    sex ENUM('男','女') COMMENT '性别' DEFAULT '男'
) ;
INSERT INTO xxx2(id,username,password) VALUES(1,'小强','1234');
CREATE TABLE xxx3(
    id int PRIMARY KEY auto_increment,
    username VARCHAR(20) NOT NULL COMMENT'用户名' ,
    password varchar(50) NOT NULL COMMENT'密码',
    age TINYINT UNSIGNED COMMENT'年龄',
    is_del TINYINT UNSIGNED DEFAULT 0,
    sex ENUM('男','女') COMMENT '性别' DEFAULT '男'
) ;
INSERT INTO xxx3(username,password) VALUES('小美','1234');
INSERT INTO xxx3(username,password) VALUES('小壮','1234');
CREATE TABLE xxx4(
    id int PRIMARY KEY auto_increment,
    username VARCHAR(20) NOT NULL UNIQUE COMMENT'用户名' ,
    password varchar(50) NOT NULL COMMENT'密码',
    age TINYINT UNSIGNED COMMENT'年龄',
    is_del TINYINT UNSIGNED DEFAULT 0,
    sex ENUM('男','女') COMMENT '性别' DEFAULT '男'
) ;
INSERT INTO xxx4(username,password) VALUES('小壮','1234');