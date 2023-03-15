class PokerPlayer {
//make cookie 'player's
  constructor(player) {
//set the 'name' property to 'player' if 'player' is a string, otherwise set it to an empty string.
    this.name = typeof player === 'string' ? player : ''
// The ? in JavaScript is called the optional chaining operator. It is used to safely access properties or methods of an object without causing an error if the property or method does not exist or is undefined....
    this.result = []
// Set the 'result' property to an empty array.
  }

  rollDie() {
  //return a promise after 300ms with random value from the array (A,8,9,J,Q,K)
    return new Promise((resolve) => {
      setTimeout(() => {
        const values = ['A', '8', '9', 'J', 'Q', 'K'];
        const randomIndex = Math.floor(Math.random() * values.length);
        const result = values[randomIndex];
        resolve(result);
      }, 300);
    });
  }
 // Roll the dice five times and save the results to the `result` property of the object
  getResult() {
    const rolls = []; // create an empty array to store promises
    for (let i = 0; i < 5; i++) { // loop five times to call rollDie() five times
      rolls.push(this.rollDie()); // call rollDie() and add the returned promise to the rolls array
    }
 /*   return Promise.all(rolls) // use Promise.all() to wait for all promises to resolve
      .then((results) => { // once all promises have resolved, do the following:
        this.result = results; // set the result property of the object to the array of results
        return this.result; // return the array of results, it makes sure to return the results arrat
        setTimeout(() => {
          resolve(this.result);
        }, 1500);
      });
  }}*/
  // Wait for all promises to resolve and save the results to the `result` property of the object
  return Promise.all(rolls)
    .then((results) => {
      this.result = results;
      // Return a new promise that resolves with the `result` array after a delay of 1500ms
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.result);
        }, 1500);
      });
    });
}}

const getHandName = (hand) => {
  //function
return "five of a kind"
}
const getScore = () => {}

const checkWinner = () => {}
