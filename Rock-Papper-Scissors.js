var Selection = ["rock","papper","scissors"];
 var numHand = prompt("How many hands do you want ?");
 var  total=-1 , computer=0, user=0,draw=0, userSelection;

var rockButton = document.getElementById("r");
var papper = document.getElementById("p");
var scissors = document.getElementById("s");
var write = document.getElementById("w");


rockButton.addEventListener("click",function () {
	comparison(Selection[0])

	if ( total >= numHand){

	  passivebuttons();}
});
papper.addEventListener("click",function () {
	comparison(Selection[1])

	if ( total >= numHand){
		
	  passivebuttons();}
});

scissors.addEventListener("click",function () {
	comparison(Selection[2])

	if ( total >= numHand){

	  passivebuttons();}
});


function passivebuttons() {
	 write.innerHTML = " Computer :"+computer+"user :"+ user + "Draw :"+draw+"\nHakkınız Bitti.";

rockButton.style.display = 'none';
	   papper.style.display = 'none';
	   scissors.style.display = 'none';
	  // document.write("Your usage right is over.")

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
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Draw. Computer :"+computer+"user :"+ user + "Draw :"+draw;
} else if (userSelection === "rock" && comSelection === "papper"){
	++computer;
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Computer win. Computer :"+computer+"User :"+ user + "Draw :"+ draw;	
} else if(userSelection === "papper" && comSelection === "rock"){
	++user;
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"User win. Computer :"+computer+"User :"+ user + "Draw :"+ draw;
	
} else if(userSelection === "scissors" && comSelection === "rock"){
	++computer;
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Computer win. Computer :"+computer+"User :"+ user + "Draw :"+ draw;
		
} else if(userSelection ==="rock" && comSelection === "scissors"){
	++user;
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"User win. Computer :"+computer+"User :"+ user + "Draw :"+ draw;
		
} else if(userSelection === "papper" && comSelection === "scissors"){
	++computer;
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"Computer win. Computer :"+computer+"User :"+ user + "Draw :"+ draw;
		
} else if(userSelection === "scissors" && comSelection === "papper"){
	++user;
	write.innerHTML = "Your choice :"+userSelection+"\nComputer choice :"+comSelection+"\nResult :"+"User win. Computer :"+computer+"User :"+ user + "Draw :"+ draw;
		
}
total++;}
while(total > numHand);

}
