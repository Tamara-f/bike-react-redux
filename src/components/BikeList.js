import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BikeListItem from './BikeListItem';
import bikeSelectors from '../redux/bikes/selectors';

const BikeList = ({ bikes }) => {
  if (bikes.length > 0) {
    return (
      <ul className="bikeList">
        {bikes.map(({ id }) => (
          <BikeListItem key={id} id={id} />
        ))}
      </ul>
    );
  } else return null;
};

BikeList.propTypes = {
  bikes: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  bikes: bikeSelectors.getVisibleBikes(state),
});

export default connect(mapStateToProps)(BikeList);
