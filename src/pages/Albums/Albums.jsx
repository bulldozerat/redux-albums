import React, { useEffect } from 'react';

// Other
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';

// Store
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux';

// Components
import AlbumTile from '../../components/AlbumTile';
import AlbumsWrapper from './AlbumsWrapper';

const Albums = ({ albumsData, error, loading, fetchAlbumsCall }) => {
  useEffect(
    () => {
      fetchAlbumsCall();
    },
    [fetchAlbumsCall]
  );

  if (error) return <div>Error!</div>;
  if (loading) return <div>Loading...!</div>;

  return (
    <AlbumsWrapper>
      <h1 className='page-title'>All albums</h1>
      <div className='album-tiles-wrapper'>
        {albumsData &&
          Object.keys(albumsData).map(albumNumber => {
            return (
              <Link to={`/album-catalogue?albumNumber=${albumNumber}`} key={uid(albumsData[albumNumber])}>
                <AlbumTile tileNumber={albumNumber} />
              </Link>
            );
          })}
      </div>
    </AlbumsWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumsCall: () => dispatch(fetchAlbums())
  };
};

const mapStateToProps = state => ({
  albumsData: state.albums.albumsData,
  loading: state.albums.loading,
  error: state.albums.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
