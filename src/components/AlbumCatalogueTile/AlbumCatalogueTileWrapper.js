import styled from '@emotion/styled';

const AlbumCatalogueTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 1rem;
  padding: 1rem;
  width: 20rem;
  height: 30rem;
  background: #ffcc01;
  color: #d2002e;
  img {
    width: 100%;
  }
  .image-small {
    display: none;
  }
  .tile-text {
    padding: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .image-big {
      display: none;
    }
    .image-small {
      display: inline;
    }
  }
`;

export default AlbumCatalogueTileWrapper;
