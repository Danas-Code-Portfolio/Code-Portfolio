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
var first =  amount * interest;
var some = amount / length;
var more = some / interest
var final = more  * length;
var total = (first * length);
var last = total + final;
console.log(total);

document.getElementById('amount').innerHTML = ("$") +last +(" /Month");
}


