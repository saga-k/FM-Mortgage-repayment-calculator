//Colors
const lime = 'hsl(61, 70%, 52%)';
const blue = 'hsl(200, 24%, 40%)';


//Query selectors start --------------------------------------------------------

const form = document.querySelector('form') as HTMLElement;
const mortgageAmount = document.querySelector('#amountInput') as HTMLInputElement;
const mortgageTerm = document.querySelector('#termInput') as HTMLInputElement;
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

//Initial function calls start -------------------------------------------------


//Initial function calls end ---------------------------------------------------

//Styling functions start ------------------------------------------------------

radioRepayment.addEventListener('focus', () => {
  labelRepayment.style.borderColor = lime;
});

radioRepayment.addEventListener('blur', () => {
  labelRepayment.style.borderColor = blue;
});

interestOnlyRadio.addEventListener('focus', () => {
  interestOnlyLabel.style.borderColor = lime;
  labelRepayment.style.borderColor = blue;
});

interestOnlyRadio.addEventListener('blur', () => {
  interestOnlyLabel.style.borderColor = blue;
});

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
  console.log(radioButtonsChecked.value);
  console.log(typeof (radioButtonsChecked.value));
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
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") { // Checks if the spacebar is pressed
    event.preventDefault(); // Prevents the default behavior (e.g., page scrolling)
    calculateRepayment();
  }
});

function calculateInterestOnly() {
  let decimal = interestRateValue / 100;
  console.log(decimal, 'decimal');

  let yearlyInterest = amountValue * decimal;
  let monthlyInterest = yearlyInterest / 12;
  let totalInterest = yearlyInterest * termValue;
  console.log(totalInterest);
}

function calculateRepayment() {
  let decimal = interestRateValue / 100;
  console.log(decimal, 'decimal');

  //let monthlyInterest = yearlyInterest / 12;
  //let totalInterest = yearlyInterest * termValue;
  //console.log(totalInterest);

  let yearlyRepayment = amountValue / termValue;
  console.log(yearlyRepayment, 'yearlyRepayment');

  let yearlyInterest = amountValue * decimal;
  let repaid = 0
  let amountLeft = amountValue
  let yearlyTotal = 0

  for (let i = 0; i < termValue; i++) {
    repaid += yearlyRepayment
    console.log('repaid', repaid)
    amountLeft -= yearlyRepayment;
    console.log('amount left', amountLeft)
    yearlyInterest = amountLeft * decimal;
    console.log('yearlyInterest', yearlyInterest);
    yearlyTotal += (amountLeft + yearlyInterest);
    console.log(yearlyTotal);
  }

  let totalPayments = yearlyTotal * termValue;
  let monthlyPayments = yearlyTotal / 12;
}
