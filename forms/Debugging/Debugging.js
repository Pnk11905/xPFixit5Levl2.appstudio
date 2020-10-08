/*
This program gets the user name and age, then outputs a nice, appropriate 
message to the user based on their age. 
*/


//removed switch statement so that we only rely on one of the if/else or switch statements
/*
if (age > 20)
    messageNum = 1
else if (age > 30 AND age < 40)
    messageNum = 2
else
    messageNum = 3
*/


// Fixed Code:

let userName = prompt("Enter your first name please. ")
//should use a number prompt
let userAge = Number(prompt("Enter your current age in years. "))

// enter switch statement
switch(true) {
  case (userAge > 20 && userAge < 30):
    alert("You are in your twenties!")
    break
  case (userAge > 30 && userAge < 40):
    alert("You are in your thirties!")
    break
  case (userAge >= 40):
    alert("You are over 40! Wow!")
    break
  default:
    alert("I have no idea how old you are.")
}


// What we changed:
/*
userAge should be a number prompt
   let userAge = prompt("Enter your current age in years. ")
   let userAge = Number(prompt("Enter your current age in years. "))

We entirely removed the if/else to focus on the switch, making it more efficient

Alert for "you are in your thirties!" -- There should not be a space between ! ", and alert is spelled incorrectly
    alet("You are in your thirties! ")
    alert("You are in your thirties!")

Alert for "I have no idea how old you are. " There should not be a space between . "
    alert("I have no idea how old you are. ")
    alert("I have no idea how old you are.")
 
We setup the cases to rely on the value input for userAge, changed variable to reflect correct spelling, and cleaned up alerts to reflect proper quotation

*/