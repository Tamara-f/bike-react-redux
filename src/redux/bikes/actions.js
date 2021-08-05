import { createAction } from '@reduxjs/toolkit';

export const addBikesRequest = createAction('bikes/addRequest');
export const addBikesSuccess = createAction('bikes/addSuccess');
export const addBikesError = createAction('bikes/addError');

export const statusBikesRequest = createAction('bikes/statusRequest');
export const statusBikesSuccess = createAction('bikes/statusSuccess');
export const statusBikesError = createAction('bikes/statusError');

export const fetchBikesRequest = createAction('bikes/fetchRequest');
export const fetchBikesSuccess = createAction('bikes/fetchSuccess');
export const fetchBikesError = createAction('bikes/fetchError');

export const removeBikesRequest = createAction('bikes/removeRequest');
export const removeBikesSuccess = createAction('bikes/removeSuccess');
export const removeBikesError = createAction('bikes/removeError');

// export const changeFilter = createAction('bike/filter');
