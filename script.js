/* const form = document.querySelector('form');
const mgAmount_input = document.querySelector('#mortgage-amount');
const mgTerm_input = document.querySelector('#mortgage-term');
const interestRate_input = document.querySelector('#interest-rate');
const clearAll = document.querySelector('#clear-all');
const calc_btn = document.querySelector('#calc-btn');

// Calculate and show Completed result while hiding empty
calc_btn.addEventListener('click', ()=>{
    showCompleteResult();
    calculate();
});

// Showing completed result, hiding empty result
const showCompleteResult = () =>{
    const emptyResult = document.querySelector('#empty-results');
    emptyResult.style.display = 'none';
    
    const completedResult = document.querySelector('#completed-results');
    if (completedResult.classList.contains('hidden')){
        completedResult.classList.remove('hidden');
        completedResult.style.display = 'block'
    }
};

// Calculating
const mgAmountValue = mgAmount_input.value;
const mgTermValue = mgTerm_input.value;
const interestRateValue = interestRate_input.value;

calculate = (mgAmountValue, mgTermValue, interestRateValue) =>{

    let monthlyInterestRate = (mgTermValue / 100) / 12;

    let totalPayments = mgTermValue * 12;

    let monthlyPayment = mgAmountValue * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), totalPayments) / (Math.pow((1 + interestRateValue), totalPayments) - 1);

    const monthlyRepaymentResult_h1 = document.querySelector('#monthly-repayment-result');

    monthlyRepaymentResult_h1.innerText = monthlyPayment.toFixed(2);
    
}

// Clear ALL FIELDS
clearAll.addEventListener('click', ()=>{
    mgAmount_input.value = "";
    mgTerm_input.value = "";
    interestRate_input.value = "";
});

// Get Active State
mgAmount_input.addEventListener('click', (e)=>{
    e.preventDefault();
    setActiveFor();
});

const setActiveFor = () =>{
    const activeIcon = document.querySelector('#icon');
    activeIcon.classList.add('active');
};

// Get Error Form
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getErrorForm();
});

const getErrorForm = () =>{
    const mgAmountValue = mgAmount_input.value.trim();
    const mgTermValue = mgTerm_input.value.trim();
    const interestRateValue = interestRate_input.value.trim();


    if (mgAmountValue === "" || mgAmountValue === null){
        setErrorFor(mgAmount_input, "This Field is required");

    };

    if (mgTermValue === "" || mgTermValue === null){
        setErrorFor(mgTerm_input, "This Field is required");

    };

    if (interestRateValue === "" || interestRateValue === null){
        setErrorFor(interestRate_input, "This Field is required");

    };
}

const setErrorFor = (input, message) =>{
    const formControl = input.parentElement.parentElement;
    const errorMsg = formControl.querySelector('#error-msg');
    const errorIcon = formControl.querySelector('#icon');

    // Adding Class
    errorMsg.innerText = message;
    errorMsg.classList.add('error-msg');
    errorIcon.classList.add('error');
};

// Removing errors
const inputsToValidate = [mgAmount_input, mgTerm_input, interestRate_input];


const addRemovalListeners = (inputs) =>{
    inputs.forEach(input =>{
        input.addEventListener('input', ()=>{
            removeErrorsFor(input);
        })
    })
}

// classes to be removed
const removeErrorsFor = (input) =>{
    const formControl = input.parentElement.parentElement
    const errorMsg = formControl.querySelector('#error-msg');
    errorMsg.innerText = "";

    const errorIcon = formControl.querySelector('#icon');
    if (errorIcon.classList.contains('error')){
        errorIcon.classList.remove('error');
    };
};

addRemovalListeners(inputsToValidate); */



const form = document.querySelector('form');
const mgAmount_input = document.querySelector('#mortgage-amount');
const mgTerm_input = document.querySelector('#mortgage-term');
const interestRate_input = document.querySelector('#interest-rate');
const clearAll = document.querySelector('#clear-all');
const calc_btn = document.querySelector('#calc-btn');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    getErrorForms()
});

// Error validation
const getErrorForms = () =>{
    const mgAmountValue = mgAmount_input.value.trim();
    const mgTermValue = mgTerm_input.value.trim();
    const interestRateValue = interestRate_input.value.trim();

    if (mgAmountValue === "" || mgAmountValue === null){
        setErrorFor(mgAmount_input, "This Field is required.");
    };

    if (mgTermValue === "" || mgTermValue === null){
        setErrorFor(mgTerm_input, "This Field is required.");
    };

    if (interestRateValue === "" || interestRateValue === null){
        setErrorFor(interestRate_input, "This Field is required.");
    };

}

// Adding classes for error validation
const setErrorFor = (input, message) =>{
    const formControl = input.parentElement.parentElement;

    const inputParent = input.parentElement;
    inputParent.classList.add('error-border');

    const icon = formControl.querySelector('#icon');
    icon.classList.add('error');

    const errorMsg = formControl.querySelector('#error-msg');
    errorMsg.innerText = message;
    errorMsg.classList.add('error-msg')
};

// Removing error classes when inputing a field
const inputsForValidation = [mgAmount_input, mgTerm_input, interestRate_input];

const addRemovalListeners = (inputs) =>{
    inputs.forEach(input => {
        input.addEventListener('input', (e)=>{
            e.preventDefault();
            removeErrorsFor(input)
        })
    });
};

const removeErrorsFor = (input) =>{
    const formControl = input.parentElement.parentElement;

    const inputParent = input.parentElement;
    if (inputParent.classList.contains('error-border')){
        inputParent.classList.remove('error-border');
    }

    const icon = formControl.querySelector('#icon');
    if (icon.classList.contains('error')){
        icon.classList.remove('error');
    };
    
    const errorMsg = formControl.querySelector('#error-msg');
    errorMsg.innerText = "";
    if (errorMsg.classList.contains('error-msg')){
        errorMsg.classList.remove('error-msg');
    };

}

addRemovalListeners(inputsForValidation);

// Active State
const inputForActiveState = [mgAmount_input];

const addActiveState = (inputs) =>{
    inputs.forEach((input) =>{
        input.addEventListener('click', ()=>{
            setActiveState(input)
        })
    })
}

const setActiveState = (input) =>{
    const formControl = input.parentElement.parentElement;
    const activeIcon = formControl.querySelector('#icon');
    const inputParent = input.parentElement;
    activeIcon.classList.add('active');
    inputParent.classList.add('active-border');
};

addActiveState(inputForActiveState);

// Clear All Fields
clearAll.addEventListener('click', ()=>{
    mgAmount_input.value = "";
    mgTerm_input.value = "";
    interestRate_input.value = "";
});

// Calculating and showing completed result while hiding empty result
calc_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    showResults();
    calculateMortgage();
});

// Show results, hide empty result
const showResults = () =>{
    const emptyResult = document.querySelector('#empty-results');
    emptyResult.style.display = "none";

    const completedResult = document.querySelector('#completed-results');
    if (completedResult.classList.contains('hidden')){
        completedResult.classList.remove('hidden');
    };
    completedResult.style.display = "block"
};

// Calculating Mortgage
const mgAmountValue = mgAmount_input.value;
const mgTermValue = mgTerm_input.value;
const interestRateValue = interestRate_input.value;

const calculateMortgage = (mgAmount_input, mgTerm_input, interestRate_input) =>{
    let r = (interestRate_input / 100) / 12;
    let m = (r * mgAmount_input) / (1 - (1 + r) ** (-term * 12));
}