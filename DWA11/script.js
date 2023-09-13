// const elements = {
//     number: document.querySelector('[data-key="number"]'),
//     Subtract: document.querySelector('[data-key="Subtract"]'),
//     Add: document.querySelector('[data-key="Add"]'),
//     Reset: document.querySelector('[data-key="reset"]')
// };


// /**
//  * !REDUX
//  */

// let nextState= {
//   value :0
// }

// // * must not be modified 
// const initialState = {
//    value : 0
// }


// function counter (currentstate ,action) {

//    let nextState = {
//       value : currentstate.value
//    }
//    // *switch on the action.type
//    switch(action.type) {
//       case 'ADD': 
//          nextState = {
//             value : currentstate.value + 1
//          };
//          return nextState;
         
//       case 'Subtract': 
//          nextState = {
//            value : currentstate.value - 1
//            };
//            return nextState;
//       case 'Reset': 
//          nextState = {
//             value : 0
//          };
//          return nextState;
//        break
//        default :
//        return currentstate
//    }
// }

// const state =[]


// const getState = () => {
//  return Object.freeze({...state[0]});
// }

// const dispatch = () => {
//    const prev = getState();
//    const next = counter(prev,action);
//    state.unshift(next);
// }


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


