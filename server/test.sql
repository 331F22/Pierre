SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `volunteers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(16) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `email_address` varchar(32) DEFAULT NULL,
  `time_in` datetime DEFAULT NULL,
  `ski_club` varchar(32) DEFAULT NULL
) CHARSET=utf8;


INSERT INTO `volunteers` (`id`, `first_name`, `last_name`, `email_address`, `time_in`, `ski_club`) VALUES
(1, 'Keri', 'Hallau', 'keri.hallau@montana.edu', '2022-01-06 09:00:00', 'Bridger Ski Foundation'),
(2, 'Britney', 'Gibbs', 'brit@demo.com', '2022-01-06 12:39:00', 'Montana Adventure Club'),
(3, 'Daniel', 'DeFrance', 'dan@gmail.com', '2022-01-06 11:21:00', 'Snow Travelers Snowshoe Club'),
(4, 'Romy', 'Lambert', 'Lam4@yahoo.com', '2022-01-06 09:00:00', 'Kalispell Ski Club'),
(5, 'Leah', 'Mckinney', 'jeannokon@hotmail.com', '2022-01-06 09:00:00', 'Glacier Nordic Club'),
(7, 'Leah', 'Mckinney', 'jeannokon@hotmail.com', '2022-01-09 09:00:00', 'Glacier Nordic Club');



COMMIT;
