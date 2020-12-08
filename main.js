// CREATE ACTION TYPES
const incrementAction = {
    type: 'INCREMENT'
}

const decrementAction = {
    type: 'DECREMENT'
}

const addTenAction = {
    type: 'INCREMENT_TEN'
}

const removeTenAction = {
    type: 'DECREMENT_TEN'
}

const resetAction = {
    type: 'RESET'
}

// CREATE INITIAL STATE 
let initialState = 0;

// CREATE REDUCER
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_TEN':
            return state + 10;
        case 'DECREMENT_TEN':
            return state - 10;
        case 'RESET':
            return state = initialState;
        default:
            return state;
    };
};

// CREATE STORE
const {createStore} = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById('render-counter');
const incrementButton = document.getElementById('button-increment');
const decrementButton = document.getElementById('button-decrement');
const incremetByTenButton = document.getElementById('increment-by-ten');
const decrementByTenButton = document.getElementById('decrement-by-ten');
const resetButton = document.getElementById('reset');


// CREATE Render FUNCTION TO display valu of STATE on page
const render = () => {
	counterRender.innerText = store.getState();
};

// CALL RENDER FUNCTION TO SHOW INITIAL STATE "0"
render();

// ADD LISTENERS TO BUTTONS WITH ONCLICK TO DISPATCH THE RIGHT ACTION
incrementButton.addEventListener('click', () =>
	store.dispatch(incrementAction)
);
decrementButton.addEventListener('click', () =>
	store.dispatch(decrementAction)
);
incremetByTenButton.addEventListener('click', () =>
    store.dispatch(addTenAction)
);
decrementByTenButton.addEventListener('click', () =>
    store.dispatch(removeTenAction)
);

resetButton.addEventListener('click', () =>
    store.dispatch(resetAction)
);

// USE SUBSCRIBE TO CALL RENDER FUNCTION AT EACH CHANGE IN STATE
store.subscribe(render);
