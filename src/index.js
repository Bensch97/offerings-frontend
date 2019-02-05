import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { theReducer } from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    theReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(

    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
