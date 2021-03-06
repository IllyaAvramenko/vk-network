import React from "react";
import s from './ProfileUserBlock.module.scss';
import avatar from '../../../assets/images/catArt.jpg';

const ProfileUserBlock = ({ isOwnerPage }) => {

   return (
      <div className={s.user__block}>
         <div className={s.block__wrapper}>
            <div className={s.block__image}>
               <img src={avatar} alt="main avatar" />
            </div>

            {isOwnerPage
               ? 
               <div className={s.block__edit}>
                  <button>Редактировать</button>
               </div>
               :
               <div className={s.block__subscribe}>
                  <button>Подписаться</button>
               </div>}

         </div> 
      </div>
   )
};

export default ProfileUserBlock;