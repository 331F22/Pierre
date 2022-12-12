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

INSERT INTO `volunteers` (`first_name`, `last_name`, `email_address`, `time_in`, `ski_club`) VALUES
('Keri', 'Hallau', 'keri.hallau@montana.edu', '2022-1-6 9:00:00', 'Bridger Ski Foundation'),
( 'Britney', 'Gibbs', 'brit@demo.com', '2022-1-6 12:39:00', 'Montana Adventure Club'),
( 'Daniel', 'DeFrance', 'dan@gmail.com', '2022-1-6 11:21:00', 'Snow Travelers Snowshoe Club'),
( 'kjsdf', 'asdf', 'sdfsdfsdf', '2022-1-6 9:00:00', NULL),
( 'asdf', 'sdffffff', 'ffffff', '2022-1-6 9:00:00', 'Glacier Nordic Club');

COMMIT;
