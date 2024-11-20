//Colors
const lime = 'hsl(61, 70%, 52%';
const blue = 'hsl(200, 24%, 40%)';


//Query selectors start --------------------------------------------------------

const form = document.querySelector('form') as HTMLElement;
const mortgageAmount = document.querySelector('#amountInput') as HTMLElement;
const mortgageTerm = document.querySelector('#termInput') as HTMLElement;

const radioRepayment = document.querySelector('#radioRepayment') as HTMLElement;
const labelRepayment = document.querySelector('#repaymentLabel') as HTMLElement;

const interestOnlyRadio = document.querySelector('#radioInterestOnly') as HTMLElement;
const interestOnlyLabel = document.querySelector('#interestOnlyLabel') as HTMLElement;

const button = document.querySelector('button') as HTMLElement;
const clearAll = document.querySelector('#clearAll') as HTMLElement;

const emptyResults = document.querySelector('#emptyResults') as HTMLElement;
const completedResults = document.querySelector('#completedResults') as HTMLElement;
const monthlyPayments = document.querySelector('#monthlyPaymentsNumber') as HTMLElement;
const totalPayments = document.querySelector('#totalPaymentsNumber') as HTMLElement;

//console.log(radioRepayment);
//Styling functions start ------------------------------------------------------

radioRepayment.addEventListener('focus', () => {
  labelRepayment.style.borderColor = lime;
});

radioRepayment.addEventListener('blur', () => {
  labelRepayment.style.borderColor = blue;
});

interestOnlyRadio.addEventListener('focus', () => {
  interestOnlyLabel.style.borderColor = lime;
});

interestOnlyRadio.addEventListener('blur', () => {
  interestOnlyLabel.style.borderColor = blue;
});

//Styling functions end --------------------------------------------------------
