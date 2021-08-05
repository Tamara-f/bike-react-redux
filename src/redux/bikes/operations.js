import axios from 'axios';

import {
  addBikesError,
  addBikesSuccess,
  addBikesRequest,
  statusBikesError,
  statusBikesSuccess,
  statusBikesRequest,
  fetchBikesRequest,
  fetchBikesError,
  fetchBikesSuccess,
  removeBikesRequest,
  removeBikesSuccess,
  removeBikesError,

} from './actions';

axios.defaults.baseURL = 'http://localhost:2000';

const addBike = ({ id,
  name,
  type,
  color,
  wheelSize,
  price,
  description }) => dispatch => {
  dispatch(addBikesRequest());
  axios
    .post('/bikes', {
      id: id,
      name: name,
      type: type,
      color: color,
      wheelSize: wheelSize,
      price: price,
      description: description,
      status: "available"
    })
    .then(({ data }) => dispatch(addBikesSuccess(data)))
    .catch(error => dispatch(addBikesError(error)));
};

const fetchBikes = () => dispatch => {
  dispatch(fetchBikesRequest());
  axios
    .get('/bikes')
    .then(({ data }) => dispatch(fetchBikesSuccess(data)))
    .catch(error => dispatch(fetchBikesError(error)));
};

const removeBike = id => dispatch => {
  dispatch(removeBikesRequest());
  axios
    .delete(`/bikes/${id}`)
    .then(() => dispatch(removeBikesSuccess(id)))
    .catch(error => dispatch(removeBikesError(error)));
};

const changeStatus=({id, status}) => dispatch => {
  dispatch(statusBikesRequest());
  axios
    .patch(`/bikes/${id}`, {
      status: `${status}`
    })
    .then(({ data }) => dispatch(statusBikesSuccess(data)))
    .catch(error => dispatch(statusBikesError(error)));
};

export default { addBike, fetchBikes, removeBike, changeStatus };
