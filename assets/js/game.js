var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];





var fight = function(enemy) {
 
  while(enemy.health > 0 && playerInfo.health > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //fight selected
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //player attacks enemy
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    
    if (enemy.health <=0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }  
    //enemy attacks player
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
     playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " still has " + playerInfo.health + " health remaining."
    );
    if (playerInfo.health <=0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
    }
    //skip selected
    } else if(promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerInfo.name + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 2);
      console.log("playerInfo.money", playerInfo.money);
      break;
    }
    //player hits cancel instead of skip
    else {
      fight();
    }
    //player chooses something besides fight or skip
    } else { 
      window.alert("You need to choose a valid option. Try again!");
    }
  }
};


var startGame = function() {
  //refills player stats before restart
  playerInfo.reset;
  //start of game
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0){
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      //shop called
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var shopConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (shopConfirm) {
          shop();
        }
      }
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }
  endGame();
};

var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");  
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  console.log("entered the shop");
  var shopOptionPrompt = window.prompt( 
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;

    case "UPGRADE":
    case "upgrade":
      playerInfo.refillHealth();
      break;
    
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
      
    }  
};



startGame();
 //fight();