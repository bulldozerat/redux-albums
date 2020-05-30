import React, { useEffect } from 'react';

// Other
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';

// Store
import { connect } from 'react-redux';

// Components
import AlbumCatalogueWrapper from './AlbumCatalogueWrapper';

const AlbumCatalogue = () => {
  useEffect(() => {}, []);

  return (
    <AlbumCatalogueWrapper>
      <h1 className='page-title'>Album catalogue</h1>
      <Link to='/'>Back to all albums</Link>
    </AlbumCatalogueWrapper>
  );
};

export default AlbumCatalogue;
