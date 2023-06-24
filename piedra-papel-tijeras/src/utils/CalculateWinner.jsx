const playerCanBeat = (player, opponent) => {
    return player.betterThan.includes(opponent.name);
  };
  
export const calculateWinner = (player1, player2) => {
if (player1.name === player2.name) {
    return "empate";
} else if (playerCanBeat(player1, player2)) {
    return player1;
} else {
    return player2;
}
};