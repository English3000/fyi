import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
// import commentsReducer from './commentsReducer';
// import friendshipsReducer from './friendshipsReducer';
// import friendRequestsReducer from './friendRequestsReducer';

export default combineReducers({
  users: usersReducer,
  content: postsReducer
  // friendships: friendshipsReducer,
  // friendRequests: friendRequestsReducer
});
// comments: commentsReducer,
