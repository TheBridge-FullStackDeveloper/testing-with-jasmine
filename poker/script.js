class PokerPlayer {
  constructor(Player = '') {
    this.name = Player
    this.result = []
    }
    
  

  rollDie() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posibilities = ['A', '8', '9', 'J', 'Q', 'K']
        resolve(posibilities[Math.floor(Math.random() * posibilities.length)])
        }, 300)
        
        
      
    
     
      
       
    })
    
    
  }
  

  async getResult() {

        const throwDie = await this.rollDie()
         for(let i = 0; ++i < 6;) {
         if(this.result.length < 5) {
          this.result.push(throwDie);
          }
        }

        console.log(this.result)

  }
}
 
const getHandName = (str = '') => {

return str
}

const getScore = (scr = 17) => {
  return scr
}

const checkWinner = () => {}

// const primeritoPlayer = new PokerPlayer ('Juan', []) ;
// (primeritoPlayer.holi())

 // const fn = async () => {
      //  try {
        
      //   const thatIs = await this.rollDie()
      //   console.log(thatIs)
      //  } catch(error) {
         
      //   console.log('que no', error)
      //  } 
      
        
       
      // }
      // fn()

  //     const fn1 = async () => {
  //      try {
        
  //       const esto = await this.getResult()
  //       console.log(esto)
  //      } catch(error) {
         
  //       console.log('que no', error)
  //      } 
        
       
  //     }
  //     fn1()
      
     
  //   })
  // }

      //   if (throwDie) {
          
      //     for(let i = 0; i < 5; i++) {
            
      //       this.result.push(throwDie[i])
          
          
      //   }
      // }    
      

        // const throwDie = this.rollDie()
        // const loOtro = this.result.push(throwDie[i])
        // resolve(loOtro)
        // reject('Todo mal') 
      