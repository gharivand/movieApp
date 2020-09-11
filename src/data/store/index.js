import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducers from '../reducers';

const middleware = [];
middleware.push(ReduxThunk);

if (__DEV__) {
    middleware.push(createLogger());
}

const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const store = createStore(rootReducers, initialState, compose(...enhancers));

const configureStore = () => {
    return {store};
};

export default configureStore;
