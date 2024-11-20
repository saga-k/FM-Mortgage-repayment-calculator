"use strict";
//Colors
var lime = 'hsl(61, 70%, 52%';
var blue = 'hsl(200, 24%, 40%)';
//Query selectors start --------------------------------------------------------
var form = document.querySelector('form');
var mortgageAmount = document.querySelector('#amountInput');
var mortgageTerm = document.querySelector('#termInput');
var radioRepayment = document.querySelector('#radioRepayment');
var labelRepayment = document.querySelector('#repaymentLabel');
var interestOnlyRadio = document.querySelector('#radioInterestOnly');
var interestOnlyLabel = document.querySelector('#interestOnlyLabel');
var button = document.querySelector('button');
var clearAll = document.querySelector('#clearAll');
var emptyResults = document.querySelector('#emptyResults');
var completedResults = document.querySelector('#completedResults');
var monthlyPayments = document.querySelector('#monthlyPaymentsNumber');
var totalPayments = document.querySelector('#totalPaymentsNumber');
//console.log(radioRepayment);
//Styling functions start ------------------------------------------------------
radioRepayment.addEventListener('focus', function () {
    labelRepayment.style.borderColor = lime;
});
radioRepayment.addEventListener('blur', function () {
    labelRepayment.style.borderColor = blue;
});
interestOnlyRadio.addEventListener('focus', function () {
    interestOnlyLabel.style.borderColor = lime;
});
interestOnlyRadio.addEventListener('blur', function () {
    interestOnlyLabel.style.borderColor = blue;
});
//Styling functions end --------------------------------------------------------
//# sourceMappingURL=index.js.map