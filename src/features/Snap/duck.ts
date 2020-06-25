import { Snap } from './types';

// Action types
export const SET_SNAP = 'SET_SNAP';

// Action creators
export const openSnap = (snap: Snap) => async (dispatch) =>
  dispatch({ type: SET_SNAP, snap });

// Reducer
const initialState = {
  location: null,
  lat: null,
  lon: null,
  time: null,
  type: null,
  url: null,
  caption: null
};

export default function reducer(prevState = initialState, { type, snap }) {
  switch (type) {
    case SET_SNAP:
      return snap;
    default:
      return prevState;
  }
}
