import React from 'react';
import s from './MainBody.module.scss';

import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import NavbarContainer from '../Navbar/NavbarContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import Music from '../Music/Music';

const MainBody = () => {
   return (
      <>
         <div className={s.appNavigation}>
            <NavbarContainer />
         </div>  

         <div className={s.appContent}>
            <Route path='/profile/:userId' render={() => <ProfileContainer /> } />
            <Route path='/music' render={() => <Music /> } />
         </div>
      </>
   )
};

const mapStateToProps = (state) => ({});

export default compose(
   withRouter,
   connect(mapStateToProps, {  })
 )(MainBody);