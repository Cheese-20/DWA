
const MAX_NUM =15;
const MIN_NUM =-10;
const STEP_AMOUNT = 5;

const elements = {
     number: document.querySelector('[data-key="number"]'),
     Subtract: document.querySelector('[data-key="Subtract"]'),
     Add: document.querySelector('[data-key="Add"]')
};

/**
 * Updates the color of number element in the program if the max or minimum value has been reached
 */

const updateColor = () => {
    const num = parseInt(elements.number.value);
   
    if (num >= MAX_NUM) {
        elements.number.style.color = 'red'
    }

    elements.Subtract.style.background = 'red';
    elements.Add.style.background = 'red'
};

const subtractHandler = () => {
    const newValue = parseInt(elements.number.value) - STEP_AMOUNT;
    elements.number.value = newValue;

    if(elements.number.disabled === true){
        elements.Add.disabled = false
    }

    if(newValue <= MIN_NUM){
        elements.Subtract.disabled =true
    }
    
}

const addHandler =() => {
    const newValue = parseInt(elements.number.value) + STEP_AMOUNT
    elements.number.value = newValue;

    if(elements.number.disabled === true ){
        elements.Add.disabled = false
    }

    if(newValue>= MAX_NUM){
        elements.Add.disabled =true
    }
    
    updateColor()
}


elements.Add.addEventListener('click', addHandler)
elements.Subtract.addEventListener('click',subtractHandler)