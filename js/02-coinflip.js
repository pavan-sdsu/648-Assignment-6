var coinFlip = Math.random();
var result;
var choice = prompt("Type 'heads' for Heads or 'tails' for Tails.");

coinFlip = Math.round(coinFlip * 10);
result = (coinFlip > 5) ? "heads" : "tails";

alert("The flip was " + result + " and you chose " + choice + "...you " + ((result == choice) ? "win" : "lose") + "!")