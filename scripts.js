const elements = {
     number: document.querySelector('[data-key="number"]'),
     Subtract: document.querySelector('[data-key="Subtract"]'),
     Add: document.querySelector('[data-key="Add"]'),
     Reset: document.querySelector('[data-key="reset"]')
};

const addHandler =() => {
    const newValue = parseInt(elements.number.value) + 1;
    elements.number.value = newValue;
};

const subtractHandler = () => {
    const newValue = parseInt(elements.number.value) - 1;
    elements.number.value = newValue;
};

const resetHandler = () =>{
    elements.number.value = 0;
};

elements.Add.addEventListener('click', addHandler);
elements.Subtract.addEventListener('click',subtractHandler);
elements.Reset.addEventListener('click',resetHandler);