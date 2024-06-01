CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
)
;
INSERT INTO `products` (`id`, `name`, `description`, `price`) VALUES
(1, 'Product 1', 'description Product 1', 10.00),
(2, 'Product 2', 'description Product 2', 20.00),
(3, 'Product 3', 'description Product 3', 30.00),
(4, 'Product 4', 'description Product 4', 40.00),
(5, 'Product 5', 'description Product 5', 50.00),
(6, 'Product 6', 'description Product 6', 60.00),
(7, 'Product 7', 'description Product 7', 70.00),
(8, 'Product 8', 'description Product 8', 80.00),
(9, 'Product 9', 'description Product 9', 90.00),
(10, 'Product 10', 'description Product 10', 100.00),
(11, 'Product 11', 'description Product 11', 110.00);