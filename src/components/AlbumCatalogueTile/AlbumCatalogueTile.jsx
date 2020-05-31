import React from 'react';
import PropTypes from 'prop-types';

// Store
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux';

// Components
import AlbumCatalogueTileWrapper from './AlbumCatalogueTileWrapper';

const AlbumCatalogueTile = ({
  album,
  addToFavouritesCall,
  favouritesData,
  isFavouriteTile,
  removeFromFavouritesCall
}) => {
  const { title, url, thumbnailUrl, albumId, id } = album;

  const addToFavourites = () => {
    const alreadyFavourite = favouritesData.find(
      favouriteAlbum => favouriteAlbum.id === id && favouriteAlbum.albumId === albumId
    );

    if (!alreadyFavourite) addToFavouritesCall(album);
  };

  const removeFromFavourites = () => {
    removeFromFavouritesCall(id);
  };

  return (
    <AlbumCatalogueTileWrapper>
      <img src={url} alt='' className='image-big' />
      <img src={thumbnailUrl} alt='' className='image-small' />
      <div className='tile-text'>{title || 'No data for title'}</div>
      {isFavouriteTile ? (
        <div className='add-favourite' onClick={removeFromFavourites}>
          Remove from favourites
        </div>
      ) : (
        <div className='add-favourite' onClick={addToFavourites}>
          Add in favourites
        </div>
      )}
    </AlbumCatalogueTileWrapper>
  );
};

AlbumCatalogueTile.propTypes = {
  album: PropTypes.PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  }),
  addToFavouritesCall: PropTypes.func,
  isFavouriteTile: PropTypes.bool,
  removeFromFavouritesCall: PropTypes.func,
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

const mapDispatchToProps = dispatch => {
  return {
    addToFavouritesCall: album => dispatch(addToFavourites(album)),
    removeFromFavouritesCall: id => dispatch(removeFromFavourites(id))
  };
};

const mapStateToProps = state => ({
  favouritesData: state.albums.favouritesData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCatalogueTile);
