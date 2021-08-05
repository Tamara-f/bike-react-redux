import React from 'react';
import bikeSelectors from '../redux/bikes/selectors';
import { connect } from 'react-redux';

const Stats = ({ bikes }) => {
  if (bikes.length > 0) {
  const availableBikes = bikes.filter(
    bike => bike.status === 'available'
  ).length;
  const bookedBikes = bikes.filter(bike => bike.status === 'busy').length;
  const averageBike = bikes
    .map(bike => Number(bike.price))
    .reduce((a, b) => a + b);

  return (
    <div>
      <div className='stats'>
        <h2>Statistics</h2>
        <p>Total Bikes: {bikes.length}</p>
        <p>Available Bikes: {availableBikes}</p>
        <p>Booked Bikes: {bookedBikes}</p>
        <p>Average bike cost: {averageBike} UAH/Hr.</p>
      </div>
    </div>
  );
}else return null;
};


const mapStateToProps = state => ({
  bikes: bikeSelectors.getVisibleBikes(state),
});

export default connect(mapStateToProps)(Stats);

