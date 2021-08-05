// import { createSelector } from '@reduxjs/toolkit';

const getVisibleBikes = state => state.bikes.items;

// const getFilter = state => state.bikes.filter;

// const getVisibleBikes = createSelector(
//   [getFilter, getBikes],
//   (filter, bikes) => {
//     return bikes.filter(bike =>
//       bike.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   },
// );

const getBikeById = (state, bikeId) => {
  const bikes = getVisibleBikes(state);
  return bikes.find(item => item.id === bikeId);
};

export default { getVisibleBikes,  getBikeById };
