class PokerPlayer {
  constructor(name) {
    this.name = String (name);
    this.result = [];
  }

  rollDie() {
    return new Promise((resolve, reject) => {
      const dice = ["A", "8", "9", "J", "Q", "K"]
      setTimeout(() => {
        const promisKart = dice[Math.floor(Math.random() * 6)]
        resolve(promisKart)
      }, 300);
      const fn = async () => {
        try {
          const result = await promisKart()
          console.log(result)

        } catch (error) {

        }
      }
      fn()
    })
  }


  getResult() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.result[i] = this.rollDie()
    resolve(this.result)
    reject(undefined)    
      }
    }, 1500);
   })

  
  }
}

const getHandName = (resultArray) => {
  
  let mano = '';
  
  const h = diceCounter(resultArray);

  if (isFiveOfAKind(values(h))) {
   mano = 'five of a kind';
  } else if (isFourOfAKind(values(h)))
   mano = 'four of a kind';
  else if (isFullHouse(values(h))) {
   mano = 'full house';
  } else if (isThreeOfAKind(values(h))){
   mano = 'three of a kind';
  } else if (isTwoPair(values(h))){
   mano = 'two pair';
  } else if (isOnePair(values(h))){
   mano = 'one pair';
  } else if (isHighCard(values(h)) && getHighestDie(keys(h)))
   mano = 'A' 
  
  
  return  mano;
  
  
  
  
  
  
  
  /*const getHandName = combinations.map(getHandName => {
    return {
      ...getHandName, 
       five_of_a_kind:'five of a king',
    four_of_a_kind:'four of a king',
    full_house:'full house',
  three_of_a_kind:'three of a king' ,
    two_pair:'two pair' ,
  one_pair:'one pair',
     high_card:'high card' ,
    
    } 
  })
console.log(getHandName)*/
}
//console.log(arraglo);

const getScore = (mano) => {
  
  let puntuacion = 0;
   
  switch (mano) {
    case 'five of a kind':
      puntuacion = scorings['five_of_a_kind'];
      break;
    case 'four of a kind': 
      puntuacion = scorings[ 'four_of_a_kind'];
      break;
    case 'full house':
      puntuacion = scorings['full_house'];
      break;
    case 'three of a kind':
      puntuacion = scorings['three_of_a_kind'];
      break;
    case 'two pair':
      puntuacion = scorings['two_pair'];
      break;
    case 'one pair':
      puntuacion = scorings['one_pair'];
      break;
    default:
      puntuacion = scorings[mano];
      break;
  }

  return Number(puntuacion);

}

const checkWinner = (p1,p2) => {

  let mensaje = [''];
  if (getScore(getHandName(p1.result)) > getScore(getHandName(p2.result))) {
		mensaje = `p1 wins with ${getHandName(p1.result)} hand it wins against ${getHandName(p2.result)} from p2`;
	}
  return mensaje
}
