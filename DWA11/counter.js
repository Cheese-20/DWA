//@ts-check



/**
 * !Reducer
 * *takes 2 arguments 
 * *how an action is going to change the application state 
 */
function counter (currentstate ,action) {

    // *switch on the action.type
    switch(action.type) {
        case 'ADD': 4


        break
        default :
    }
}

const state = {
    count : 0
}




const store = Redux.createstore(counter , state)



/**
 * !Actions
 * *when something is happening
 */

elements.Add?.addEventListener('click', function (){
    console.log({type : 'ADD'})
})



/**
 * !Store
 * *Hold our application state and allow access to that state 
 * *and allow state to be updated and have listeners 
 */