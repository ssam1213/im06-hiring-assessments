// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function (players) {
    var result = [];
    for(var i=0; i<this.players.length; i++){
      result.push(this.players[i].name + 'plays basketball')
    }
    return result
  }
};

console.log(sport.playerNames());
