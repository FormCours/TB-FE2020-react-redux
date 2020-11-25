import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import counterReducer from './reducers/counter-reducer';
import weatherReducer from './reducers/weather-reducer';


const reducer = combineReducers({
    counter: counterReducer,
    weatherData: weatherReducer
});

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;