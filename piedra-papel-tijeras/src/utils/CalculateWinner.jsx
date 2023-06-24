const playerCanBeat = (player, opponent) => {
    return player.leGanaA.includes(opponent.nombre);
};
  
export const calculateWinner = (player1, player2) => {
if (player1.nombre === player2.nombre) {
    return "empate";
} else if (playerCanBeat(player1, player2)) {
    return player1;
} else {
    return player2;
}
};