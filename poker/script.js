class PokerPlayer {
  constructor(nombre) {
    this.name= nombre + "" 
    this.result = []
  }
 
  rollDie() {
    let values = ["A", "8", "9", "Q", "K", "J"]; 
    const promise = new Promise((resolve) => {
      setTimeout (() => {
        resolve(values[Math.floor(values.length * Math.random())])
      }, 300)
    })
    
    return promise;
  }

  async getResult() {
    for (let index = 1; index <= 5; index++) {
      let casillas = await this.rollDie();
      if (this.result.length < 5) {
        this.result.push(casillas)
      }
    }
  }
}

const getHandName = () => { }

const getScore = () => { }

const checkWinner = () => { }
