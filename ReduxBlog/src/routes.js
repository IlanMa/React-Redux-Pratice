import React from 'react';
import { Router, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';
import PostNew from './components/post_new';

export default (
	<Router path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Router path="posts/new" component={PostNew} />
	</Router>
);