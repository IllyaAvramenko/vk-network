import React, { useState } from 'react';
import s from './ProfilePost.module.scss';
import { NavLink } from 'react-router-dom';

import avatar from '../../../../assets/images/catArt.jpg';
import Like from './Like/Like';
import CommentAction from './CommentAction/CommentAction';
import CommentInput from './CommentInput/CommentInput';
import Comment from './Comment/Comment';
import PostSettings from './PostSettings/PostSettings';



const ProfilePost = ({ post, ...props }) => {

   const [commentActive, setCommentActive] = useState(false);

   const isOwner = props.authUser.id === post.user._id ? true : false;

   

   const showMoreComments = () => {
      props.showMoreComments();
   };

   return (
      <div className={s.post}>
         <div className={s.post__wrapper}>
            <div className={s.post__top}>

               <div className={s.post__owner}>
                  <div className={s.post__owner_image}>
                     <img src={avatar} alt="post owner post" />
                  </div>
                  <div className={s.post__owner_info}>
                     <NavLink to={`/profile/${post.user._id}`} ><p className={s.post__owner_name}> {post.user.name} </p></NavLink>
                     <p className={s.post__owner_date}> {post.createdDate} </p>
                  </div>
               </div>
               {isOwner
                  ? <PostSettings postId={post._id} postUser={post.user} removePost={props.removePost} authUser={props.authUser} />
                  : ''
               }
            </div>

            <div className={s.post__content}> { post.body } </div>

            <div className={s.post__footer}>
               <div className={s.post__footer_actions}>
                  <div className={s.action}>
                     <Like postId={post._id} createLike={props.createLike} removeLike={props.removeLike} likes={post.likes} authUser={props.authUser} 
                     isAuthenticated={props.isAuthenticated} />
                  </div>
                  <div className={s.action}>
                     <CommentAction onSetCommentActive={setCommentActive} commentsLength={post.comments.length} />
                  </div>
               </div>
            </div>
         </div>

         <div className={s.post__comments}>
            {
               post.comments
               .slice(0, props.totalShowComments)
               .map(c => (
                  <Comment comment={c} removeComment={props.removeComment} postId={post._id} isOwner={isOwner} key={c._id}/>
               ))
            }
            <button onClick={() => showMoreComments()} >Show more comments</button>
            <CommentInput commentActive={commentActive} postId={post._id} createComment={props.createComment} />
         </div>
      </div>
   );
};

export default ProfilePost;