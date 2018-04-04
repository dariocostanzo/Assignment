var customerNumbers = []; 
var winningNumbers = [];

winningNumbers.push(12, 17, 24, 37, 38, 43); //add the items to the array
customerNumbers.push(12, 17, 24, 37, 38, 43);

var message = ("This Week's Winning Numbers are: \n\n" + winningNumbers + "\n\n" + "The Customer's Number are: \n\n" + customerNumbers + "\n\n");
var matchedNumbers = ("Numbers matched: ");
var match = 0;//A 0 need to be assigne to this variable because needs to be used as a counter, see below

function init() {//this function will kick off the whole process
    checkNumbers(getCustomerNumber(), getWinningNumbers());
}

function checkNumbers(customerNumbers, winningNumbers) {//A nested loop is need in order to compare the numbers from two different arrays
	for (var i=0; i<winningNumbers.length;i++)	{
			for (var j=0; j<customerNumbers.length;j++)	{
					if (customerNumbers[j] == winningNumbers[i])	{
					match ++;//will increment every time a match is found between customberNUmbers and winningNumbers
				}
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
        alert(message + matchedNumbers + match);
}
window.onload = init;