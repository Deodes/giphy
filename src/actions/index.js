export const setGifs = (gifs) => ({
  type: 'UPDATE_GIFS_VALUE',
  payload: gifs,
});

export const setGifsToZero = () => ({
  type: 'ZERO_OUT_GIFS_VALUE',
  payload: [],
});
