class PokerPlayer {
  constructor(casino) {
    this.name = casino + "";
    this.result = []
  }
/* aqui realice un bucle para que de manera randon me fuera dando resultados de dados
luego se establecio una promesa con un tiempo de resolución de 3 segundos.*/
  rollDie()  {
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

  async getResult() {
    let newDie = []
    for (let i = -1; ++i < 5;){
      const resultNew = await this.rollDie()
      newDie.push(resultNew)
    }
    this.result = newDie
  }
}

/* sí tiene 5 iguales, retorna 5 iguales, 
mientras que sí 4 iguales retorna 4 iguales y así sucesivamente,
 hasta que dejo la ultima opción cuando ninguna se repita*/

const getHandName = (result = []) => {

  return ""
}

const getScore = () => {
  return 0
}

const checkWinner = () => {
  return ""
}