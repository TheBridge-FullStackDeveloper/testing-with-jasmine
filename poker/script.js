class PokerPlayer {
  constructor(player = "") {
    this.name = player
    this.result = []

  }

  rollDie() {
    const dice = ["A", "8", "9", "J", "Q", "K"]
    /*
    const posibilities = () => {
      
      return dice[Math.floor(Math.random() * dice.length)]
    }
    console.log(posibilities())*/

    function mypromise() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(dice[Math.floor(Math.random() * dice.length)]);
        }, 300);
      });
    };

    return mypromise()

  }

  async getResult() {
    let newResult = []
    for (let i = 0; i < 5; i++) {
      const die = await this.rollDie()
      newResult.push(die)
    }
    this.result = newResult
  }

}


const getHandName = (dice=[]) => {
  let result = ''
  const repeatNumbersValues = Object.values(diceCounter(dice))
  const x=Object.keys(diceCounter(dice))
  //console.log(repeatNumbersValues)
  if (isFiveOfAKind(repeatNumbersValues)) {
    result = 'five of a kind'
  } else if (isFourOfAKind(repeatNumbersValues)) {
    result = 'four of a kind'
  } else if (isFullHouse(repeatNumbersValues)) {
    result = 'full house'
  } else if (isThreeOfAKind(repeatNumbersValues)) {
    result = 'three of a kind'
  } else if (isTwoPair(repeatNumbersValues)) {
    result = 'two pair'
  } else if (isOnePair(repeatNumbersValues)) {
    result = 'one pair'
  }else {
    console.log("dice", dice)
    console.log(getHighestDie(dice))
    const keys = Object.keys(getHighestDie(dice))
    console.log(keys[0] + '------this are ketys[0]')
    //getHighestDie(x) 
    result= `${keys[0]}`
  }
  return result
}

const getScore = (result) => {
  let x = 0
  if(result){
    if(result === "five of a kind"){
      x = scorings.five_of_a_kind
    }else if(result === "four of a kind"){
      x = scorings.four_of_a_kind
    }else if(result === 'full house'){
      x = scorings.full_house
    }else if(result === 'three of a kind'){
      x = scorings.three_of_a_kind
    }else if(result === 'two pair'){
      x = scorings.two_pair
    }else if(result ===  'one pair'){
      x = scorings.one_pair
    }else{
      x = scorings[result] + 'this is scoring results'
    }
  }
  
  console.log('x', x) 

  return x
}

const checkWinner = (p1, p2) => {
  let result = ''
  if(p1 && p2){
    const score1 = getScore(getHandName(p1.result))
    const score2 = getScore(getHandName(p2.result))
    if(score1 > score2){
      result = `${p1.name} wins with "${getHandName(p1.result)}" hand (it wins against "${getHandName(p2.result)}" from ${p2.name})`
     // expect(checkWinner(p1, p2)).toEqual('p1 wins with "four of a kind" hand (it wins against "one pair" from p2)')
    }else if( score2 > score1 ){
      result = `${p2.name} wins with "${getHandName(p2.result)}" hand (it wins against "${getHandName(p1.result)}" from ${p1.name})`
      //expect(checkWinner(p1, p2)).toEqual('p2 wins with "five of a kind" hand (it wins against "four of a kind" from p1)')
    }else{
      result = `It is a draw! Both have "${getHandName(p1.result)}"`
      //expect(checkWinner(p1, p2)).toEqual('It is a draw! Both have "full house"')
    }
  }
  console.log(result)
  console.log(score1)
  console.log(score2)
  return result
 }

