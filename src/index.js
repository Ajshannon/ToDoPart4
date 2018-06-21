import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addToDoReducer } from './reducers';

//need example for accessing a { object } that was imported using dot notation. 

const store = createStore(
    addToDoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//store is a prop that is inheritly provided by provider, and you set that value to store for naming convention
//putting it in the provider tag gives the <App/> access to all the children.
ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
