export const setGifs = (gifs) => ({
  type: 'UPDATE_GIFS_VALUE',
  payload: gifs,
});

export const setGifsToZero = () => ({
  type: 'ZERO_OUT_GIFS_VALUE',
  payload: [],
});

export const setInputValue = (value) => ({
  type: 'UPDATE_INPUT_VALUE',
  text: value,
});

export const setOffset = () => ({
  type: 'UPDATE_OFFSET_VALUE'
});

export const setOffsetToZero = () => ({
  type: 'ZERO_OUT_OFFSET_VALUE'
});