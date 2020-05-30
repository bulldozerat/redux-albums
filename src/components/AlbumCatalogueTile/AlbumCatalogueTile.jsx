import React from 'react';

// Components
import AlbumCatalogueTileWrapper from './AlbumCatalogueTileWrapper';

const AlbumCatalogueTile = ({ title, url, thumbnailUrl }) => {
  return (
    <AlbumCatalogueTileWrapper>
      <img src={url} alt='' className='image-big' />
      <img src={thumbnailUrl} alt='' className='image-small' />
      <div className='tile-text'>{title || 'No data for title'}</div>
    </AlbumCatalogueTileWrapper>
  );
};

export default AlbumCatalogueTile;
