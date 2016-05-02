import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]); // Don't use push since you do not want to mutate the original state array
			return [ action.payload.data, ...state ] // ES6 way => YOU DO NOT WANT TO MANIPULATE THE STATE
	}
	return state;
}