var customerNumbers = 12;
var winningNumbers = []; 

winningNumbers.push(12, 17, 24, 37, 38, 43); //add the items to the array

//This message will show the full array and the winning numbers and the customer numbers as a pop up window
var message = ("This Week's Winning Numbers are: \n\n" + winningNumbers + "\n\n" + "The Customer's Number is: \n\n" + customerNumbers + "\n\n");
var loser="Sorry you are not a winner this week.";
var winner="We have a match and a winner!";

var match = false;
//compare customer number to each of the six winning numbers, if match assing true to match
if(customerNumbers == winningNumbers[0] || customerNumbers == winningNumbers[1] || customerNumbers == winningNumbers[2] 
|| customerNumbers == winningNumbers[3] || customerNumbers == winningNumbers[4] || customerNumbers == winningNumbers[5])
{
	match = true;
}
//Display the messages
if(match){
	alert(message + winner);
}else{
	alert(message + loser);
}