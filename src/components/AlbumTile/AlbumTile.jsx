import React from 'react';

// Components
import AlbumTileWrapper from './AlbumTileWrapper';

const AlbumTile = ({ tileNumber }) => {
  return (
    <AlbumTileWrapper>
      <div className='title-content'>
        <div>Tile number: </div>
        <div>{tileNumber}</div>
      </div>
    </AlbumTileWrapper>
  );
};

export default AlbumTile;
