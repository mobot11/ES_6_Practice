'use strict'

var prompt = require('prompt');

class Warrior {
  constructor(health) {
    this.health = 10;

  }
}

class Samuari extends Warrior {
  constructor(weapon, name) {
    super();
    this.weapon = `Katana`;
    this.name = 'Samuari';
  }
}

class Knight extends Warrior {
  constructor(weapon,name) {
    super();
    this.weapon = 'broadsword';
    this.name = 'Knight';
  }
}

class Viking extends Warrior {
  constructor(weapon, name) {
    super();
    this.weapon = 'battleAxe';
    this.name = 'viking';
  }
}

var warriorSet = new Set();

warriorSet.add(viking).add(samuari).add(knight);

function fight(warrior1, warrior2, winProb = 10) {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10)
  var score1= winProb - rand1;
  var score2 = winProb - rand2;
  if((winProb - rand1) > (winProb - rand2)) {
    console.log(`${warrior1.name} wins!`);
  } else if ((winProb - rand1) < (winProb - rand2)) {
    console.log(`${warrior2.name} wins!`);
  }
  else if ((winProb - rand1) === (winProb - rand2)) {
    console.log(`the ${warrior1.name} and ${warrior2.name} tied!`);
  }
}

function timeout(duration) {
   return new Promise( (resolve, reject) => {
      setTimeout(resolve, duration);
   })
  }

function fightNow(warrior1, warrior2) {
  return new Promise( (resolve, reject) => {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10)
  var score1= warrior1.winProb - rand1;
  var score2 = warrior2.winProb - rand2;
  if((warrior1.winProb - rand1) > (warrior2.winProb - rand2)) {
    console.log(`${warrior1.name} wins!`);
  } else if ((warrior1.winProb - rand1) < (warrior2.winProb - rand2)) {
    console.log(`${warrior2.name} wins!`);
  }
  else if ((warrior1.winProb - rand1) === (warrior2.winProb - rand2)) {
    console.log(`the ${warrior1.name} and ${warrior2.name} tied!`);
  }
  })
}

var viking = new Viking();
var knight = new Knight();
var samuari = new Samuari();


var warrior1 = process.argv[2];
var warrior2 = process.argv[3];

console.log(warrior1);
console.log(warrior2);

fight(warrior1, warrior2);

prompt.start();

prompt.get(['Choose a warrior(viking, knight, samuari)', 'Choose a warrior to battle(viking, knight, samuari)'], (err, result) => {
  var warrior1 = result['Choose a warrior(viking, knight, samuari)'];
  var warrior2 = result['Choose a warrior to battle(viking, knight, samuari)'];
  fight(warrior1, warrior2);

  //prompt is causing Async issues that I frankly don't have the time to solve right now
  //you get the idea!!!
})






  





	

	


  
  
  
  

  

  

 

// `



