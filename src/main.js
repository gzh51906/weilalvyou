import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import {Provider} from 'react-redux';

import App from './App';

// import store from './redux/store';

render(
    <HashRouter>
        <App />
    </HashRouter>
    ,
    document.querySelector('#app')
)