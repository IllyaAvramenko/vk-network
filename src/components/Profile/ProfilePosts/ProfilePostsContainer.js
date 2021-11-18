import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAuthUser, getCurrentUserId, isUserAuth } from '../../../selectors/usersSelectors';
import { allPosts } from '../../../selectors/postsSelectors';

import ProfilePosts from './ProfilePosts';
import { getAllPosts, createLike, removeLike, removePost, createComment, removeComment, showMoreComments } from '../../../redux/postsReducer';

const ProfilePostsContainer = (props) => {

   useEffect(() => {
      props.getAllPosts();
    }, []);

   return <ProfilePosts {...props} />
};

const mapStateToProps = (state) => {
   return {
      allPosts: allPosts(state),
      authUser: getAuthUser(state),
      currentUserId: getCurrentUserId(state),
      isAuthenticated: isUserAuth(state),
      totalShowComments: state.posts.totalShowComments
   }
};

export default connect(mapStateToProps, { 
   getAllPosts, 
   createLike, 
   removeLike, 
   removePost,
   createComment,
   removeComment,
   showMoreComments
})(ProfilePostsContainer);