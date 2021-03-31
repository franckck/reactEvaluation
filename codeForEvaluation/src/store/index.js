import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';

const enhancer = compose(
    applyMiddleware(thunk),
);

const store = createStore(appReducers, enhancer);

export default store;