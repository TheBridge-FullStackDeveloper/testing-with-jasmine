class PokerPlayer {
  constructor(name="", result=[]) {
    this.name = name;
    this.result = result;
  }

  rollDie() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const pickedCard = dice[Math.floor(Math.random() * dice.length)];
          resolve(pickedCard);
          return;
        }, 300);
      } catch (error) {
        console.log(error);
      }
    })
  }

  async getResult() {
    for(let i=0;i < 5;i++){
      const pickedCard = await this.rollDie();
      this.result.length < 5 && this.result.push(pickedCard);
    }
  }
}

const getHandName = (result = []) => {
  const hand = diceCounter(result);
  let handName = "";
  if(isFiveOfAKind(values(hand))){
    handName = "five of a kind";
  } else if(isFourOfAKind(values(hand))){
    handName = "four of a kind";
  } else if(isFullHouse(values(hand))){
    handName = "full house";
  } else if(isThreeOfAKind(values(hand))){
    handName = "three of a kind";  
  } else if(isTwoPair(values(hand))){
    handName = "two pair";
  } else if(isOnePair(values(hand))){
    handName = "one pair";
  } else {
    highCard = getHighestDie(result);
    handName = keys(highCard)[0];
  }
  
  return handName;
}

const getScore = (result = []) => {
  let handName = getHandName(result);
  let parsedHandName = handName.replaceAll(" ","_");
  return scorings[parsedHandName];
}

const checkWinner = (player1 = new PokerPlayer(), player2 = new PokerPlayer()) => {
  const scorePlayer1 = getScore(player1.result);
  const scorePlayer2 = getScore(player2.result);
  let winnerText = "";
  
  if(scorePlayer1 > scorePlayer2){
    winnerText = `${player1.name} wins with "${getHandName(player1.result)}" hand (it wins against "${getHandName(player2.result)}" from ${player2.name})`;
  } else if(scorePlayer2 > scorePlayer1){
    winnerText = `${player2.name} wins with "${getHandName(player2.result)}" hand (it wins against "${getHandName(player1.result)}" from ${player1.name})`;
  } else {
    winnerText = `It is a draw! Both have "${getHandName(player1.result)}"`
  }

  return winnerText;
}
