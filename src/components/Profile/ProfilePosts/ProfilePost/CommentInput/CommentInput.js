import React from "react";
import s from './CommentInput.module.scss';
import { Formik, Form, Field } from 'formik';
import avatar from '../../../../../assets/images/catArt.jpg';
import sendIcon from '../../../../../assets/icons/send-message.png';

const CommentInput = ({ commentActive, postId, createComment }) => {

   const initialValues = { addCommentInput: '' };

   const onSubmit = (values, actions) => {
      createComment(postId, { body: values.addCommentInput });
      actions.resetForm();
   };

   const isShow = commentActive ? s.commentInput : 'hide';

   return (
      <div className={isShow}>
         <div className={s.commentInput__wrapper} >

            <Formik initialValues={initialValues} onSubmit={onSubmit} >
               <Form className={s.commentInput__form} >

                  <div className={s.commentInput__input}>
                     <div className={s.commentInput__avatar}>
                        <img src={avatar} alt="user avatar" />
                     </div>

                     <Field name="addCommentInput" 
                           placeholder="Написать коментарий..."
                           type="text"/>
                  </div>

                  <div className={s.commentInput__btn}>
                     <button type='submit'><img src={sendIcon} alt="sendIcon" /></button>
                  </div>
               </Form>
            </Formik>

         </div> 
      </div>
   );
};

export default CommentInput;