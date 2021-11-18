import React, { useEffect } from 'react';
import s from './App.module.scss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import { logout } from '../../redux/authReducer';
import { initializeApp } from '../../redux/appReducer';

import Header from '../Header/Header';
import Auth from '../Auth/Auth';
import MainBody from '../MainBody/MainBody';
import Preloader from '../common/Preloader/Preloader';


const App = (props) => {
  console.log(props);

  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <>
      <Header isAuthenticated={props.isAuthenticated} />
      <div className={s.appContainer}>
        
        {props.isAuthenticated
          ? <MainBody />
          : <Redirect to={'/auth'} />
        }
        
        <Route path='/auth' render={() => <Auth />} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    initialized: state.app.initialized
  })
};

export default compose(
  withRouter,
  connect(mapStateToProps, { logout, initializeApp })
)(App);
