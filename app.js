let btn = document.querySelector('#rules_btn');
let rule = document.querySelector('.game-rules');
let score = JSON.parse(localStorage.getItem('scor')) || 0;
let scoree = JSON.parse(localStorage.getItem('scoree')) || 0;
let count=0;

pla_score.innerText = score;
com_score.innerText = scoree;

function updateScore(s1,s2){
    document.getElementById('pla_score').innerText = s1;
    document.getElementById('com_score').innerText = s2;
}
function hurray_click(){
    window.location.href="./hurray.html"
}
function rules_click(){
    rule.style.opacity="1";
}
function cross_click(){
    rule.style.opacity="0";
}
function goToHomePage(){
    window.location.href="./index.html"
}
function playerMove(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    if ((playerChoice === 'rock' && computerChoice === 'rock')) {
        window.location.href="./tie1.html";

    }if ((playerChoice === 'scissors' && computerChoice === 'scissors')) {
        window.location.href="./tie2.html";
        
    }if ((playerChoice === 'paper' && computerChoice === 'paper')) {
        window.location.href="./tie3.html";
        
    }if ((playerChoice === 'scissors' && computerChoice === 'paper')) {
        count = score + 1;
        pla_score.innerText = count;
        localStorage.setItem("scor", JSON.stringify(count));
        window.location.href="./win1.html";

    }if ((playerChoice === 'paper' && computerChoice === 'rock')){
        count = score + 1;
        pla_score.innerText = count;
        localStorage.setItem("scor", JSON.stringify(count));
        window.location.href="./win3.html";

    }if ((playerChoice === 'rock' && computerChoice === 'scissors')){
        count = score + 1;
        pla_score.innerText = count;
        localStorage.setItem("scor", JSON.stringify(count));
        window.location.href="./win2.html";
        
    }if ((playerChoice === 'paper' && computerChoice === 'scissors')){
        count = scoree + 1;
        com_score.innerText = count;
        localStorage.setItem("scoree", JSON.stringify(count));
        window.location.href='./loose1.html';
        
    }if ((playerChoice === 'scissors' && computerChoice === 'rock')){
        count = scoree + 1;
        com_score.innerText = count;
        localStorage.setItem("scoree", JSON.stringify(count));
        window.location.href='./loose2.html';
    
    }if ((playerChoice === 'rock' && computerChoice === 'paper')) {
        count = scoree + 1;
        com_score.innerText = count;
        localStorage.setItem("scoree", JSON.stringify(count));
        window.location.href='./loose3.html';
        
    }
}
