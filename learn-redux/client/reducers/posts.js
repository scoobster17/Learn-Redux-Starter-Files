// a reducer takes in two things
// 1.) the actions (information about what happened)
// 2.) a copy of the current state

function posts(state = [], action) {
    console.log(state, action);
    console.log(state[action.index])
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i), // before one updating
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1) // after one updating
            ]
        default:
            return state;
    }
};

export default posts;