const form = document.querySelector('form');
const amount_input = document.querySelector('#amount');
const term_input = document.querySelector('#term');
const rate_input = document.querySelector('#rate');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    getFormErrors()
});

const getFormErrors = () =>{
    const amountValue = amount_input.value.trim();
    const termValue = term_input.value.trim();
    const rateValue = rate_input.value.trim();

    if (amountValue === "" || amountValue === null){
        setErrorsFor(amount_input, "This Field is required");
    };

    if (termValue=== "" || termValue === null){
        setErrorsFor(term_input, "This Field is required");
    };

    if (rateValue === "" || rateValue === null){
        setErrorsFor(rate_input, "This Field is required");
    };
};

const setErrorsFor = ( input, message) => {
    const formControl = input.parentElement.parentElement;

    const errorMessage = formControl.querySelector('span');
    errorMessage.innerText = message;
    errorMessage.classList.add('error-msg');

    const icon = formControl.querySelector('#icon');
    icon.classList.add('error');

    const inputParent = input.parentElement;
    inputParent.classList.add('error-border');

}

// Removing Errors when refilling 
const inputsToValidate = [amount_input, term_input, rate_input];

const addRemovalListeners = (inputs) =>{
    inputs.forEach(input =>{
        input.addEventListener('click', (e)=>{
            removeErrors(input)
        })
    })
};

const removeErrors = (input) =>{
    const formControl = input.parentElement.parentElement;

    const errorMessage = formControl.querySelector('span');
    if(errorMessage.classList.contains('error-msg')){
        errorMessage.innerText = ''
        errorMessage.classList.remove('error-msg');
    }

    const icon = formControl.querySelector('#icon');
    if (icon.classList.contains('error')){
        icon.classList.remove('error');
    }

    const inputParent = input.parentElement;
    if(inputParent.classList.contains('error-border')){
        inputParent.classList.remove('error-border')
    }
};

addRemovalListeners(inputsToValidate);