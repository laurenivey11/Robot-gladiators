var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "AMy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};

var fight = function(enemyName) {
 
  while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //fight selected
    if (promptFight === "fight" || promptFight === "FIGHT") {

    //player attacks enemy
    var damage = randomNumber(playerAttack -3, playerAttack);
      enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }  

    //enemy attacks player
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
     playerHealth = Math.max(0, playerHealth - damage);

    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " still has " + playerHealth + " health remaining."
    );

    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.")
    }

    //skip selected
    } else if(promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
      playerMoney = Math.max(0, playerMoney - 2);
      console.log("playerMoney", playerMoney);
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
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  //start of game
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemyName);
      //shop called
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
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