//Colors
const lime = 'hsl(61, 70%, 52%';
const blue = 'hsl(200, 24%, 40%)';


//Query selectors start --------------------------------------------------------

const form = document.querySelector('form') as HTMLElement;
const mortgageAmount = document.querySelector('#amountInput') as HTMLInputElement;
const mortgageTerm = document.querySelector('#termInput') as HTMLInputElement;
const interestRate = document.querySelector('#interestRateInput') as HTMLInputElement;

const radioRepayment = document.querySelector('#radioRepayment') as HTMLInputElement;
let radioRepaymentChecked = document.querySelector('#radioRepayment:checked') as HTMLInputElement;
const labelRepayment = document.querySelector('#repaymentLabel') as HTMLInputElement;

const interestOnlyRadio = document.querySelector('#radioInterestOnly') as HTMLElement;
let interestOnlyRadioChecked = document.querySelector('#radioInterestOnly:checked') as HTMLInputElement;
const interestOnlyLabel = document.querySelector('#interestOnlyLabel') as HTMLElement;

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
}

radioRepayment.addEventListener('click', updateType);
interestOnlyRadio.addEventListener('click', updateType);

function updateType() {
  console.log(radioRepaymentChecked.value);
  if (radioRepaymentChecked) {
    mortgageType = radioRepaymentChecked.value;
  } else if (interestOnlyRadioChecked) {
    mortgageType = interestOnlyRadioChecked.value;
  } else {
    mortgageType = ''
  }
  console.log(mortgageType);
}
