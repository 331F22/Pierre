-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2022 at 06:17 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db47`
--

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(16) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `email_address` varchar(32) DEFAULT NULL,
  `time_in` datetime DEFAULT NULL,
  `ski_club` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`id`, `first_name`, `last_name`, `email_address`, `time_in`, `ski_club`) VALUES
(1, 'Keri', 'Hallau', 'keri.hallau@montana.edu', '2022-01-06 09:00:00', 'Bridger Ski Foundation'),
(2, 'Britney', 'Gibbs', 'brit@demo.com', '2022-01-06 12:39:00', 'Montana Adventure Club'),
(3, 'Daniel', 'DeFrance', 'dan@gmail.com', '2022-01-06 11:21:00', 'Snow Travelers Snowshoe Club'),
(4, 'Romy', 'Lambert', 'Lam4@yahoo.com', '2022-01-06 09:00:00', 'Kalispell Ski Club'),
(5, 'Leah', 'Mckinney', 'jeannokon@hotmail.com', '2022-01-06 09:00:00', 'Glacier Nordic Club');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
