var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

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
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }  

  //enemy attacks player
     playerHealth = playerHealth - enemyAttack;

    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " still has " + playerHealth + "health remaining."
    );

    if (playHeath <=0) {
      window.alert(playName + " has died!");
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
      console.log(
        playerName + " skipped this round and was penalized. " + playerName + " now has " + playerMoney + " money left."
      );
    }
  // if no (false), ask question again by running fight() again
    else {
      fight();
    }

    } else { 
      window.alert("You need to choose a valid option. Try again!");
    }
    

    

  };














 fight();