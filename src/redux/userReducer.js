import * as axios from 'axios';


const USER_LOADING = 'USER_LOADING',
      GET_USER = 'GET_USER';


const initialState = {
   user: null,
   isLoading: false
}
 
const userReducer = (state = initialState, action) => {
   switch (action.type) {

   case USER_LOADING:
      return { ...state, isLoading: action.payload };

   case GET_USER:
      return { ...state, user: action.payload};

   default:
      return state
   }
};

const setUserLoading = (isLoading) => ({ type: USER_LOADING, payload: isLoading });
export const setCurrentUser = (payload) => ({ type: GET_USER, payload });

export const getUserById = (id) => (dispatch) => {
   axios.get(`/api/users/${id}`)
      .then((res) => dispatch(setCurrentUser(res.data)))
      .catch(() => dispatch(setUserLoading(false)))
};


 
export default userReducer;