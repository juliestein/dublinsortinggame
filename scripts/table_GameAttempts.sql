
-- --------------------------------------------------------

--
-- Table structure for table `GameAttempts`
--

CREATE TABLE `GameAttempts` (
  `GameId` int NOT NULL,
  `DatePlayed` datetime NOT NULL,
  `Score` int NOT NULL,
  `IsCompleted` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
