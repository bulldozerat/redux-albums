import React, { useEffect } from 'react';

const Albums = () => {
  useEffect(() => {
    fetchAlbumbsData();
  }, []);

  const fetchAlbumbsData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return <h1>123</h1>;
};

Albums.propTypes = {};

export default Albums;
