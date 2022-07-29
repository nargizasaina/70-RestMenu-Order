import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {applyMiddleware, compose, createStore} from "redux";
import dishesReducer from "./store/reducers/dishesReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = dishesReducer;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
