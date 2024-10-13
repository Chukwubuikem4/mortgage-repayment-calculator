// Form inputs
const form = document.querySelector('form');
const amount_input = document.querySelector('#amount');
const term_input = document.querySelector('#term');
const rate_input = document.querySelector('#rate');

// Radio inputs
const repaymentRadioBtn = document.querySelector('#repayment');
const interestRadioBtn = document.querySelector('#interest');

//Clear button
const clearAll_sm = document.querySelector('#clear-all');


// form Event Listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getFormErrors();
    checkRadio();
    radioErrorCheck();
    resetRadioError()

    // Values for Mortgage Calculation
    let amountValue = amount_input.value;
    let termValue = term_input.value;
    let rateValue = rate_input.value;
    calculateMortgage(amountValue, termValue, rateValue);
});

//Form validation
const getFormErrors = () =>{
    let amountValue = amount_input.value.trim();
    let termValue = term_input.value.trim();
    let rateValue = rate_input.value.trim();

    if (amountValue === "" || amountValue === null){
        setErrorsFor(amount_input, "This Field is required")

    } else if (amountValue < 10000){
        setErrorsFor(amount_input, "Amount should not be less than £10,000");
    }
    
    if (termValue === "" || termValue === null){
        setErrorsFor(term_input, "This Field is required")

    } else if (termValue < 1){
        setErrorsFor(term_input, "Term should not be less than 1 year");

    } else if (termValue > 50){
        setErrorsFor(term_input, "Term should not be greater than 50 years")
    }

    if (rateValue === "" || rateValue === null){
        setErrorsFor(rate_input, "This Field is required")

    } else if (rateValue < 1){
        setErrorsFor(rate_input, "Interest should not be less than 1%");

    } else if (rateValue > 100){
        setErrorsFor(rate_input, "Interest should not be more than 100%");
    }
}

const setErrorsFor = (input, message) => {
    const formControl = input.parentElement.parentElement;

    const inputParent = input.parentElement;
    inputParent.classList.add('error-border');

    const errorMessage = formControl.querySelector('span');
    errorMessage.classList.add('error-msg');
    errorMessage.innerText = message;

    const errorIcon = formControl.querySelector('#icon');
    errorIcon.classList.add('error');
}

// Radio Error Validation
const radioErrorCheck = () =>{
    if (radioInputs[0].checked === false && radioInputs[1].checked === false){
        const radioParent = document.querySelector('#radio-parent');
        const errorMessage = radioParent.querySelector('span')
        errorMessage.innerText = "This Field is required";
        errorMessage.classList.add('error-msg');
    }
}

// Remove Errors while Refilling
const inputsToRemoveErrors = [amount_input, term_input, rate_input];

inputsToRemoveErrors.forEach(input =>{
    input.addEventListener('input', ()=>{
        removeErrors(input)
    })
});

const removeErrors = (input) =>{
    const formControl = input.parentElement.parentElement;

    const errorMessage = formControl.querySelector('span');
    errorMessage.innerText = "";
    
    const errorIcon = formControl.querySelector('#icon');
    if (errorIcon.classList.contains('error')){
        errorIcon.classList.remove('error');
    }

    const inputParent = input.parentElement;
    if (inputParent.classList.contains('error-border')){
        inputParent.classList.remove('error-border')
    }
    
}

// Radio Error Reset
const resetRadioError = () =>{
    if (radioInputs[0].checked === true && radioInputs[1].checked === false){
        const radioParent = document.querySelector('#radio-parent');
        const errorMessage = radioParent.querySelector('span')
        errorMessage.innerText = "";

    } else if (radioInputs[0].checked === false && radioInputs[1].checked === true){
        const radioParent = document.querySelector('#radio-parent');
        const errorMessage = radioParent.querySelector('span')
        errorMessage.innerText = "";

    }
}

/* ACTIVE STATE */
const inputsForActiveState = [amount_input];

inputsForActiveState.forEach(input =>{
    input.addEventListener('input', ()=>{
        activeStateFor(input);
    })
});

const activeStateFor = (input) =>{
    const formControl = input.parentElement.parentElement;

    const inputParent = input.parentElement;
    inputParent.classList.add('active-border');

    const activeIcon = formControl.querySelector('#icon');
    activeIcon.classList.add('active');
}

// Radio Check
const radioInputs = [repaymentRadioBtn, interestRadioBtn];

radioInputs.forEach(radioInput =>{
    radioInput.addEventListener('click', ()=>{
        checkRadio()
    })
});

const checkRadio = () =>{
    const repaymentParentEl = radioInputs[0].parentElement;
    const interestParentEl = radioInputs[1].parentElement;

    if(radioInputs[0].checked === true){
        repaymentParentEl.classList.add('checked')
        interestParentEl.classList.remove('checked');

    } else if(radioInputs[1].checked === true){
        repaymentParentEl.classList.remove('checked')
        interestParentEl.classList.add('checked');

    } else{
        repaymentParentEl.classList.remove('checked')
        interestParentEl.classList.remove('checked');
    }
};

// Clear All button Event
clearAll_sm.addEventListener('click', ()=>{
    amount_input.value = "";
    term_input.value = "";
    rate_input.value = "";
});

// Calculating Mortgage and displaying results
const calculateMortgage = (amount, term, rate) =>{
    let r = (rate / 100) / 12;
    let m = (r * amount) / (1 - (1 + r) ** (-term * 12));
    let monthlyRepayment = m.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'});
    let totalRepayment = (m * (term * 12)).toLocaleString('en-GB', {style: 'currency', currency: 'GBP'});
    showResults(monthlyRepayment, totalRepayment);
}

const showResults = (monthly, total) =>{
    const completedResult = document.querySelector('#completed-results');
    const emptyResult = document.querySelector('#empty-results');
    
    if (completedResult.classList.contains('hidden')){
        completedResult.classList.remove('hidden');
        emptyResult.style.display = 'none';
    }
    
    const monthlyRepayment_h1 = document.querySelector('#monthly-repayment-result');
    monthlyRepayment_h1.innerText = monthly;
    const totalRepayment_h3 = document.querySelector('#over-the-term-result');
    totalRepayment_h3.innerText = total;
}






