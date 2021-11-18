import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { getAuthUserId } from '../../selectors/usersSelectors';

import Navbar from "./Navbar";

const NavbarContainer = (props) => {
   
   return <Navbar {...props} />
};

const mapStateToProps = (state) => {
   console.log(state.auth.user)
   return {
      authUserId: getAuthUserId(state)
   }
};

export default compose(
   connect(mapStateToProps, {})
)(NavbarContainer);