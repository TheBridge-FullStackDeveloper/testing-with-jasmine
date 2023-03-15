class PokerPlayer {
  constructor( name = "" ) {
    this.name = name
    this.result = []
  }


  rollDie () {

    const dice = ["A", "8", "9", "J", "Q", "K"];
      let random = Math.floor( Math.random() * 5 );

      return new Promise( (resolve, reject) => {
        setTimeout(() => {
          if ( dice[random] ) resolve (dice[random]);
          reject;
        }, 300);
      })  
    
  }

  getResult() {}
}

const getHandName = () => {}

const getScore = () => {}

const checkWinner = () => {}
