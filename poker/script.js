class PokerPlayer {
  constructor(name = "") {
    this.name = name
    this.result = []
  }


  rollDie() {
    const dice = ["A", "8", "9", "J", "Q", "K"]
    const options = () => {
      return dice[Math.floor(Math.random() * dice.length)]
    }
    function myPromise(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x)
        }, 300);
      })
    }
    return myPromise(options())
  }




  getResult() {
    
      return new Promise((resolve) =>{
          setTimeout(() => {
          for (let i = 0; i < 5; i++)
          this.result[i]=this.rollDie()
          resolve(this.result)
        }, 1500);
      })
    
  }

}




 const getHandName = (result=[]) => {
  const h = diceCounter(result) 
  let handName = ""
  if (isFiveOfAKind(values(h))){
    handName = "five of a kind";
  } else if (isFourOfAKind(values(h))){
    handName= "four of a kind";
  } else if (isFullHouse(values(h))){
    handName= "full house";
  } else if (isThreeOfAKind(values(h))){
    handName= "three of a kind";
  } else if (isTwoPair(values(h))){
    handName="two pair";
  } else if (isOnePair(values(h))){
    handName="one pair";
  } else if (isHighCard(values(h))){
    handName="high card";
  } else {
    highCard = getHighestDie(values(h))
    handName="Its high card" + highCard [0]
  }
  return handName
}


const getScore = () => { }


const checkWinner = () => { }
