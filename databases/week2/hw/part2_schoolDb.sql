#School database
SET NAMES utf8mb4;
CREATE database my_school;
USE my_school;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins_date` DATETIME NOT NULL,
  `ends_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL ,
  CONSTRAINT `fk_student` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SELECT * FROM student;
CREATE INDEX name_id ON student (name);
ALTER TABLE student
ADD status ENUM('not-started','ongoing','finished') NOT NULL;