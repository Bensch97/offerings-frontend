import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

//React-Cookie
import { CookiesProvider } from 'react-cookie';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));

const app = (
    <CookiesProvider>
        <BrowserRouter>
            <Provider store={ store }>
                <App />
            </Provider>
        </BrowserRouter>
    </CookiesProvider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
