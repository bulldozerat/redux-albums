import React from 'react';
import PropTypes from 'prop-types';

// Other
import { uid } from 'react-uid';
import { Link, Redirect } from 'react-router-dom';

// Store
import { connect } from 'react-redux';

// Components
import AlbumCatalogueWrapper from './AlbumCatalogueWrapper';
import AlbumCatalogueTile from '../../components/AlbumCatalogueTile';

const AlbumCatalogue = ({ selectedAlbum, albumsData }) => {
  if (!selectedAlbum) {
    return <Redirect to='/' />;
  }

  return (
    <AlbumCatalogueWrapper>
      <h1 className='page-title'>Album catalogue</h1>
      <Link to='/' className='back-btn'>
        Back to all albums
      </Link>
      <div className='album-catalogue-section-wrapper'>
        {albumsData[selectedAlbum].map(album => {
          return <AlbumCatalogueTile album={album} key={uid(album)} />;
        })}
      </div>
    </AlbumCatalogueWrapper>
  );
};

AlbumCatalogue.propTypes = {
  selectedAlbum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  albumsData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = state => ({
  selectedAlbum: state.albums.selectedAlbum,
  albumsData: state.albums.albumsData
});

export default connect(mapStateToProps)(AlbumCatalogue);
