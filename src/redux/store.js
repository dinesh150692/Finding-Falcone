/* Library Imports */
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
/* Reducer Imports */
import rootReducer from './reducers';

export default function configureStore(initialState) {
	if(process.env.NODE_ENV !== 'production'){
		return createStore(
			rootReducer,
			initialState,
			applyMiddleware(ReduxThunk, logger)
		);
	}else{
		return createStore(
			rootReducer,
			initialState,
			applyMiddleware(ReduxThunk)
		);
	}
}