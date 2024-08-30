import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state => state.artists.loading;
const selectArtist = state => state.artists.artistDetail;

export const selectArtistData = createSelector(
    [selectLoading, selectArtist], 
    (loading, artistDetail) => ({ loading, artistDetail })
)
