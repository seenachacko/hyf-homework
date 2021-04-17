SET NAMES utf8mb4;
CREATE database onilne_market;
USE onilne_market;

CREATE TABLE `customer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order_status`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `status_name` varchar(255) NOT NULL 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_date` DATETIME NOT nULL,
   `destination` varchar(255) NOT NULL,
   `order_status_id` int(10) unsigned NOT NULL ,
   CONSTRAINT `fk_order_status` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#junction
CREATE TABLE `custumer_order`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`customer_id` int(10) unsigned NOT NULL,
`order_id` int(10) unsigned NOT NULL,
CONSTRAINT `fk_customerid` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_orderid` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

