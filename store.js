import { createStore, applyMiddleware } from "redux"

import ReduxThunk from 'redux-thunk';

import reducers from './src/redux/reducers' 

export const Store = createStore(reducers, applyMiddleware(ReduxThunk));

