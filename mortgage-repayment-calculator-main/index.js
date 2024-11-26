"use strict";
//Colors
var lime = 'hsl(61, 70%, 52%)';
var lime95 = 'hsl(61 70% 95%)';
var blue = 'hsl(200, 24%, 40%)';
var red = 'hsl(4, 69%, 50%)';
var lightBlue = 'hsl(202, 86%, 94%)';
//Query selectors start --------------------------------------------------------
var form = document.querySelector('form');
var mortgageAmount = document.querySelector('#amountInput');
var amountWrapper = document.querySelector('#amountWrapper');
var pound = document.querySelector('#pound');
var mortgageTerm = document.querySelector('#termInput');
var termWrapper = document.querySelector('#termWrapper');
var years = document.querySelector('#years');
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
var amountError = document.querySelector('#amountError');
var termError = document.querySelector('#termError');
var rateError = document.querySelector('#rateError');
var typeError = document.querySelector('#typeError');
//Initial styling start --------------------------------------------------------
amountError.style.display = 'none';
termError.style.display = 'none';
rateError.style.display = 'none';
typeError.style.display = 'none';
//Initial styling end ----------------------------------------------------------
//Styling functions start ------------------------------------------------------
radioRepayment.addEventListener('click', radioActiveState);
interestOnlyRadio.addEventListener('click', radioActiveState);
function radioActiveState() {
    radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked');
    if (radioButtonsChecked.value === 'repayment') {
        labelRepayment.style.borderColor = lime;
        labelRepayment.style.backgroundColor = lime95;
        interestOnlyLabel.style.borderColor = blue;
        interestOnlyLabel.style.backgroundColor = 'white';
    }
    else if (radioButtonsChecked.value === 'interestOnly') {
        interestOnlyLabel.style.borderColor = lime;
        interestOnlyLabel.style.backgroundColor = lime95;
        labelRepayment.style.borderColor = blue;
        labelRepayment.style.backgroundColor = 'white';
    }
    else {
        labelRepayment.style.borderColor = blue;
        labelRepayment.style.borderColor = blue;
        labelRepayment.style.backgroundColor = 'white';
        labelRepayment.style.backgroundColor = 'white';
    }
}
;
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
//Function call start -------------------------------------------
button.addEventListener("click", function (event) {
    if (!mortgageAmount.value || !mortgageTerm.value
        || !interestRate.value || !radioButtonsChecked) {
        event.preventDefault();
        formValidation();
    }
    else {
        if (mortgageType === 'interestOnly') {
            event.preventDefault();
            var result = calculateInterestOnly();
            monthlyPayments.textContent = result[0];
            totalPayments.textContent = result[1];
        }
        else if (mortgageType === 'repayment') {
            event.preventDefault();
            var result = calculateRepayment();
            monthlyPayments.textContent = result[0];
            totalPayments.textContent = result[1];
        }
    }
});
//Function call end ---------------------------------------------
//Calculate interest only start ---------------------------------
function calculateInterestOnly() {
    var decimal = interestRateValue / 100;
    console.log(decimal, 'decimal');
    var yearlyInterest = amountValue * decimal;
    var monthlyInterest = yearlyInterest / 12;
    var totalInterest = yearlyInterest * termValue;
    return [Math.floor(monthlyInterest).toString(), Math.floor(totalInterest).toString()];
}
//Calculate interest only end -----------------------------------
//Calculate repayment start -------------------------------------
function calculateRepayment() {
    var decimal = interestRateValue / 100;
    var yearlyRepayment = amountValue / termValue;
    var yearlyInterest = amountValue * decimal;
    var amountLeft = amountValue;
    var totalInterest = 0;
    for (var i = 0; i < termValue; i++) {
        amountLeft -= yearlyRepayment;
        console.log(amountLeft, 'amountleft');
        yearlyInterest = amountLeft * decimal;
        console.log(yearlyInterest, 'yearlyInterest');
        totalInterest += yearlyInterest;
        console.log(totalInterest, 'totalinterest');
    }
    var totalPayments = amountValue + totalInterest;
    var yearlyPayments = totalPayments / termValue;
    var monthlyPayments = yearlyPayments / 12;
    return [Math.floor(monthlyPayments).toString(), Math.floor(totalPayments).toString()];
}
//Calculate repayment end ---------------------------------------
//Calculations end -------------------------------------------------------------
//Form valitation start---------------------------------------------------------
button.addEventListener('click', formValidation);
function formValidation() {
    if (!mortgageAmount.value) {
        amountError.style.display = 'flex';
        amountWrapper.style.borderColor = red;
        pound.style.background = red;
        pound.style.color = 'white';
    }
    else {
        amountError.style.display = 'none';
        amountWrapper.style.borderColor = blue;
        pound.style.backgroundColor = lightBlue;
        pound.style.color = blue;
    }
    if (!mortgageTerm.value) {
        termError.style.display = 'flex';
        termWrapper.style.borderColor = red;
        years.style.backgroundColor = red;
        years.style.color = 'white';
    }
    else {
        termError.style.display = 'none';
        termWrapper.style.borderColor = blue;
        years.style.backgroundColor = lightBlue;
        years.style.color = blue;
    }
    if (!interestRate.value) {
        rateError.style.display = 'flex';
    }
    else {
        rateError.style.display = 'none';
    }
    if (!interestRate.value) {
        rateError.style.display = 'flex';
    }
    else {
        rateError.style.display = 'none';
    }
    if (!radioButtonsChecked) {
        typeError.style.display = 'flex';
    }
    else {
        typeError.style.display = 'none';
    }
    document.addEventListener('keyup', formValidation);
    radioButtons[0].addEventListener('click', formValidation);
    radioButtons[1].addEventListener('click', formValidation);
}
//Form valitation end ----------------------------------------------------------
//# sourceMappingURL=index.js.map