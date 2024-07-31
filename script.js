//May be the current best version of myself//
const choice = ["rock", "paper", "scissors"];
var pp = document.getElementById("ppoints");
var cp = document.getElementById("cpoints");
var result = document.getElementById("result");

var psd =document.getElementById("psd");
var csd = document.getElementById("csd")

let pscore = 0;
let cscore =0;

var gr = document.getElementById("green")

function valuation(pchoice)
{
    var cchoice = choice[Math.floor(Math.random()*3)];
    console.log(cchoice); 
    pp.textContent = "Player   : " + pchoice;
    cp.textContent = "Computer : " + cchoice; 
    if(cchoice === pchoice)
    {
        result.textContent = "It's a TIE";
    }
    else
    {
        switch(pchoice)
        {
            case "rock":
                result.textContent = (cchoice ==="scissors") ? "YOU WON !" : "YOU LOSE :(";
                break;
            case "paper":
                result.textContent = (cchoice === "rock") ? "YOU WON !": "YOU LOSE :(";
                break;
            case "scissors":
                result.textContent = (cchoice === "paper") ? "YOU WON !": "YOU LOSE :(";
                break;

        }
        
        switch(result.textContent)
        {
            case "YOU WON !":
                pscore++;
                
                psd.textContent = pscore;
                console.log(pscore);
                if(pscore==5)
                {
                    alert("You WON the match :) Start a new game")
                    window.location.reload();
                }
                break;
            case "YOU LOSE :(":
                cscore++;
                console.log(cscore);
                csd.textContent = cscore;
                if(cscore== 5)
                {
                    alert("You LOSE the match. Start a new game")
                    csd.textContent = cscore;
                    window.location.reload();

                }
                break;
        }
        
    }
    
}