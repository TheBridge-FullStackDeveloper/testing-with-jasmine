class PokerPlayer {
  constructor(name = "") {
    this.name = name;
    this.result = [];
  }

  rollDie() {
    const dice = ["A", "8", "9", "J", "Q", "K"];
    let random = Math.floor(Math.random() * 5);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dice[random]) resolve(dice[random]);
        reject;
      }, 300);
    });
  }

  getResult() {
    do {
      this.rollDie();
      this.result.push(this.rollDie);
    } while (this.result.length < 5);
    if (this.result.length > 5) this.result.pop();
  }
}

const getHandName = (player = new PokerPlayer()) => {
  player.getResult();
  let result = player.result;
  console.log(result);
  let sorted = result.sort();
  console.log(sorted);
  if (sorted[0] === sorted[4]) return "five of a kind";
  else {
    return "";
  }
};

const getScore = () => {};

const checkWinner = () => {
  return "";
};
