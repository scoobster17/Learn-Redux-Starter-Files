import React from 'react';

import { render } from 'react-dom';

// Import css (webpack; this injects a <link> tag into the HTML)
import css from './styles/style.styl';

// Import Components
import App from './components/app';
import Single from './components/single';
import PhotoGrid from './components/photo-grid';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// use parantheses as we want to render a load of JSX
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));