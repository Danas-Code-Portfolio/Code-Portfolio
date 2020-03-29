//Set variables
var amount = 0;
var length = 0;
var interest = 0;


//Create Inputs to use for below
function calculate()
{
var amount = (document.getElementById("loanTxt").value);
var length = (document.getElementById("loanLength").value); 
var interest = (document.getElementById("loanInterest").value); 

//Calculate Loan Details
var test = parseInt(amount);
var first =  amount + answer;
var some = amount / length;
var more = some / interest
var final = more  * length;
var total = (first * length);
var last = total + final;
var rate = length / 12;
var i = interest / 100;
var answer = amount * rate * i;
var rounded = Math.round(answer);
let monthly = (rounded + test);


document.getElementById('amount').innerHTML = ("$") + rounded +(" /Month");
document.getElementById('monthly').innerHTML = ("$") + monthly +(" /Month");
}


