import { combineReducers } from 'redux';
import BooksReducers from './reducer_books';

// Globally Available
const rootReducer = combineReducers({
	books: BooksReducers
});

export default rootReducer;
