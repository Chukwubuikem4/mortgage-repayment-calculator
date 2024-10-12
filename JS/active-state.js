const inputsForActiveState = [amount_input];

const addActiveStateListeners = (inputs) =>{
    inputs.forEach(input =>{
        input.addEventListener('input', (e)=>{
            e.preventDefault()
            setActiveState(input);
        })
    })
};

const setActiveState = (input) =>{
    const formControl = input.parentElement.parentElement;

    const icon = formControl.querySelector('#icon');
    icon.classList.add('active');

    const inputParent = input.parentElement;
    inputParent.classList.add('active-border')

};

addActiveStateListeners(inputsForActiveState);