var customerNumbers = 12; 
var winningNumbers = []; 

winningNumbers.push(12, 17, 24, 37, 38, 43); 

//This message will show the full array and the winning numbers and the customer numbers as a pop up window
var message = ("This Week's Winning Numbers are: \n\n" + winningNumbers + "\n\n" + "The Customer's Number is: \n\n" + customerNumbers + "\n\n");
var loser="Sorry you are not a winner this week.";
var winner="We have a match and a winner!";
var match = false;
//the for loop will check each position for the length of the array and until the variabl match is false
for (var i=0; i<winningNumbers.length && match == false ;i++){
	if(customerNumbers == winningNumbers[i]){
		match = true; //to flag if a match is found	
	}
}
	
	//Display the messages
if(match){
	alert(message + winner);
}else{
	alert(message + loser);
}



