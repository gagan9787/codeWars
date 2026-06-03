// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.



function combat(health, damage) {
  var a = health - damage;
  if(a<0){
    a = 0
  }
    return a
}
