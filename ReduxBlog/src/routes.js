import React from 'react';
import { Router, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';

export default (
	<Router path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Router>
);