import { configureStore } from '@reduxjs/toolkit';

import bikeReducer from './bikes/reducer';

const store = configureStore({
  reducer: { bikes: bikeReducer },
});

export default store;
