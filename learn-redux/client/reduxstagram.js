import React from 'react';

import { render } from 'react-dom';

// Import css (webpack; this injects a <link> tag into the HTML)
import css from './styles/style.styl';

// Import Components
import Main from './components/main';
import Single from './components/single';
import PhotoGrid from './components/photo-grid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// use parantheses as we want to render a load of JSX
const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));