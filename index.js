
// The total salary of all players in a lineup may not exceed $45,000
// Lineups may not contain more than 2 players from a single team
// Lineups may not contain more than 3 players from a single game
// Lineups must contain exactly 3 players with the position of 'OF' 
// and must also contain exactly 1 player from each of the following 
// positions: 'P', 'C', '1B', '2B', '3B', 'SS'


 const validateLineup = (lineup) => {
    const reducerFunction = (total, player) => {
        return player.salary + total
    }
    const sumOfSalary = lineup.reduce(reducerFunction, 0)
    if(sumOfSalary > 45000) {
        return false
    }
    if(lineup.length !== 9) {
        return false
    }
}

    module.exports = validateLineup