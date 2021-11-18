import React from "react";
import s from './Profile.module.scss';
import ProfileUserBlock from './ProfileUserBlock/ProfileUserBlock';
import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo';
import ProfileAddPostFormContainer from './ProfileAddPostForm/ProfileAddPostFormContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

const Profile = ({ currentUser, authUserId }) => {

   console.log(currentUser, authUserId)

   const isOwnerPage = authUserId === currentUser._id ? true : false;

   return (
      <div className={s.profile}>
         <div className={s.left}>
            <ProfileUserBlock isOwnerPage={isOwnerPage} />
         </div>
         <div className={s.right}>
            <ProfileUserInfo currentUser={currentUser} />
            <ProfileAddPostFormContainer />
            <ProfilePostsContainer />
         </div>
      </div>
   )
};

export default Profile;