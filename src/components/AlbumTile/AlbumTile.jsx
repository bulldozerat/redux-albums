import React from 'react';
import PropTypes from 'prop-types';

// Components
import AlbumTileWrapper from './AlbumTileWrapper';

const AlbumTile = ({ tileNumber, isFavourite }) => {
  return (
    <AlbumTileWrapper>
      <div className='title-content'>
        {!isFavourite ? (
          <>
            <div>Tile number: </div>
            <div>{tileNumber}</div>
          </>
        ) : (
          <div>Check your favourite album</div>
        )}
      </div>
    </AlbumTileWrapper>
  );
};

AlbumTile.propTypes = {
  isFavourite: PropTypes.bool,
  tileNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AlbumTile;
