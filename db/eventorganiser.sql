-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Jún 09. 19:57
-- Kiszolgáló verziója: 5.7.17
-- PHP verzió: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `eventorganiser`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `events`
--

CREATE TABLE `events` (
  `EventID` int(11) NOT NULL,
  `EventName` varchar(50) DEFAULT NULL,
  `EventStart` date DEFAULT NULL,
  `EventEnd` date DEFAULT NULL,
  `EventLocation` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `events`
--

INSERT INTO `events` (`EventID`, `EventName`, `EventStart`, `EventEnd`, `EventLocation`) VALUES
(3, 'Pls work', '2022-05-11', '2022-05-13', 'Itt'),
(4, 'Pls work1', '2022-05-12', '2022-05-12', 'Itt'),
(72, 'My Latest Event', '2022-06-11', '2022-06-12', 'U\'ll have to find out :P'),
(7, 'Pls work3', '2022-05-11', '2022-05-12', 'Itt'),
(71, 'Pls work100', '2022-06-10', '2022-06-11', 'Itt'),
(9, 'Pls work4', '2022-05-11', '2022-05-12', 'Itt'),
(10, 'Pls work5', '2022-05-11', '2022-05-12', 'Itt'),
(11, 'Pls work6', '2022-05-11', '2022-05-12', 'Itt'),
(12, 'Pls work7', '2022-05-11', '2022-05-12', 'Itt'),
(13, 'Pls work8', '2022-05-11', '2022-05-12', 'Itt'),
(14, 'Pls work9', '2022-05-11', '2022-05-12', 'Itt'),
(15, 'Pls work10', '2022-05-11', '2022-05-12', 'Itt'),
(16, 'Pls work11', '2022-05-11', '2022-05-12', 'Itt'),
(17, 'Pls work12', '2022-05-11', '2022-05-12', 'Itt'),
(18, 'Pls work13', '2022-05-11', '2022-05-12', 'Itt'),
(19, 'Pls work14', '2022-05-12', '2022-05-12', 'Itt'),
(20, 'Pls work15', '2022-05-12', '2022-05-12', 'Itt'),
(21, 'Pls work16', '2022-05-12', '2022-05-12', 'Itt'),
(22, 'Pls work17', '2022-05-12', '2022-05-13', 'Itt'),
(23, 'Pls work18', '2022-05-12', '2022-05-14', 'Itt'),
(24, 'Pls work19', '2022-05-12', '2022-05-15', 'Itt'),
(25, 'Pls work20', '2022-05-13', '2022-05-15', 'Itt'),
(26, 'Pls work21', '2022-05-13', '2022-05-15', 'Itt'),
(27, 'Pls work22', '2022-05-13', '2022-05-15', 'Itt'),
(28, 'Pls work23', '2022-05-13', '2022-05-15', 'Itt'),
(29, 'Pls work24', '2022-05-13', '2022-05-15', 'Itt'),
(30, 'Pls work25', '2022-05-12', '2022-05-15', 'Itt'),
(31, 'Pls work26', '2022-05-13', '2022-05-15', 'Itt'),
(32, 'Pls work27', '2022-05-13', '2022-05-15', 'Itt'),
(33, 'Pls work28', '2022-05-13', '2022-05-15', 'Itt'),
(34, 'Pls work29', '2022-05-12', '2022-05-15', 'Itt'),
(35, 'Pls work30', '2022-05-13', '2022-05-15', 'Itt'),
(36, 'Pls work31', '2022-05-13', '2022-05-15', 'Itt'),
(37, 'Pls work32', '2022-05-13', '2022-05-15', 'Itt'),
(38, 'Pls work33', '2022-05-12', '2022-05-15', 'Itt'),
(39, 'Pls work34', '2022-05-13', '2022-05-15', 'Itt'),
(40, 'Pls work35', '2022-05-13', '2022-05-15', 'Itt'),
(41, 'Pls work36', '2022-05-12', '2022-05-15', 'Itt'),
(42, 'Pls work37', '2022-05-12', '2022-05-15', 'Itt'),
(43, 'Pls work38', '2022-05-12', '2022-05-15', 'Itt'),
(44, 'Pls work39', '2022-05-12', '2022-05-15', 'Itt'),
(45, 'Pls work40', '2022-05-12', '2022-05-15', 'Itt'),
(46, 'Pls work41', '2022-05-12', '2022-05-15', 'Itt'),
(47, 'Pls work42', '2022-05-12', '2022-05-15', 'Itt'),
(48, 'Pls work43', '2022-05-13', '2022-05-15', 'Itt'),
(49, 'Pls work44', '2022-05-13', '2022-05-15', 'Itt'),
(50, 'Pls work45', '2022-05-13', '2022-05-15', 'Itt'),
(51, 'Pls work46', '2022-05-12', '2022-05-15', 'Itt'),
(52, 'Pls work47', '2022-05-12', '2022-05-15', 'Itt'),
(53, 'Pls work48', '2022-05-12', '2022-05-15', 'Itt'),
(54, 'Pls work49', '2022-05-13', '2022-05-15', 'Itt'),
(55, 'Pls work50', '2022-05-13', '2022-05-15', 'Itt'),
(56, 'Pls work51', '2022-05-13', '2022-05-15', 'Itt'),
(57, 'Pls work52', '2022-05-13', '2022-05-15', 'Itt'),
(58, 'Pls work53', '2022-05-13', '2022-05-15', 'Itt'),
(59, 'Pls work54', '2022-05-12', '2022-05-15', 'Itt'),
(60, 'Pls work55', '2022-05-12', '2022-05-15', 'Itt'),
(61, 'Pls work56', '2022-05-13', '2022-05-15', 'Itt'),
(62, 'Pls work57', '2022-05-13', '2022-05-15', 'Itt'),
(63, 'Pls work58', '2022-05-13', '2022-05-15', 'Itt'),
(64, 'Pls work59', '2022-05-13', '2022-05-15', 'Itt'),
(65, 'The best event ever', '2022-05-14', '2022-05-14', 'The best location'),
(66, 'The best event ever1', '2022-05-14', '2022-05-14', 'The best location'),
(67, 'The best event ever2', '2022-05-14', '2022-05-14', 'The best location'),
(68, 'Pls work o', '2022-05-17', '2022-05-18', 'Itthon'),
(69, 'asd', '2022-05-17', '2022-05-20', 'asd'),
(70, 'uj evetn', '2022-05-23', '2022-05-26', 'Itt');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `joined`
--

CREATE TABLE `joined` (
  `UserID` int(11) NOT NULL,
  `EventID` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `joined`
--

INSERT INTO `joined` (`UserID`, `EventID`) VALUES
(6, 3),
(6, 4),
(6, 7),
(8, 3),
(8, 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `photos`
--

CREATE TABLE `photos` (
  `PhotoID` int(11) NOT NULL,
  `Path` varchar(100) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `EventID` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `photos`
--

INSERT INTO `photos` (`PhotoID`, `Path`, `UserID`, `EventID`) VALUES
(35, 'upload_13eed6fdb388d771aab400c150a79a64.png', 6, 3),
(36, 'upload_f8e61d99f0b631c381f3e41a0e61eb92.png', 8, 3),
(37, 'upload_a6aee79cd8382ece72054b9a5db5f709.png', 8, 3),
(38, 'upload_d117c5976ab018c86077d6f8c03607e0.png', 8, 3),
(39, 'upload_4d3c5ff33352d7bf57d4bc5d24f1b467.png', 8, 3),
(40, 'upload_b2c0c578ffb01c073838d0e589cf27e7.png', 6, 3),
(41, 'upload_76db36378659c5f886398be0c7b83012.png', 6, 3),
(42, 'upload_977e8b96bc831e7a73f0b7d9ec83c69c.png', 6, 3),
(43, 'upload_14827566858f67bef6149540c8226564.png', 6, 3),
(44, 'upload_60f9be0410b47d56d446bf8c50cd9973.png', 6, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tasks`
--

CREATE TABLE `tasks` (
  `TaskID` int(11) NOT NULL,
  `TaskName` varchar(50) DEFAULT NULL,
  `Posted` date DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  `Done` date DEFAULT NULL,
  `Status` varchar(50) DEFAULT 'ongoing',
  `EventID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `tasks`
--

INSERT INTO `tasks` (`TaskID`, `TaskName`, `Posted`, `Deadline`, `Done`, `Status`, `EventID`, `UserID`) VALUES
(1, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(2, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(3, 'asa', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(4, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(5, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(6, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(7, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(8, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(9, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(10, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(11, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(12, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(13, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(14, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 7),
(15, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(16, 'asd', '2022-06-09', '2022-06-11', NULL, 'ongoing', 3, 6),
(17, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(18, 'asd', '2022-06-09', '2022-06-11', NULL, 'ongoing', 3, 6),
(19, 'asd', '2022-06-09', '2022-06-11', NULL, 'ongoing', 3, 6),
(20, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(21, 'asd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(22, 'asd', '2022-06-09', '2022-06-11', NULL, 'ongoing', 3, 6),
(23, 'sd', '2022-06-09', '2022-06-10', NULL, 'ongoing', 3, 6),
(24, 'fgasdg', '2022-06-09', '2022-06-10', NULL, 'ongoing', 4, 8),
(25, 'asasdg', '2022-06-09', '2022-06-10', NULL, 'ongoing', 4, 6),
(26, 'asd34', '2022-06-09', '2022-06-11', NULL, 'ongoing', 3, 6);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(50) DEFAULT NULL,
  `UserType` varchar(50) DEFAULT NULL,
  `Salt` varchar(30) NOT NULL,
  `Password` varchar(70) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`UserID`, `Username`, `UserType`, `Salt`, `Password`) VALUES
(6, 'admin', 'user', '$2b$10$DZfjGXRtPScz4Lk4AIanZ.', '$2b$10$DZfjGXRtPScz4Lk4AIanZ.MeqE2si3y9B7XmoFg6DubTLUkEGKACi'),
(7, 'admin1', 'user', '$2b$10$7vT7cqOdPI.Webh6ng4L.e', '$2b$10$7vT7cqOdPI.Webh6ng4L.e6GESgNCytQeoxeM4NGUJnZXx5Iszweq'),
(8, 'admin2', 'user', '$2b$10$io.1pBn5ovw7z/ybo8b4B.', '$2b$10$io.1pBn5ovw7z/ybo8b4B.4b1CyxoRRo/EeLBgbG7AEJcyioAPU0G'),
(9, 'user1', 'user', '$2b$10$STP9FyJ5MqUgbNNMRUH/k.', '$2b$10$STP9FyJ5MqUgbNNMRUH/k.muU1HtI8FI.1PoKh7a/Je1OD.C7jwia');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`EventID`);

--
-- A tábla indexei `joined`
--
ALTER TABLE `joined`
  ADD PRIMARY KEY (`UserID`,`EventID`);

--
-- A tábla indexei `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`PhotoID`);

--
-- A tábla indexei `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`TaskID`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `events`
--
ALTER TABLE `events`
  MODIFY `EventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT a táblához `photos`
--
ALTER TABLE `photos`
  MODIFY `PhotoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT a táblához `tasks`
--
ALTER TABLE `tasks`
  MODIFY `TaskID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
