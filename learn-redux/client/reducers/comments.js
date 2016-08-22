function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the deleted one to the end
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
};

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // takes current state
            ...state,
            // overwrite this post with a new one using reducer composition
            // basically deferring the functionality to handle sub-reducer
            // passing a sub piece of state
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
};

export default comments;