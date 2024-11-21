"use strict";
//Colors
var lime = 'hsl(61, 70%, 52%)';
var blue = 'hsl(200, 24%, 40%)';
//Query selectors start --------------------------------------------------------
var form = document.querySelector('form');
var mortgageAmount = document.querySelector('#amountInput');
var mortgageTerm = document.querySelector('#termInput');
var interestRate = document.querySelector('#interestRateInput');
var radioRepayment = document.querySelector('#radioRepayment');
var labelRepayment = document.querySelector('#repaymentLabel');
var interestOnlyRadio = document.querySelector('#radioInterestOnly');
var interestOnlyLabel = document.querySelector('#interestOnlyLabel');
var radioButtons = document.querySelectorAll('input[name="mortgageType"]');
var radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked');
var button = document.querySelector('button');
var clearAll = document.querySelector('#clearAll');
var emptyResults = document.querySelector('#emptyResults');
var completedResults = document.querySelector('#completedResults');
var monthlyPayments = document.querySelector('#monthlyPaymentsNumber');
var totalPayments = document.querySelector('#totalPaymentsNumber');
//Initial function calls start -------------------------------------------------
//Initial function calls end ---------------------------------------------------
//Styling functions start ------------------------------------------------------
radioRepayment.addEventListener('focus', function () {
    labelRepayment.style.borderColor = lime;
});
radioRepayment.addEventListener('blur', function () {
    labelRepayment.style.borderColor = blue;
});
interestOnlyRadio.addEventListener('focus', function () {
    interestOnlyLabel.style.borderColor = lime;
    labelRepayment.style.borderColor = blue;
});
interestOnlyRadio.addEventListener('blur', function () {
    interestOnlyLabel.style.borderColor = blue;
});
//Styling functions end --------------------------------------------------------
//Form inputs start ------------------------------------------------------------
var amountValue = Number(mortgageAmount.value);
var termValue = Number(mortgageTerm.value);
var interestRateValue = Number(interestRate.value);
var mortgageType = '';
document.addEventListener('keyup', function () {
    updateValues();
});
function updateValues() {
    amountValue = Number(mortgageAmount.value);
    termValue = Number(mortgageTerm.value);
    interestRateValue = Number(interestRate.value);
}
radioRepayment.addEventListener('click', updateType);
interestOnlyRadio.addEventListener('click', updateType);
function updateType() {
    radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked');
    console.log(radioButtonsChecked.value);
    console.log(typeof (radioButtonsChecked.value));
    if (radioButtonsChecked.value === 'repayment') {
        mortgageType = 'repayment';
    }
    else if (radioButtonsChecked.value === 'interestOnly') {
        mortgageType = 'interestOnly';
    }
    else {
        mortgageType = '';
    }
}
//Form inputs end --------------------------------------------------------------
//Calculations start -----------------------------------------------------------
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") { // Checks if the spacebar is pressed
        event.preventDefault(); // Prevents the default behavior (e.g., page scrolling)
        calculate();
    }
});
function calculate() {
    var decimal = interestRateValue / 100;
    console.log(decimal, 'decimal');
    var yearlyInterest = amountValue * decimal;
    var totalInterest = yearlyInterest * termValue;
    console.log(totalInterest);
}
//# sourceMappingURL=index.js.map