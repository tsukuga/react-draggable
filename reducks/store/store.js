import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router'

// Import reducers
import {LoadingReducer} from '../loading/reducers';
import {ProductsReducer} from '../products/reducers';
import {UsersReducer} from '../users/reducers';
