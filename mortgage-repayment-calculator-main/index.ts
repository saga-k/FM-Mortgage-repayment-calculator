//Colors
const lime = 'hsl(61, 70%, 52%)';
const lime95 = 'hsl(61 70% 95%)';
const blue = 'hsl(200, 24%, 40%)';
const red = 'hsl(4, 69%, 50%)';
const lightBlue = 'hsl(202, 86%, 94%)';

//Query selectors start --------------------------------------------------------

const form = document.querySelector('form') as HTMLElement;

const mortgageAmount = document.querySelector('#amountInput') as HTMLInputElement;
const amountWrapper = document.querySelector('#amountWrapper') as HTMLElement;
const pound = document.querySelector('#pound') as HTMLElement;

const mortgageTerm = document.querySelector('#termInput') as HTMLInputElement;
const termWrapper = document.querySelector('#termWrapper') as HTMLElement;
const years = document.querySelector('#years') as HTMLElement;

const interestRate = document.querySelector('#interestRateInput') as HTMLInputElement;

const radioRepayment = document.querySelector('#radioRepayment') as HTMLInputElement;
const labelRepayment = document.querySelector('#repaymentLabel') as HTMLInputElement;

const interestOnlyRadio = document.querySelector('#radioInterestOnly') as HTMLElement;
const interestOnlyLabel = document.querySelector('#interestOnlyLabel') as HTMLElement;

const radioButtons = document.querySelectorAll('input[name="mortgageType"]');
let radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked') as HTMLInputElement;

const button = document.querySelector('button') as HTMLElement;
const clearAll = document.querySelector('#clearAll') as HTMLElement;

const emptyResults = document.querySelector('#emptyResults') as HTMLElement;
const completedResults = document.querySelector('#completedResults') as HTMLElement;
const monthlyPayments = document.querySelector('#monthlyPaymentsNumber') as HTMLElement;
const totalPayments = document.querySelector('#totalPaymentsNumber') as HTMLElement;

const amountError = document.querySelector('#amountError') as HTMLElement;
const termError = document.querySelector('#termError') as HTMLElement;
const rateError = document.querySelector('#rateError') as HTMLElement;
const typeError = document.querySelector('#typeError') as HTMLElement;

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
  radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked') as HTMLInputElement;
  if (radioButtonsChecked.value === 'repayment') {
    labelRepayment.style.borderColor = lime;
    labelRepayment.style.backgroundColor = lime95;

    interestOnlyLabel.style.borderColor = blue;
    interestOnlyLabel.style.backgroundColor = 'white';

  } else if (radioButtonsChecked.value === 'interestOnly') {
    interestOnlyLabel.style.borderColor = lime;
    interestOnlyLabel.style.backgroundColor = lime95;

    labelRepayment.style.borderColor = blue;
    labelRepayment.style.backgroundColor = 'white';

  } else {
    labelRepayment.style.borderColor = blue;
    labelRepayment.style.borderColor = blue;

    labelRepayment.style.backgroundColor = 'white';
    labelRepayment.style.backgroundColor = 'white';
  }
};

//Styling functions end --------------------------------------------------------

//Form inputs start ------------------------------------------------------------

let amountValue = Number(mortgageAmount.value);
let termValue = Number(mortgageTerm.value);
let interestRateValue = Number(interestRate.value);
let mortgageType = '';

document.addEventListener('keyup', () => {
  updateValues()
});

function updateValues() {
  amountValue = Number(mortgageAmount.value);
  termValue = Number(mortgageTerm.value);
  interestRateValue = Number(interestRate.value);
}

radioRepayment.addEventListener('click', updateType);
interestOnlyRadio.addEventListener('click', updateType);

function updateType() {
  radioButtonsChecked = document.querySelector('input[name="mortgageType"]:checked') as HTMLInputElement;

  if (radioButtonsChecked.value === 'repayment') {
    mortgageType = 'repayment';
  } else if (radioButtonsChecked.value === 'interestOnly') {
    mortgageType = 'interestOnly';
  } else {
    mortgageType = ''
  }
}
//Form inputs end --------------------------------------------------------------



//Calculations start -----------------------------------------------------------

//Function call start -------------------------------------------

button.addEventListener("click", function (event) {
  if (!mortgageAmount.value || !mortgageTerm.value
    || !interestRate.value || !radioButtonsChecked) {
    event.preventDefault();
    formValidation()
  } else {

    if (mortgageType === 'interestOnly') {
      event.preventDefault();
      let result = calculateInterestOnly();
      monthlyPayments.textContent = result[0];
      totalPayments.textContent = result[1];

    } else if (mortgageType === 'repayment') {
      event.preventDefault();
      let result = calculateRepayment();
      monthlyPayments.textContent = result[0];
      totalPayments.textContent = result[1];
    }
  }
});

//Function call end ---------------------------------------------



//Calculate interest only start ---------------------------------

function calculateInterestOnly() {
  let decimal = interestRateValue / 100;
  console.log(decimal, 'decimal');

  let yearlyInterest = amountValue * decimal;
  let monthlyInterest = yearlyInterest / 12;
  let totalInterest = yearlyInterest * termValue;

  return [Math.floor(monthlyInterest).toString(), Math.floor(totalInterest).toString()];
}

//Calculate interest only end -----------------------------------



//Calculate repayment start -------------------------------------

function calculateRepayment() {

  let decimal = interestRateValue / 100;
  let yearlyRepayment = amountValue / termValue;
  let yearlyInterest = amountValue * decimal;
  let amountLeft = amountValue
  let totalInterest = 0

  for (let i = 0; i < termValue; i++) {
    amountLeft -= yearlyRepayment
    console.log(amountLeft, 'amountleft')
    yearlyInterest = amountLeft * decimal
    console.log(yearlyInterest, 'yearlyInterest')
    totalInterest += yearlyInterest;
    console.log(totalInterest, 'totalinterest')
  }

  let totalPayments = amountValue + totalInterest;
  let yearlyPayments = totalPayments / termValue;
  let monthlyPayments = yearlyPayments / 12;

  return [Math.floor(monthlyPayments).toString(), Math.floor(totalPayments).toString()]
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
  } else {
    amountError.style.display = 'none'
    amountWrapper.style.borderColor = blue;
    pound.style.backgroundColor = lightBlue;
    pound.style.color = blue
  }

  if (!mortgageTerm.value) {
    termError.style.display = 'flex';
    termWrapper.style.borderColor = red;
    years.style.backgroundColor = red;
    years.style.color = 'white';
  } else {
    termError.style.display = 'none'
    termWrapper.style.borderColor = blue;
    years.style.backgroundColor = lightBlue;
    years.style.color = blue;

  }

  if (!interestRate.value) {
    rateError.style.display = 'flex';
  } else {
    rateError.style.display = 'none'
  }

  if (!interestRate.value) {
    rateError.style.display = 'flex';
  } else {
    rateError.style.display = 'none'
  }

  if (!radioButtonsChecked) {
    typeError.style.display = 'flex';
  } else {
    typeError.style.display = 'none';
  }

  document.addEventListener('keyup', formValidation);
  radioButtons[0].addEventListener('click', formValidation);
  radioButtons[1].addEventListener('click', formValidation);
}




//Form valitation end ----------------------------------------------------------
