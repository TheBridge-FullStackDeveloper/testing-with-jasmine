class PokerPlayer {
  constructor(Auxi) {
    this.name = Auxi + "";
    this.result=[];
  }

  rollDie() {
    const posibilities = ['A', '8', '9', 'J', 'Q', 'K'];
    const randomPosibilities = Math.floor(Math.random() * posibilities.length);
    const newPosibilities = posibilities [randomPosibilities];
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(newPosibilities);
      }, 300);
    });
    
    return myPromise
    }

  getResult() {

  }
}

const getHandName = () => {

  return ""
}

const getScore = (getHandName) => {
  return 
}

const checkWinner = () => {
  return ""
}
