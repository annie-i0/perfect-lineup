// The total salary of all players in a lineup may not exceed $45,000
// Lineups may not contain more than 2 players from a single team
// Lineups may not contain more than 3 players from a single game
// Lineups must contain exactly 3 players with the position of 'OF' 
// and must also contain exactly 1 player from each of the following 
// positions: 'P', 'C', '1B', '2B', '3B', 'SS'

// no more then 2 TeamIds are the same
// no more than 3 GameIds are the same
// there are only 3 OF and 1 of every other position


const validateLineup = (lineup) => {
    const sumOfSalary = lineup.reduce(reducerFunction, 0)
    if (sumOfSalary > 45000) {
      return false
    }
    if (lineup.length !== 9) {
      return false
    }
    if (countTeamIds(lineup) === false) {
      return false
    }
    if (countGameIds(lineup) === false) {
      return false
    }
    if (verifyPositions(lineup) === false) {
      return false
    }
      return true
  }  
  const reducerFunction = (total, player) => {
    return player.salary + total
  }
  const countTeamIds = (lineup) => {
    const teamIDs = lineup.map((player) => player.teamId)
    let uniqueIDs = []
    for (let i = 0; i < teamIDs.length; i++) {
      const teamID = teamIDs[i]
      if (!uniqueIDs.includes(teamID)) {
        uniqueIDs.push(teamID)
      }
    }
    let idCounts = []
    for (let i = 0; i < uniqueIDs.length; i++) {
      const uniqueID = uniqueIDs[i]
      let count = teamIDs.filter((teamID) => teamID === uniqueID).length
      idCounts.push(count)
    }
    if (Math.max(...idCounts) > 2) {
      return false
    } else {
      return true
    }
  }
  const countGameIds = (lineup) => {
    const filterbyGameID = lineup.map((player) => player.gameId)
    let filterGame = []
    for (let i = 0; i < filterbyGameID.length; i++) {
      const lineupGame = filterbyGameID[i]
      if (!filterGame.includes(lineupGame)) {
        filterGame.push(lineupGame)
      }
    }
    let numberOfGameRun1 = []
    for (let i = 0; i < filterGame.length; i++) {
      const GameteamID = filterGame[i]
      let numberOfGameRun2 = filterbyGameID.filter((filterbyGameID) => filterbyGameID === GameteamID).length
      numberOfGameRun1.push(numberOfGameRun2)
    }
    if (Math.max(...numberOfGameRun1) > 3) {
      return false
    } else {
      return true
    }
  }
  const verifyPositions = lineup => {
    if(lineup.filter(player => player.position === "OF").length !== 3) {
      return false
    }
  const positionList = ['P', 'C', '1B', '2B', '3B', 'SS']
  const filterPosition = lineup.map(player => player.position) 
  let countPositions = []

  for (let i= 0; i < positionList.length; i++) {
    const position = positionList[i]
    let count = filterPosition.filter(filterPosition => filterPosition === position).length
    countPositions.push(count)
  }
    if (Math.max(...countPositions) > 1) {
      return false
    } else {
      return true
    }
  
  }
   

  module.exports = validateLineup