import { createSelector } from "reselect";

export const getAuthUser = state => {
   return state.auth.user
};

export const getCurrentUser = state => {
   return state.user.user
};

export const getCurrentUserId = createSelector(getCurrentUser, (user) => {
   return user._id
});

export const getAuthUserId = createSelector(getAuthUser, (user) => {
   return user.id
});

export const isUserAuth = state => {
   return state.auth.isAuthenticated
};