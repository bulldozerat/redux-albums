import { NORMALISE_ALBUMS_DATA } from './albumsTypes';

export const normaliseAlbumsData = albumsData => {
  return {
    type: NORMALISE_ALBUMS_DATA,
    payload: albumsData
  };
};
