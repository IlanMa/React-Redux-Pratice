import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);	
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.id)
			.then(() => {
				// Blog post has been created, navigate the user to the index
				// We navigate by calling this.context.router.push with the new patch
				// to navigate to.
				this.context.router.push('/')
			})
	}

	render() {
		const { post } = this.props;
		// const post = this.props.post;

		if(!this.props.post) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to ="/">Back to Index</Link>
				<button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h3>Categories - {post.categories}</h3>
				<p>{post.content}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);