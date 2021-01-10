var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "AMy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 12;


var fight = function(enemyName) {
 
  while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //fight selected
    if (promptFight === "fight" || promptFight === "FIGHT") {

    //player attacks enemy
    enemyHealth = enemyHealth - playerAttack;

    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }  

    //enemy attacks player
     playerHealth = playerHealth - enemyAttack;

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
      playerMoney = playerMoney - 2;
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
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 20;
      fight(pickedEnemyName);
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
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};




startGame();
 //fight();