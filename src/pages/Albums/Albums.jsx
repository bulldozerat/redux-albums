import React, { useEffect } from 'react';

// Store
import { connect } from 'react-redux';
import { fetchAlbums } from '../../redux';

const Albums = ({ albums, error, loading, fetchAlbumsCall }) => {
  useEffect(
    () => {
      fetchAlbumsCall();
    },
    [fetchAlbumsCall]
  );

  return <h1>123</h1>;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumsCall: () => dispatch(fetchAlbums())
  };
};

const mapStateToProps = state => ({
  // albums: state.albums.items,
  // loading: state.albums.loading,
  // error: state.albums.error
  albums: '',
  loading: '',
  error: ''
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
