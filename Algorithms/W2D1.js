// Math Library

var floor = Math.floor(1.8); // Math class: Capital letter denotes class      Round Down
var ceiling = Math.ceil(Math.PI); // Round up
var random = Math.random(); // Random number: inclusive of 0, exclusive of 1

console.log(floor);
console.log(ceiling);
console.log(random);

// Dice Roller
function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * 6 + 1);
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

function eightBall() {
    var fortune = Math.random();
    fortune = Math.floor(fortune * lifesAnswers.length);
    return lifesAnswers[fortune];
}

for (i = 0; i < 100; i++) {
    var personFortune = eightBall();
    console.log("Your fortune is: " + personFortune);
}
