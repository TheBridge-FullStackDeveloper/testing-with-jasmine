class PokerPlayer {
  constructor(player1,player2) {
    if (typeof player1 !== 'string' || typeof player2 !== 'string') 
    this.name= `${player1} and ${player2}`;
    this.result = [];

  }

  

  async rollDie() {
    return new Promise(resolve => {
      setTimeout(() => {
        const dice = ["A", "8", "9", "J", "Q", "K"];
        const randomIndex = Math.floor(Math.random() * dice.length);
        const result = dice[randomIndex];
        resolve(result);
      }, 300);
    });
  }

  async getResult() {
    
    const values = Object.values;
    const keys = Object.keys;
    const isFiveOfAKind = ([first] = []) => first === 5;
    const isFourOfAKind = (values = []) => values.includes(4);
    const isFullHouse = (values = []) => values.includes(2) && values.includes(3);
    const isThreeOfAKind = (values = []) => values.includes(3);
    const isTwoPair = (values = []) => values.length === 3 && values.includes(2);
    const isOnePair = (values = []) => values.length === 4 && values.includes(2);
    const isHighCard = (values = []) => values.length === 5;
    const getHighestDie = (values = []) =>
      values.reduce(
        (acc, curr) =>
          scorings[curr] > Object.values(acc) ? { [curr]: scorings[curr] } : acc,
        { 8: 1 }
      );
  
    this.result = [];
    
  for (let i = 0; i < 5; i++) {
    const die = await this.rollDie();
    if (this.result.length < 5) {
      this.result.push(die);
    } else {
      break;
    }
  }
  if (this.result.length < 5) {
    return [undefined];
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(this.result.slice(0, 5));
    }, 1500);
  });
}

  
}

const getHandName = (result) => {
  
  const values = Object.values(result.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {}));
  if (values.length === 1 && values[0] === 5) {
    return "five of a kind";
  } else if (values.length === 2) {
    if (values[0] === 4 || values[1] === 4) {
      return "four of a kind";
    } else if (values[0] === 3 || values[1] === 3) {
      return "full house";
    }
  } else if (values.length === 3 && values.includes(2)) {
    return "two pair";
  } else if (values.length === 3 && values.includes(3)) {
    return "three of a kind";
  } else if (values.length === 4) {
    return "one pair";
  } else {
    return "high card";
  }
}

const getScore = (handName) => {
  let score = 0;
  switch (handName) {
    case 'royal flush':
      score = 10;
      break;
    case 'straight flush':
      score = 9;
      break;
    case 'four of a kind':
      score = 8;
      break;
    case 'full house':
      score = 7;
      break;
    case 'flush':
      score = 6;
      break;
    case 'straight':
      score = 5;
      break;
    case 'three of a kind':
      score = 4;
      break;
    case 'two pair':
      score = 3;
      break;
    case 'pair':
      score = 2;
      break;
    case 'high card':
      score = 1;
      break;
    default:
      console.error('Invalid hand name!');
  }
  return score;


}

const score = getScore('royal flush');
console.log(score); 





const checkWinner = async (player1, player2) => {
  const checkWinner = (player1, player2) => {
    const player1Result = player1.getResult();
    const player2Result = player2.getResult();
  
    if (player1Result > player2Result) {
      return `${player1.name} wins with ${getHandName(player1Result)}!`;
    } else if (player1Result < player2Result) {
      return `${player2.name} wins with ${getHandName(player2Result)}!`;
    } else {
      return "It's a tie!";
    }
  };
  
}






