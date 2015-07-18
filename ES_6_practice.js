'use strict'
var prompt = require('prompt');

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
        console.log(`The ${enemy} is a master warrior, your health is decreased by 10`);
    	}
    	if(fightOrFlight === 'sneak') {
    		if(user.sneak > 5) {
    			console.log(`you successfuly snuck around the ${enemy}`);
    		} else if(user.sneak < 5) {
    			console.log(`the ${enemy} catches you as you are almost passed him and harms you with a ninja star before you get away, your health is decreased by 3`);
    		  user.health -= 3;
    		}
    	if(fightOrFlight === 'speech') {
    		console.log(`you were able to reason with the ${enemy}, speech increased by 5`);
    		user.speech += 5;
    	}
    }
   }
 function timeout(duration) {
  	return new Promise( (resolve, reject) => {
      setTimeout(resolve, duration);
  	})
  }
// function award(args...) {
//       console.log(`here are your rewards ${args}`); 
//     }
  prompt.start();
  prompt.get(['what is your name?', 'choose your weapon(katana, throwing stars, hand grenade)', 'What is your power up? (sneak, rage, speech)', 'you encounter a samauri in the forest, do you want to fight him? Sneak past him? or talk your way out of dying?', 'if you win, what do you want your prize to be? Enter at least five things'],function(err,result) {
    let name = result['what is your name?'];
    let weapon = result['choose your weapon(katana, throwing stars, hand grenade)'];
    let powerUp = result['What is your power up? (sneak, rage, speech)']; 
    let fightOrFlight1 = result['you encounter a samauri in the forest, do you want to fight him? Sneak past him? or talk your way out of dying?']
    let reward = result['if you win, what do you want your prize to be? Enter at least five things']
    var user = new User(name, weapon, powerUp);
    // console.log(user);
    var powerUpConf = (powerUp) => {
    user.increasePowerUp(powerUp);
    console.log(`your ${powerUp} skill has increased!`);
  }
    class Nemesis extends User {
    };
  var nemesis = new Nemesis(`asshole ${name}`, weapon, powerUp);
  // console.log(nemesis);
  timeout(1000).then(fightOne(fightOrFlight1, user));
  award(reward);
  console.log('you won! game over');
  })




  





	

	


  
  
  
  

  

  

 





