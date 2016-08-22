import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts,
    comments
};

const enhancers = compose(
    // if dev tools ext exists, run it, else just return the store (f) => {return f}
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// check if the module is hot (has changed?)
if (module.hot) {

    // when we accept it, we run a function to re-require and swap out module
    module.hot.accept('./reducers/', ()=>{

        // cannot use es6 import inside function; require root reducer which
        // combines reducers
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;