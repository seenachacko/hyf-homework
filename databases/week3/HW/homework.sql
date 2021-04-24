SET NAMES utf8mb4;
CREATE DATABASE meal_sharing;
USE meal_sharing;
#table creation for meal ,reservation,review 
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` datetime NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` decimal(19,4) NOT NULL,
  `created_date` date NOT NULL
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned NOT NULL DEFAULT 0,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` date NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,  
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT  PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` date NOT NULL default (CURRENT_DATE),  
  CONSTRAINT `fk_meals_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  #datas for meal table
INSERT INTO meal (title, description, location,`when`, max_reservations, price, created_date) 
VALUES('Beaf steak', 'juicy steak with creamy sauce', 'Herlev', '2021-04-20 18:00:00', 7, 120.50, '2021-04-20' );
INSERT INTO meal (title, description, location,`when`, max_reservations, price, created_date) 
VALUES('Chicken BBQ', 'super crispy chicken with french fries and salads', 'Norreport', '2021-04-21 18:00:00', 10, 200, '2021-04-21');
INSERT INTO meal (title, description, location,`when`, max_reservations, price, created_date) 
VALUES('Rødgrød med fløde', 'The traditional Danish Red Berry Pudding is just different red berries and sugar and super tasty', 'Herlev', '2021-04-22 18:00:00', 11, 100.50, '2021-04-22' );
INSERT INTO meal (title, description, location,`when`, max_reservations, price, created_date) 
VALUES('Rød pasta', 'tomato creamy sauce with fried chicken', 'Christanshavn', '2021-04-23 18:00:00', 90, 120.50, '2021-04-13' );
INSERT INTO meal (title, description, location,`when`, max_reservations, price, created_date) 
VALUES('chicken biriyani', 'super tasty indian meal with chicken rich aroma', 'Hillerod', '2021-04-24 18:00:00',500, 120.50, '2021-04-24' );
#data for reservation table 
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 1, NOW(), '256447', 'chris', 'chris@funnymail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (10, 2,'2021-04-21' , '25846427', 'alias', 'alias@funnymail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (8, 3,'2021-04-22' , '25846427', 'lars', 'larss@funnymail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (15, 4,'2021-04-23' , '25846427', 'thomas', 'thomas@funnymail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (400, 5,'2021-04-24' , '25846427', 'leo', 'leo@funnymail.com');
#data for review table
INSERT INTO review (title, description, meal_id, stars)
VALUES ('best impressions', 'Hospitable hosts, delicious dishes, beautiful presentation',1, 5);
INSERT INTO review (title, description, meal_id, stars)
VALUES ('good tasty food', 'super tasty, delicious dishes, beautiful presentation',2,4 );
INSERT INTO review (title, description, meal_id, stars)
VALUES ('super,good hospitality', 'super tasty, delicious dishes, beautiful presentation',3,5);
INSERT INTO review (title, description, meal_id, stars)
VALUES ('not well cooked', 'got sick,row taste',4,1 );
INSERT INTO review (title, description, meal_id, stars)
VALUES ('super tasty,delicious.', 'super tasty fantastic presentation,good employees',5,5);

