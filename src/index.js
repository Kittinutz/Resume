import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers';
import Home from "./container/Home";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import App from './App';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
