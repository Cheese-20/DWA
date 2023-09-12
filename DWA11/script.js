const elements = {
    number: document.querySelector('[data-key="number"]'),
    Subtract: document.querySelector('[data-key="Subtract"]'),
    Add: document.querySelector('[data-key="Add"]'),
    Reset: document.querySelector('[data-key="reset"]')
};


/**
 * !REDUX
 */

let nextState= {
  value :0
}

// * must not be modified 
const initialState = {
   value : 0
}

const increase = (state) =>{
    nextState = {...initialState,
   value : nextState.value + 1}

   return nextState
}

const decrease = (state) =>{
    nextState = {...initialState,
   value : nextState.value -1};
   return nextState;
}

const reset = (state) =>{
   return nextState.value = 0

}


// * Store :handles all the side effects 
const getState = (state , key)=>{
   console.log(state[key])
}


increase(initialState)
getState(increase(nextState),'value')
decrease(nextState)
getState(nextState,'value')
reset(nextState)
getState(nextState,'value')


