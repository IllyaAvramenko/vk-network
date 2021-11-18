import React from "react";
import s from './Comment.module.scss';
import avatar from '../../../../../assets/images/catArt.jpg';
import closeIcon from '../../../../../assets/icons/close.png';

const Comment = ({ comment, removeComment, postId, isOwner }) => {

   const onRemoveComment = (postId, commentId) => {
      removeComment(postId, commentId);
   }

   return (
      <div className={s.comment}>
         <div className={s.comment__wrapper}>

            <div className={s.comment__content}>
               <div className={s.comment__avatar}>
                  <div className={s.comment__avatar_image}>
                     <img src={avatar} alt="comment owner avatar" />
                  </div>
               </div>

               <div className={s.comment__body}>

                  <div className={s.comment__body_top}>
                     <a href="/">
                        <p>{comment.user.name}</p>
                     </a>
                     <div className={s.close}>
                        {isOwner
                           ? <button onClick={() => onRemoveComment(postId, comment._id)} ><img src={closeIcon} alt="delete comment" /></button>
                           : ''}
                     </div>
                  </div>

                  <div className={s.comment__body_content}> { comment.body } </div>

                  <div className={s.comment__body_bottom}>
                     <div className={s.date}> {comment.createdDate} </div>
                     <div className={s.reply}><a href="/">Ответить</a></div>
                  </div>

               </div>
            </div>

         </div>
      </div>
   );
};

export default Comment;