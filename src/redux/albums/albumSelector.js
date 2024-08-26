// On récupère les données du slice qu'on va stocker dans les constantes

import { createSelector } from "@reduxjs/toolkit";

const selectLoading = state => state.albums.loading;
const selectAlbums = state => state.albums.albums;

// On crée le selector
export const selectAlbumsData = createSelector(
    [selectLoading, selectAlbums],
    (loading, albums) => ({ loading, albums })
)