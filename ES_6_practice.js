'use strict'
class User {
	constructor(name, weapon, powerUp) {
		this.name = name;
		this.weapon = weapon
		this.powerUp = powerUp;
		this.health = 10;
		this.sneak = 5;
		this.rage = 5;
		this.speech = 5;
	}
	increasePowerUp(powerUp) {
    if (powerUp === 'sneak') {
    	this.sneak += 5;
    }
    if (powerUp === 'rage') {
    	rage += 5;
    }
    if (powerUp === 'speech') {
    	speech += 5;
    }
	}
};
function fightOne(fightOrFlight, user, enemy = 'samuari') {
  	if(fightOrFlight === 'fight') {
      user.health -= 5;
      alert(`The ${enemy} is a master warrior, your health is decreased by 10`);
  	}
  	if(fightOrFlight === 'sneak') {
  		if(user.sneak > 5) {
  			alert(`you successfuly snuck around the ${enemy}`);
  		} else if(user.sneak < 5) {
  			alert(`the ${enemy} catches you as you are almost passed him and harms you with a ninja star before you get away, your health is decreased by 3`);
  		  user.health -= 3;
  		}
  	if(fightOrFlight === 'speech') {
  		alert(`you were able to reason with the ${enemy}, speech increased by 5`);
  		user.speech += 5;
  	}
  }
 }
 function timeout(duration) {
  	return new Promise( (resolve, reject) => {
      setTimeout(resolve, duration);
  	})
  }
let start = prompt(`Hello there, would you like to play a game?`);
console.log(start);

if(start === 'yes') {
	let name = prompt(`perfect!, what is your name?`);
	console.log(name);
	let weapon = prompt(`Okay ${name}, what is your weapon? Your choices are Katana, throwing stars or a hand grenade.`)
	let powerUp = prompt(`last question, what is yor power up? Your choices are sneak, rage or speech`);
  // var powerUpConf = (powerUp) => {

  // 	alert(`your ${powerUp} skill has increased!`);
  // }
	let user = new User(name, weapon, powerUp);

	user.increasePowerUp(powerUp);
	console.log(user);

	class Nemesis extends User {

	};

	var nemesis = new Nemesis(`asshole ${name}`, weapon, powerUp);
	console.log(nemesis);


  
  let fightOrFlight1 = prompt(`So ${user.name}, you are walking through the woods and you encounter a samauri who wants to kill you, what do you want do do, fight, sneak or talk your way out of it?`);
  
  timeout(1000).then(fightOne(fightOrFlight1, user));

  var userArr = prompt('you beat the samauri, what would you like as your reward? Name up to 5 things');

  function award(args...) {
  	alert(`here are your rewards ${args}`); 
  }

  alert('you won! game over');

}



