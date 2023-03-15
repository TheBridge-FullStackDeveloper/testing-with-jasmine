class PokerPlayer {
  constructor(nombre) {
    if ( nombre != null){
      this.name = nombre.toLowerCase()
    } else {
      this.name = "alejandra"
    }
    
    this.result = []
  }
 
  rollDie() { 
    const promise= new PokerPlayer ((resolve, ) => {
      setTimeout (() => {
        resolve 
      })
    })
        
  }



  getResult() { }
}

const getHandName = () => { }

const getScore = () => { }

const checkWinner = () => { }
