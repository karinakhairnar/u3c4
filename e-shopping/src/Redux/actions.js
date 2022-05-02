// use axios for api call
import axios from 'axios';
import {
  GET_DATA,
  SORT_DATA,
  FILTER_DATA,
  REQUEST_DATA,
  ERROR_DATA,
} from './actionTypes';
function getProductsData(dispatch) {
  dispatch(requestData());
  axios
    .get('https://movie-fake-server.herokuapp.com/products')
    .then((res) =>
      dispatch({
        type: GET_DATA,
        payload: res.data,
      }),
    )
    .catch((err) => dispatch(errorData(err.message)));
}

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const errorData = () => ({
  type: ERROR_DATA,
});

const sortProducts = (payload) => ({
  type: SORT_DATA,
  payload,
});

const filterProducts = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export { getProductsData, sortProducts, filterProducts };
