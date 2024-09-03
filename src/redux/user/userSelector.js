import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state => state.users.loading;
const selectUserDetail = state => state.users.userDetail;
const selectAvatars = state => state.users.avatars;
const selectUserFavorite = state => state.users.userFavorite;

export const selectUserData = createSelector(
    [selectLoading, selectUserDetail, selectAvatars, selectUserFavorite],
    (loading, userDetail, avatars, userFavorite) => ({ loading, userDetail, avatars, userFavorite})
)