import styled from '@emotion/styled';

const AlbumCatalogueTileWrapper = styled.div`
  position: relative;
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
  .add-favourite {
    position: absolute;
    right: 2rem;
    top: 2rem;
    background: #fff;
    color: #000;
    padding: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
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
