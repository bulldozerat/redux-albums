import { FETCH_ALBUMS_BEGIN, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE } from './albumsTypes';
import { normaliseAlbumsData } from '../../util/helperFunctions';

export const fetchAlbums = () => async dispatch => {
  dispatch(fetchAlbumsBegin());
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const json = await res.json();
    const normalisedAlbums = await normaliseAlbumsData(json);
    dispatch(fetchAlbumsSuccess(normalisedAlbums));
  } catch (error) {
    dispatch(fetchAlbumsFailure(error));
  }
};

export const fetchAlbumsBegin = () => ({
  type: FETCH_ALBUMS_BEGIN
});

export const fetchAlbumsSuccess = albums => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: albums
});

export const fetchAlbumsFailure = error => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: error
});
