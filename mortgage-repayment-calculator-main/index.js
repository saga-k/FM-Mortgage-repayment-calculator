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
}
radioRepayment.addEventListener('click', updateType);
interestOnlyRadio.addEventListener('click', updateType);
function updateType() {
    radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked');
    console.log(radioButtons);
    console.log(radioButtonsChecked.value);
    if (radioButtonsChecked.value === 'repayment') {
        mortgageType = radioButtonsChecked.value;
    }
    else if (radioButtonsChecked.value === 'interestOnly') {
        mortgageType = radioButtonsChecked.value;
    }
    else {
        mortgageType = '';
    }
}
//# sourceMappingURL=index.js.map