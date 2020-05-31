import React from 'react';
import PropTypes from 'prop-types';

// Other
import { uid } from 'react-uid';
import { Link, Redirect } from 'react-router-dom';

// Store
import { connect } from 'react-redux';

// Components
import AlbumCatalogueTile from '../../components/AlbumCatalogueTile';
import FavouriteCatalogueWrapper from './FavouriteCatalogueWrapper';

const FavouriteCatalogue = ({ favouritesData }) => {
  if (!favouritesData.length) {
    return <Redirect to='/' />;
  }

  return (
    <FavouriteCatalogueWrapper>
      <h1 className='page-title'>Favourites</h1>
      <Link to='/' className='back-btn'>
        Back to all albums
      </Link>
      <div className='favourite-catalogue-section-wrapper'>
        {favouritesData.map(album => (
          <AlbumCatalogueTile album={album} isFavouriteTile key={uid(album)} />
        ))}
      </div>
    </FavouriteCatalogueWrapper>
  );
};

FavouriteCatalogue.propTypes = {
  favouritesData: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number,
      id: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  favouritesData: state.albums.favouritesData
});

export default connect(mapStateToProps)(FavouriteCatalogue);
