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

  getResult() {

    do {
      const dice = ["A", "8", "9", "J", "Q", "K"];
      this.result.push(dice);
    } while( this.result.length < 5 );
  

    if ( this.result.length > 5 ) this.result.pop();

    return ;

  }
}

const getHandName = () => {

  return '';
}

const getScore = () => {}

const checkWinner = () => {}
