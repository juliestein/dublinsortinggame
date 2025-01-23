
-- --------------------------------------------------------

--
-- Table structure for table `GameDetails`
--

CREATE TABLE `GameDetails` (
  `GameId` int NOT NULL,
  `ItemId` int NOT NULL,
  `IsCorrect` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
