import jwtDecode from 'jwt-decode';

import setAuthToken from "../utils/setAuthToken";
import { logout, setAuthenticatedUser } from './authReducer';
import { setCurrentUser } from './userReducer';


const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';


const initialState = {
   initialized: false
}
 
const appReducer = (state = initialState, action) => {
   
   switch (action.type) {
   
   case SET_INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

   default:
      return state
   }
};

const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
   if (localStorage.access_token) {
      const { access_token } = localStorage;
      setAuthToken(access_token);
      
      const decoded = jwtDecode(access_token);
      const promise = dispatch(setAuthenticatedUser(decoded));
      dispatch(setCurrentUser(decoded));

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
         dispatch(logout());
         window.location.href = '/auth';
      }

      Promise.all([promise]).then( dispatch(initializedSuccess()) );
   } else {
      dispatch(initializedSuccess());
   };
};

export default appReducer;