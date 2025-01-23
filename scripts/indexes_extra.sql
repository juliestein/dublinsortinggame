
--
-- Indexes for dumped tables
--

--
-- Indexes for table `GameAttempts`
--
ALTER TABLE `GameAttempts`
  ADD PRIMARY KEY (`GameId`);

--
-- Indexes for table `GameDetails`
--
ALTER TABLE `GameDetails`
  ADD KEY `GameIdIndex` (`GameId`),
  ADD KEY `ItemIdIndex` (`ItemId`);

--
-- Indexes for table `GameItems`
--
ALTER TABLE `GameItems`
  ADD PRIMARY KEY (`ItemId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `GameAttempts`
--
ALTER TABLE `GameAttempts`
  MODIFY `GameId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `GameItems`
--
ALTER TABLE `GameItems`
  MODIFY `ItemId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `GameDetails`
--
ALTER TABLE `GameDetails`
  ADD CONSTRAINT `GameIdFK` FOREIGN KEY (`GameId`) REFERENCES `GameAttempts` (`GameId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `ItemIdFK` FOREIGN KEY (`ItemId`) REFERENCES `GameItems` (`ItemId`) ON DELETE RESTRICT ON UPDATE RESTRICT;
