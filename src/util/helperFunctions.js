export const normaliseAlbumsData = albums => {
  return albums.reduce(function(acc, obj) {
    let key = obj['albumId'];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};
