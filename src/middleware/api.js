import { RECEIVE_COUNTRY_DATA, RECEIVE_COUNTRY_DATA_ERROR } from '../constants/ActionTypes'
import $ from 'jquery'

let API_ROOT = 'http://ws.geonames.org/';
const ENDPOINT = 'countryCodeJSON?';
const USERNAME = 'demo';

const getUrl = (longitude, latitude, username) =>{
  const queryParams = {
    lat: latitude,
    lng: longitude,
    username: username
  };
  return API_ROOT + ENDPOINT + $.param( queryParams );
};

export const fetchCountryData = (coordinates) => {
  const url = getUrl(coordinates[0], coordinates[1], USERNAME);

  return dispatch => fetch(url)
    .then(response => {
      const data = response.json();
      if (response.ok) {
        return Promise.resolve(data);
      } else {
        return Promise.reject();
      }
    })
    .then(
      data => dispatch({ type: RECEIVE_COUNTRY_DATA, payload: data })
    ).catch(
      err => dispatch({ type: RECEIVE_COUNTRY_DATA_ERROR })
    );
};