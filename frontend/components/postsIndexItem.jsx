import React from 'react';
import { Link } from 'react-router-dom';

export default class PostsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    //AJAX req. to get post's comments
  }

  delete(event) {
    event.preventDefault();
    if (this.props.userShowId) {
      this.props.deletePost(this.props.post.id, this.props.userShowId);
    } else {
      this.props.deletePost(this.props.post.id);
    }
  }

  render() {
    console.log("Post props:", this.props);
    const {post, author} = this.props;
    return (
      <li>
        <article className='post'>
          <div className='post-author'>{author ? <div className='flex-middle'>
            <Link className='profile-pic-mini' to={`/users/${author.id}`}>
              {author.profile_pic ?
                <img className='profile-pic-mini' src={author.profile_pic}/> : ''}
            </Link>&ensp;
            <Link className='green' to={`/users/${author.id}`}>
              {author.username}
            </Link>&nbsp;<span className='gray'>on&nbsp;<em>{new Date(post.updated_at).toDateString()}</em></span>
          </div> : ''}</div>
          &nbsp;<i className='delete-button fa fa-trash fa-lg palegreen' onClick={this.delete}></i>&nbsp;&ensp;<p className='post-body'>{post.body}</p>
          {/* <p>{post.likes}</p> */}
          {/* 3 most recent comments chron'ly */}
        </article>
      </li>
    );
  }
}
