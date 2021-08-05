import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addBikesSuccess,
  statusBikesSuccess,
  fetchBikesSuccess,
  removeBikesSuccess,
} from './actions';

const onAddBike = (state, action) => {
  const newBike = action.payload;
  return [...state, newBike];
};

const onChangeStatus = (state, action) => {
  const {id, status} = action.payload
   return state.map(bike => bike.id === id
    ? { ...bike, status: status }
    : bike);
  
};

const onRemoveBike = (state, action) =>
  state.filter(bike => bike.id !== action.payload);

const items = createReducer([], {
  [fetchBikesSuccess]: (state, action) => action.payload,
  [addBikesSuccess]: onAddBike,
  [statusBikesSuccess]: onChangeStatus,
  [removeBikesSuccess]: onRemoveBike,
});

// const filter = createReducer('', {
//   [changeFilter]: (state, action) => action.payload,
// });

export default combineReducers({
  items,
  // filter,
});
