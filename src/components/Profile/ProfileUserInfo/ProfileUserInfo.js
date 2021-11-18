import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileUserInfo.module.scss';

const ProfileUserInfo = ({ currentUser }) => {

   if (!currentUser) {
      return <Preloader />
   }

   return (
      <div className={s.info__block}>
         <div className={s.block__wrapper}>
            <div className={s.block__top}>

               <div className={s.user__name}>
                  <h1>{currentUser.name}</h1>
               </div>

               <div className={s.user__status}>
                  <p>установить статус</p>
               </div>

            </div>
            <div className={s.line}></div>

            <div className={s.block__info_short}>
               <div className={s.block__info_row}>
                  <div className={s.label}><p>Город:</p></div>
                  <div className={s.labeled}><p>Киев</p></div>
               </div>
               <div className={s.block__info_more}>
                  <button>Показать подробную информацию</button>
               </div>
            </div>

            <div className={s.block__info_full}></div>
         </div> 
      </div>
   )
};

export default ProfileUserInfo;