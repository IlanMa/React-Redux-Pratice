import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBZ9mD6tsoDFEXfN5ZzwHwNMaBCDrzCInA';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'))