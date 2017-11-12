import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import createMockStore from 'redux-mock-store'
import * as actionType from '../../constants/ActionTypes'
import { fetchCountryData } from '../../middleware/api'

const middleware = [thunk];
const mockStore = createMockStore(middleware);
const url = 'http://ws.geonames.org/countryCodeJSON?lat=1&lng=1&username=demo';

describe('middleware api', () => {
  it("should be able to handle fetchCountryData API call", () => {
    const store = mockStore({});
    const apiData = {
      "languages": "ar-OM,en,bal,ur",
      "distance": "0",
      "countryCode": "OM",
      "countryName": "Oman"
    };
    const apiResponse = {
      status: 200,
      body : apiData,
      headers: {
        "content-type": "application/json"
      }
    };

    const expectedAction = {
      type: actionType.RECEIVE_COUNTRY_DATA,
      payload: apiData
    };
    const coordinates = [1, 1];
    fetchMock.getOnce(url, apiResponse);
    return store.dispatch(fetchCountryData(coordinates)).then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
  });

  it("should be able to handle fetchCountryData API errors", () => {
    const store = mockStore({});
    const apiData = {
      status: 400,
      body : { },
      headers: {
        "content-type": "application/json"
      }
    };

    const expectedAction = {
      type: actionType.RECEIVE_COUNTRY_DATA_ERROR
    };

    const coordinates = [1, 1];
    fetchMock.getOnce(url, apiData);
    return store.dispatch(fetchCountryData(coordinates)).then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
  })
});

