import React from 'react';

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

export default AlbumTile;
