var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying) {
    if (youHit) {
        console.log("Congrats, you hit the dragon and did " + damageThisRound +
        " damage this round.");
        totalDamage += damageThisRound;
        if(totalDamage >= 4) {
            console.log("Success! You slew the dragon!");
         slaying = false;
        } else {
            var youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You better take better aim, you missed!");
        slaying = false;
    }
}
