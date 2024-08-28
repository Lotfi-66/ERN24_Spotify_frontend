// On récupère les données du slice qu'on va stocker dans les constantes

import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state => state.albums.loading;
const selectAlbums = state => state.albums.albums;
const selectAlbumDetail = state => state.albums.albumDetail;

// On crée le selector
export const selectAlbumsData = createSelector(
    [selectLoading, selectAlbums, selectAlbumDetail],
    (loading, albums, albumDetail) => ({ loading, albums, albumDetail })
)