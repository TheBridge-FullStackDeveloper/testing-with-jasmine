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

  // getResult() {

  //   do {
  //     const dice = ["A", "8", "9", "J", "Q", "K"];
  //     this.result.push(dice);
  //   } while( this.result.length < 5 );
  
  //   if ( this.result.length > 5 ) this.result.pop();

  //   return ;

  // }

  // async getResult(){
  //   const dice = ["A", "8", "9", "J", "Q", "K"];
  //   for ( let i = 0; i < dice.length; i++ ){

  //     const results = await this.rollDie();
  //     dice.push( results ); 

  //   }
  // }

  async getResult() {
    let newDie = []
    for (let i = -1; ++i < 5;){
      const resultNew = await this.rollDie()
      newDie.push(resultNew)
    }
    this.result = newDie
  }

}

const getHandName = () => {

  return '';
}

const getScore = () => {}

const checkWinner = () => {}
