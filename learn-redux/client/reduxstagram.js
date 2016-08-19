import React from 'react';

import { render } from 'react-dom';

// Import css (webpack; this injects a <link> tag into the HTML)
import css from './styles/style.styl';

// Import Components
import Main from './components/main';

render(<Main></Main>, document.getElementById('root'));