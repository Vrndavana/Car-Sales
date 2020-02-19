// Pre-Installed Import
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Pre-installed Styling Dependencies 
import 'bulma/css/bulma.css';
import './styles.scss';

// My Imports
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { featureReducer } from './reducers/featureReducer';

// Store Reducer
const store = createStore(featureReducer);


// Render
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);