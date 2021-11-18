import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getUserById } from '../../redux/userReducer';

import { getAuthUserId, getCurrentUser } from '../../selectors/usersSelectors';

import Profile from './Profile';

class ProfileContainer extends Component {

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile()
      }
   }

   refreshProfile = () => {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authUserId;
         
         if (!userId) {
            this.props.history.push('/auth');
         }
      }
      this.props.getUserById(userId);
   };

   render() {
      return <Profile currentUser={this.props.currentUser} authUserId={this.props.authUserId} />
   }
};


const mapStateToProps = (state) => {
   return {
      authUserId: getAuthUserId(state),
      currentUser: getCurrentUser(state)
   }
};

export default compose(
   withRouter,
   connect(mapStateToProps, { getUserById })
)(ProfileContainer);
 