var createPolitician = function(name, color) {
  var politician = {};
  politician.name = name;
  politician.color = color;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.tallyTotalVotes = 0;

  //adding up state votes
  politician.tallyTotalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  //  console.log(this.tallyTotalVotes);
    }
  };
  
  return politician;
}

//the candidates
var michael = createPolitician("Michael Woolstache",[132, 17, 11]);
var bonnie = createPolitician("Bonnie Mothergoose",[245, 141, 136]);

/*console.log("Michael's color is: " + michael.color);
console.log("Bonnie's color is: " + bonnie.color);*/

michael.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
bonnie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//updating vote counts
michael.electionResults[9] = 1;
bonnie.electionResults[9] = 28;
michael.electionResults[4] = 17;
bonnie.electionResults[4] = 38;
michael.electionResults[43] = 11;
bonnie.electionResults[43] = 27;

/*console.log(michael.electionResults);
console.log(bonnie.electionResults);*/

michael.tallyTotalVotes();
bonnie.tallyTotalVotes();

//state results
var setStateResults = function(state) {
  theStates[state].winner = null;
  if (michael.electionResults[state] > bonnie.electionResults[state]) {
    theStates[state].winner = michael;
  } else if (michael.electionResults[state] < bonnie.electionResults[state]) {
    theStates[state].winner = bonnie;
  }
  
  var stateWinner = theStates[state].winner;
   if (stateWinner !== null) {
     theStates[state].rgbColor = stateWinner.color;
   } else {
     theStates[state].rgbColor = [11,32,57];
  }

//setting the state results table
var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")"
candidate1Name.innerText = michael.name;
candidate2Name.innerText = bonnie.name;
candidate1Results.innerText = michael.electionResults[state];
candidate2Results.innerText = bonnie.electionResults[state];
  
  if (theStates[state].winner === null){
    winnersName.innerText = "Draw";
  }else{ winnersName.innerText=theStates[state].winner.name;
  }
};

//announcing the winner
var winner = "";

if (michael.totalVotes > bonnie.totalVotes){
  winner = michael.name;
  console.log("Michael Woolstache wins the election with a total of " + michael.totalVotes + "!");
}else if (michael.totalVotes < bonnie.totalVotes){
  winner = bonnie.name;
  console.log("Bonnie Mothergoose wins the election with a total of " + bonnie.totalVotes + "!");
}else{
  winner = "It's a draw."
  console.log("It's a draw!");
}

//country results
var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = michael.name;
row.children[1].innerText = michael.totalVotes;
row.children[2].innerText = bonnie.name;
row.children[3].innerText = bonnie.totalVotes;
row.children[5].innerText = winner;