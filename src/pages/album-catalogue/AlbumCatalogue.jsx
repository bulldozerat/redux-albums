import React from 'react';

// Other
import { uid, useUID } from 'react-uid';
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
          const { title, url, thumbnailUrl } = album;
          return <AlbumCatalogueTile title={title} url={url} thumbnailUrl={thumbnailUrl} key={uid(album)} />;
        })}
      </div>
    </AlbumCatalogueWrapper>
  );
};

const mapStateToProps = state => ({
  selectedAlbum: state.albums.selectedAlbum,
  albumsData: state.albums.albumsData
});

export default connect(mapStateToProps)(AlbumCatalogue);
