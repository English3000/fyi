import React from 'react';
import PostsIndexItem from './postsIndexItem';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  componentWillMount() {
    this.fetchPosts(this.props);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname !== this.props.location.pathname) {
      this.fetchPosts(newProps);
    }
  }

  fetchPosts({ match }) {
    if (match.params.id) {
      this.props.getUserPosts(match.params.id);
    } else {
      this.props.getPosts();
      if (Object.keys(this.props.users).length < 2) {
        this.props.getUsers();
      }
    }
  }

  render() {
    console.log("PostsIndex props: ", this.props);
    const {posts, users, deletePost, match} = this.props;

    return (<div>
      <ul className='center-400px'>
        {posts.all_ids.map(id => {
          const post = posts.by_id[id];
          return <PostsIndexItem key={id} author={users[post.user_id]} post={post}
                                 userShowId={match.params.id} deletePost={deletePost}/>;})
        }
      </ul>
    </div>);
  }
}
