var Selection = ["rock","papper","scissors"];
 var numHand = prompt("How many hands do you want ?");
 var  total=0 , computer=0, user=0,draw=0, userSelection;

var rockButton = document.getElementById("r");
var papper = document.getElementById("p");
var scissors = document.getElementById("s");

rockButton.addEventListener("click",function () {
	comparison(Selection[0])

	if ( total >= numHand){

	  butonlaripasifet();}
});
papper.addEventListener("click",function () {
	comparison(Selection[1])

	if ( total >= numHand){
		
	  butonlaripasifet();}
});

scissors.addEventListener("click",function () {
	comparison(Selection[2])

	if ( total >= numHand){

	  butonlaripasifet();}
});


function butonlaripasifet() {
	 rockButton.style.display = 'none';
	   papper.style.display = 'none';
	   scissors.style.display = 'none';
	   document.write("Your usage right is over.")
}

	function comparison(userSelection) {
	do{
var comSelection = (Math.random()*3);
if (comSelection <= 1) {
comSelection = Selection[0];
} else if (comSelection <= 2) {
comSelection = Selection[1];
} else if (comSelection <= 3) {
comSelection = Selection[2];
}
if (userSelection == comSelection) {
	++draw;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Draw. Computer :"+computer+"user :"+ user + "Draw :"+draw);
} else if (userSelection =="rock" && comSelection === "papper"){
	++computer;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Computer win. Computer :"+computer+"User :"+ user + "Draw :"+ draw);
	
} else if(userSelection == "papper" && comSelection === "rock"){
	++user;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"User win. Computer :"+computer+"User :"+ user + "Draw :"+ draw);
	
} else if(userSelection =="scissors" && comSelection === "rock"){
	++computer;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Computer win. Computer :"+computer+"User :"+ user + "Draw :"+ draw);
		
} else if(userSelection =="rock" && comSelection === "scissors"){
	++user;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"User win. Computer :"+computer+"User :"+ user + "Draw :"+ draw);
		
} else if(userSelection =="papper" && comSelection === "scissors"){
	++computer;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Computer win. Computer :"+computer+"User :"+ user + "Draw :"+ draw);
		
} else if(userSelection =="makas" && comSelection === "papper"){
	++user;
	alert("Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"User win. Computer :"+computer+"User :"+ user + "Draw :"+ draw);
		
}
total++;}
while(total == numHand);
}

