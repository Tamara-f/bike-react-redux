import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import bikeOperations from '../redux/bikes/operations';
import bikeSelectors from '../redux/bikes/selectors';


const BikeListItem = ({ id, name, type, color, price, status, onRemove, onChangeStatus }) => {
    const isAvailableClasses =
    status === 'available'
      ? 'item'
      : status === 'unavailable'
      ? 'item red'
      : 'item orange';

    const toFix = num => {
    num = Number(num);
    return num.toFixed(2);
    };
    // const handleStatus= e => {
    //     setStatus(e.target.value);
    //     let status = e.target.value;
    //     dispatch(bikeActions.updateStatus({ id, status }));
    //   };
    // }
   const handleStatus = (e) => {
    onChangeStatus({id, status: e.target.value});
        };

   return (
    <li className={isAvailableClasses} key={id} id={id}>
          <div>
            <div className='cover name'>
              <p>{name} - </p>
              <p>{type}</p>
              <p>({color})</p>
            </div>
            <p className='id'>ID: {id}</p>
            <p>
              STATUS
              <select value={status} onChange={handleStatus}>
                <option value='available'>Available</option>
                <option value='unavailable'>Unavailable</option>
                <option value='busy'>Busy</option>
              </select>
            </p>
          </div>
          <div className='priceCover'>
            <span
              className='note-trash'
              onClick={()=>onRemove(id)}
            >
              &times;
            </span>
            <p className='price'>{toFix(price)} UAH/hr.</p>
            
          </div>
        </li>
        );
    }


const mapStateToProps = (state, ownProps) => ({
  ...bikeSelectors.getBikeById(state, ownProps.id),
});

const mapDispatchToProps = {
  onRemove: bikeOperations.removeBike,
  onChangeStatus: bikeOperations.changeStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeListItem);
