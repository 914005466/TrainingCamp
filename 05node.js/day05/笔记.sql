-- 查看所有数据库
SHOW DATABASES;
-- 创建数据库
CREATE DATABASE IF NOT EXISTS xxx;
-- 删除数据库
DROP DATABASE IF EXISTS xxx;
-- 选择使用数据库
USE yunhe;
-- 创建数据表
CREATE TABLE t7(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    username VARCHAR(10) UNIQUE NOT NULL ,
    password VARCHAR(32) NOT NULL ,
    gender ENUM('男','女'),
    country VARCHAR(20) DEFAULT '中国',
    phone CHAR(11) UNIQUE NOT NULL ,
    addtime DATETIME DEFAULT NOW()
);
-- 查看表结构
DESC t7;
-- 查看建表语句
SHOW  CREATE TABLE t7;
-- 增
-- INSERT INTO t7 VALUES (值1,值2,......);
-- 修改
-- UPDATE t7 SET 字段名 = 字段值 ,字段名 = 字段值  WHERE ?
-- 删除
-- DELETE  FROM t7 WHERE ?
-- 查询
-- SELECT * FROM t7;

-- 查询条件
-- > < = != >= <=
-- 根据日期来查询
SELECT * FROM user WHERE add_time < '2024-04-23 00:00:00' ORDER BY add_time;

SELECT * FROM t7 WHERE id > 5;
-- and or
SELECT * FROM  t7 WHERE id > 5 AND gender = '男';
-- between...and
SELECT * FROM  t7 WHERE id BETWEEN 3 AND 5;
-- like
SELECT * FROM t7 WHERE username like '%keyword%';

SELECT * FROM user;
-- 统计符合条件的记录数
-- count(字段名称不加引号)
SELECT COUNT(*) FROM user;
SELECT COUNT(id) AS 总数 FROM user;
SELECT COUNT(phone) AS 总数 FROM user;
# SELECT COUNT(idcard) AS 总数 FROM stu;
-- null 完全不存在
-- '' 有数据 数据为空字符串
SELECT COUNT(*) AS 总数 FROM stu;
SELECT COUNT(*) FROM user WHERE age > 18;
-- sum 求和 年龄求和才有意义
SELECT SUM(age) FROM user; -- 272
SELECT SUM(username) FROM user;
SELECT SUM(age) FROM user WHERE gender = 1; -- 89
-- avg 求平均值
SELECT AVG(age) FROM user;
-- max 最大值
SELECT MAX(age) FROM user;
SELECT username FROM user WHERE age = 88;
-- 子查询 有两条或者多条sql语句嵌套而成,第一条语句的执行结果是第二条语句的执行条件
SELECT username FROM user WHERE age = (SELECT MAX(age) FROM user  );

-- 分组 group by 字段  查询的字段必须是根据分组的字段,根据聚合函数
SELECT gender,count(*),sum(age),max(age),min(age),avg(age),min(add_time) FROM user GROUP BY gender;
-- 分组 group_concat 连接 其他字段连接起来
-- 根据性别分组后 有哪些人
SELECT gender,max(age),group_concat(username) FROM user GROUP BY gender;
-- 使用子查询来查询最大年龄的男生是谁,最的年龄的女生是谁
-- 1.查询最大年龄
SELECT MAX(AGE) FROM USER GROUP BY GENDER;
-- 2.根据年龄查询是哪个人
# SELECT * FROM user WHERE AGE = 38;
# SELECT * FROM user WHERE AGE = 88;
SELECT * FROM user WHERE AGE IN(SELECT MAX(AGE) FROM USER GROUP BY GENDER);

-- order by 字段 根据哪个字段来排序
SELECT * FROM user ORDER BY id; -- 根据id来排序 默认是升序 从小到大
SELECT * FROM user ORDER BY id ASC; -- 根据id来排序 默认是升序 从小到大
SELECT * FROM user ORDER BY id DESC; -- 根据id来排序 降序 从大到小
SELECT * FROM user ORDER BY  age desc ; -- 根据年龄排序
SELECT * FROM user ORDER BY   add_time ; -- 根据时间

-- 根据排序字段来排序
SELECT * FROM user ORDER BY sort_id DESC;
# SELECT * FROM user ;  0,10   10,10
-- like 搜索  ,limit 分页 限制获取数据的条数
-- 1.总的记录数 2.每页多少条 规定 3.一共有几页?2条   向上取整(总记录数/每页条数)
-- 查询第一页 1
# SELECT * FROM user limit 2; -- 默认从0开始
# SELECT * FROM user limit  开始,长度;
SELECT * FROM user LIMIT 0,2;
-- 第二页 2
SELECT * FROM user LIMIT 2,2;
-- 第三页 3
SELECT * FROM user LIMIT 4,2;
-- 第四页 4
SELECT * FROM user LIMIT 6,2;
-- 第四页 5
SELECT * FROM user LIMIT 8,2;
--    (页码-1)*2
-- 200页
SELECT * FROM user LIMIT ?,2;
-- 需求:查询每个专业下的学生
-- 1.内连接 交集
-- 表1 INNER JOIN 表2 ON 条件
-- 表名.id 这个张表的这个id
SELECT * FROM major INNER JOIN student ON student.mid = major.id;
-- 查询字段过多
SELECT major.major_name,student.stu_name FROM major INNER JOIN student ON student.mid = major.id;
-- 查询字段过多 其中一张表的全部字段
SELECT major.id,major.major_name,student.stu_name FROM major INNER JOIN student ON student.mid = major.id;
-- 查询字段过多 其中一张表的全部字段
SELECT major.*,student.stu_name FROM major INNER JOIN student ON student.mid = major.id;
-- 表别名
SELECT m.*,s.stu_name 学生姓名 FROM major  m INNER JOIN student s ON s.mid = m.id;
-- --------------------------------------
-- 左连接 左边的数据全部查出来 没有值的 补null  表1 LEFT JOIN 表2 ON 条件
SELECT m.*,s.stu_name 学生姓名 FROM major  m LEFT JOIN student s ON s.mid = m.id;

-- 右连接 右边的数据全部查出来 没有值的 补null  表1 RIGHT JOIN 表2 ON 条件
SELECT m.*,s.stu_name 学生姓名 FROM major  m RIGHT  JOIN student s ON s.mid = m.id;

SELECT m.*,s.stu_name 学生姓名 FROM student s RIGHT  JOIN major  m  ON s.mid = m.id;




