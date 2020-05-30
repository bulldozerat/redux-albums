import React, { useEffect } from 'react';

// Other
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';

// Store
import { connect } from 'react-redux';
import { fetchAlbums, changeSelectedAlbum } from '../../redux';

// Components
import AlbumTile from '../../components/AlbumTile';
import AlbumsWrapper from './AlbumsWrapper';

const Albums = ({ albumsData, error, loading, fetchAlbumsCall, changeSelectedAlbumCall, favouritesData }) => {
  useEffect(() => {
    // Fetch only on first load
    if (!Object.keys(albumsData).length) fetchAlbumsCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <div>Error!</div>;
  if (loading) return <div>Loading...!</div>;

  return (
    <AlbumsWrapper>
      {!!favouritesData.length && (
        <>
          <h1 className='page-title'>Favourite album</h1>
          <div className='album-tiles-wrapper'>
            <Link to='/favourite-catalogue'>
              <AlbumTile isFavourite />
            </Link>
          </div>
        </>
      )}
      <h1 className='page-title'>All albums</h1>
      <div className='album-tiles-wrapper'>
        {albumsData &&
          Object.keys(albumsData).map(albumId => {
            return (
              <Link
                to={`/album-catalogue?albumNumber=${albumId}`}
                key={uid(albumsData[albumId])}
                onClick={() => changeSelectedAlbumCall(albumId)}
              >
                <AlbumTile tileNumber={albumId} />
              </Link>
            );
          })}
      </div>
    </AlbumsWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumsCall: () => dispatch(fetchAlbums()),
    changeSelectedAlbumCall: albumId => dispatch(changeSelectedAlbum(albumId))
  };
};

const mapStateToProps = state => ({
  albumsData: state.albums.albumsData,
  loading: state.albums.loading,
  error: state.albums.error,
  favouritesData: state.albums.favouritesData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
