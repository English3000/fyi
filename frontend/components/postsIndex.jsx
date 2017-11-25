import React from 'react';
import PostsIndexItem from './postsIndexItem';
import { Link } from 'react-router-dom';

export default class PostsIndex extends React.Component {
  componentDidMount() {
    const {match} = this.props;
    if (match.params.id) {
      this.props.getUserPosts(match.params.id);
    } else {
      this.props.requestPosts();
    }
  }

  render() {
    console.log(this.props);
    const {posts} = this.props;

    return (<div>
      <ul>
        {posts.all_ids.map(id => <PostsIndexItem key={id} post={posts.by_id[id]}
                                    deletePost={this.props.deletePost}/> )}
      </ul>
    </div>);
  }
}
