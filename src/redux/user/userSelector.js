import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state => state.users.loading;
const selectUserDetail = state => state.users.userDetail;
const selectAvatars = state => state.users.avatars;

export const selectUserData = createSelector(
    [selectLoading, selectUserDetail, selectAvatars],
    (loading, userDetail, avatars) => ({ loading, userDetail, avatars})
)