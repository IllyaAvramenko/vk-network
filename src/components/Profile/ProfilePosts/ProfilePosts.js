import React from 'react';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = ({ allPosts, currentUserId, ...props }) => {

   return (
      <div>
         {allPosts
            .filter(p => p.user._id === currentUserId)
            .map(post => <ProfilePost post={post} {...props} key={post._id} />)}
      </div>
   )
};

export default ProfilePosts;