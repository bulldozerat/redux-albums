import styled from '@emotion/styled';

const AlbumTileWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 1rem;
  width: 20rem;
  height: 30rem;
  background: #${Math.floor(Math.random() * 16777215).toString(16)};
  color: #fff;
  cursor: pointer;
  .title-content {
    align-self: center;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
    font-size: 2rem;
  }
`;

export default AlbumTileWrapper;
