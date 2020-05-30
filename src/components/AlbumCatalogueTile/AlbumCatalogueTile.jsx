import React from 'react';

// Components
import AlbumCatalogueTileWrapper from './AlbumCatalogueTileWrapper';

const AlbumCatalogueTile = ({ album }) => {
  const { title, url, thumbnailUrl } = album;

  return (
    <AlbumCatalogueTileWrapper>
      <img src={url} alt='' className='image-big' />
      <img src={thumbnailUrl} alt='' className='image-small' />
      <div className='tile-text'>{title || 'No data for title'}</div>
      <div className='add-favourite' onClick={() => console.log(album)}>
        Add in favourites
      </div>
    </AlbumCatalogueTileWrapper>
  );
};

export default AlbumCatalogueTile;
