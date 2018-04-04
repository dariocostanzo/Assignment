var customerNumbers = 12;
var winningNumbers = []; 

winningNumbers.push(12, 17, 24, 37, 38, 43);

var message = ("This Week's Winning Numbers are: \n\n" + winningNumbers + "\n\n" + "The Customer's Number is: \n\n" + customerNumbers + "\n\n");
var loser="Sorry you are not a winner this week.";
var winner="We have a match and a winner!";
var match = false;

function init() {//this function will start the process
    checkNumbers(getCustomerNumber(), getWinningNumbers());
}

function checkNumbers(customerNumbers, winningNumbers) {// this function will check the lottery result
	for (var i=0; i<winningNumbers.length && match == false ;i++) {
		if(customerNumbers == winningNumbers[i]) {
		match = true; //variable used to flag if a match is found	
		}
	}
	return displayResult();
}

function getCustomerNumber() //This function will return the customer number
{
	return customerNumbers;
}

function getWinningNumbers() //Will return the array of winning numbers
{
	return winningNumbers;
}

function displayResult() //This function will display the results
{
	if (match) { 
        alert(message + winner);
    } else {
        alert(message + loser);
    }
	
}
window.onload = init; //event that will start the event once the web page has completely loaded all content