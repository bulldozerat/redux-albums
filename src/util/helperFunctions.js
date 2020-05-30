export const normaliseAlbumsData = albums => {
  return albums.reduce((acc, obj) => {
    const key = obj['albumId'];

    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);

    return acc;
  }, {});
};
