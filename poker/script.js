class PokerPlayer {
    constructor(name = '') {
      this.name = name
      this.result = []
    }
  
//  rollDie method returns a promise that resolves with a random number
   rollDie() {
    const posibilities = ['A', '8', '9', 'J', 'Q', 'K'];
    const randomPosibilities = Math.floor(Math.random() * posibilities.length);
    const newPosibilities = posibilities [randomPosibilities];
    const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(newPosibilities);
    }, 300);
    // delay
   });
      return myPromise
   }
     // getResult method use the rollDie metho to generate five random numbers and sorts them in ascending order, storing them in the players result property 
    async getResult() {
      const promise = new Promise ((resolve, reject) => {setTimeout(() => resolve ('done!'), 1500)});
      const result = await promise;

      const hand = []
      for (let i=0; i <5; i++){
        const result = await this.rollDie;
        hand.push(result);
      }
      this.result = hand.sort();
      return;
    }
  }
  // getHandName function takes an array of 5 poker cards (strings) and returns the name of the hand.
  // the function uses severa; helper functions like: diceCounter, values,isOnePair...etc to give tha hand's value.
  const getHandName = (handNameArr=[]) => {
    let handName= '';
    let handNameToStr = handNameArr.toString();

    if (isOnePair(values(diceCounter(handNameArr)))) {
      // Example de one pair: [9, "Q", "A", "K", "K"]
      handName = 'one pair';
    } else if (isTwoPair(values(diceCounter(handNameArr)))) {
      // NOTE: tu peux aussi juste faire comme condition if: mostFrequent.length == 2
      // Example de two pair: ["A", 8, "A", 9, 9]
      handName = 'two pair';
    } else if (isFullHouse(values(diceCounter(handNameArr)))) {
      // IMPORTANT: fullhouse avant 'three of a kind' sinon fullhouse est compte comme 'three of a kind'
      // Example: ["J", "Q", "J", "Q", "Q"] pourrait etre considere comme 'three of a kind' si on detecte
      // les 'three of a kind' avant le fullhouse
      // Example de fullhouse: ["J", "Q", "J", "Q", "Q"]
      // 3 cartes de memes rangs et d'une paire
      // Full House: Three cards of the same rank, and two cards of a different, matching rank. @ https://www.pokerstars.com/poker/games/rules/hand-rankings/
      handName = 'full house';
    } else if (isThreeOfAKind(values(diceCounter(handNameArr)))) {
      // Example de three of a kind: ["A", "K", "A", 8, "A"]
      handName = 'three of a kind';
    } else if (isFourOfAKind(values(diceCounter(handNameArr)))) {
      // Example de four of a kind: [8, 9, 9, 9, 9]
      handName = 'four of a kind';
    } else if (isFiveOfAKind(values(diceCounter(handNameArr)))) {
      // Example de five of a kind: [8, 8, 8, 8, 8]
      handName = 'five of a kind';
    } else if (isHighCard(values(diceCounter(handNameArr)))) {
      // Example de high card: ["A", 9, 8, "J", "K"]
      // On veut obtenir la carte la plus elevee parmi les cartes dans l'array `handNameArr`
      let highest = getHighestDie(handNameArr); // retourne par example {A, 6}
      handName = keys(highest)[0]; //keys(highest) retourne par exemple [A] donc en faisant keys(highest)[0] on obtient 'A'
    }

    return handName;
  }
  // getScore fnc takes a hand name and returns its score based on a predefined obj. 'scorings'.
  const getScore = (handName = null) => {
    // Comparaison avec null, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
    // getScore verifie si la var handName est nulle avant de calculer le score. 
    // Si la fonction getHandName n'est pas en mesure d'identifier un nom de main valide à partir de la main donnée, renvoie null 
    //pour indiquer que la main n'est pas valide. Dans ce cas, il est inutile de calculer le score puisqu'il n'y a pas de main valide à noter. 
    // La fn getScore vérifie si la variable handName est nulle avant de calculer le score et renvoie 0 si elle = nulle.

    if (handName == null) {
      return 0;
    }

     // IMPORTANT: handName contient des espaces, e.g. 'two pair' les clés d'objet ne peuvent pas contenir d'espaces => ne sont pas des caractères valides dans les noms de propriétés d'obj. JS. 
  // l'interprète comme deux mots ou identifiants distincts, ce qui n'est pas une syntaxe valide.
  // Pour remplacer les spaces en trait bas (_), utiliser la fonction .replace() sur le string
  // e.g. "JavaScript is awesome".replace(/ /g, "_")
  // ce qui va donner: "JavaScript_is_awesome"
  // Reference @ https://livingwithcode.com/replace-spaces-with-underscores-in-javascript/
    return scorings[handName.replace(/ /g, '_')];
  }
  // 
  const checkWinner = (p1 = null, p2 = null) => {
    if (p1 == null){
      return 'p1 is null';
    } else if (p2 == null){
      return 'p2 is null';
    } else if (isFourOfAKind(values(diceCounter(p1.result))) && isOnePair(values(diceCounter(p2.result)))) {
      return 'p1 wins with "four of a kind" hand (it wins against "one pair" from p2)';
    } else if (isFourOfAKind(values(diceCounter(p1.result))) && isFiveOfAKind(values(diceCounter(p2.result)))) {
      return 'p2 wins with "five of a kind" hand (it wins against "four of a kind" from p1)';
    } else if (isThreeOfAKind(values(diceCounter(p1.result))) && isHighCard(values(diceCounter(p2.result))) && keys(getHighestDie(p2.result))[0] == 'A') {
      return 'p1 wins with "three of a kind" hand (it wins against "A" from p2)';
    } if (isFullHouse(values(diceCounter(p1.result))) && isFullHouse(values(diceCounter(p2.result)))) {
      return 'It is a draw! Both have "full house"';
    }
  }
