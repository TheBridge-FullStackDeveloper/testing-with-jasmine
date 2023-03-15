class PokerPlayer {
  constructor(Player = '') {
    this.name = Player
    this.result = []
    }
    
  

  rollDie() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const posibilities = ['A', '8', '9', 'J', 'Q', 'K']
        resolve(posibilities[Math.floor(Math.random() * posibilities.length)])
        reject('Todo mal') 
        }, 300)
        
      
    
      const fn = async () => {
       try {
        
        const thatIs = await this.rollDie()
        console.log(thatIs)
       } catch(error) {
         
        console.log('que no', error)
       } 
      
        
       
      }
      fn()
      
      
    })
    
    
  }
  

  getResult() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      for(let i = 0; i < 5; i++) {
        if (this.rolllDie) {
          this.result.push(throwDie[i])
          resolve (console.log(this.result)) 
          reject (console.log('jo'))
        }
      }    

        // const throwDie = this.rollDie()
        // const loOtro = this.result.push(throwDie[i])
        // resolve(loOtro)
        // reject('Todo mal') 
        }, 1500)
      
      
    
      const fn1 = async () => {
       try {
        
        const esto = await this.getResult()
        console.log(esto)
       } catch(error) {
         
        console.log('que no', error)
       } 
        
       
      }
      fn1()
      
     
    })
  }
}

const getHandName = (str = '') => {

return str
}

const getScore = (scr = 5) => {
  return scr
}

const checkWinner = () => {}

// const primeritoPlayer = new PokerPlayer ('Juan', []) ;
// (primeritoPlayer.holi())


