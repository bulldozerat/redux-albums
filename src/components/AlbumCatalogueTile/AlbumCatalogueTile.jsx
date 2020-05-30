import React from 'react';

// Store
import { connect } from 'react-redux';
import { addToFavourites } from '../../redux';

// Components
import AlbumCatalogueTileWrapper from './AlbumCatalogueTileWrapper';

const AlbumCatalogueTile = ({ album, addToFavouritesCall, favouritesData }) => {
  const { title, url, thumbnailUrl, albumId, id } = album;

  const addToFavourites = () => {
    const alreadyFavourite = favouritesData.find(
      favouriteAlbum => favouriteAlbum.id === id && favouriteAlbum.albumId === albumId
    );

    if (!alreadyFavourite) addToFavouritesCall(album);
  };

  return (
    <AlbumCatalogueTileWrapper>
      <img src={url} alt='' className='image-big' />
      <img src={thumbnailUrl} alt='' className='image-small' />
      <div className='tile-text'>{title || 'No data for title'}</div>
      <div className='add-favourite' onClick={addToFavourites}>
        Add in favourites
      </div>
    </AlbumCatalogueTileWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavouritesCall: album => dispatch(addToFavourites(album))
  };
};

const mapStateToProps = state => ({
  favouritesData: state.albums.favouritesData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCatalogueTile);
