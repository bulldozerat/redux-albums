import React, { useEffect } from 'react';

// Store
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux';

const Albums = ({ albumsData, error, loading, fetchAlbumsCall }) => {
  useEffect(
    () => {
      fetchAlbumsCall();
    },
    [fetchAlbumsCall]
  );

  if (error) return <div>Error!</div>;
  if (loading) return <div>Loading...!</div>;

  return <h1>123</h1>;
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
