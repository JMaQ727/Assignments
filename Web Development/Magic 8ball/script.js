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

var answer = document.querySelector('#answer');

function fortune() {
    var randIdx = Math.random();
    randIdx = randIdx * lifesAnswers.length;
    randIdx = Math.floor(randIdx);
    var yourFortune = lifesAnswers[randIdx];
    // console.log(yourFortune)
    answer.style.backgroundColor = 'darkblue';
    answer.innerHTML = `<p class="super-mercado" style="color:var(--main-light-color)">${yourFortune}</p>`
}