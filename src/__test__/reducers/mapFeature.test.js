import mapFeature from '../../reducers/mapFeature'
import * as ActionType from '../../constants/ActionTypes'

const initialState = {
  countryDataRetrievalFailed: false,
  isCountryBoundaryVisible: false,
  selectedCoordinates: [0,0],
  selectedCountryData: {}
};

describe('mapFeature reducer', () => {
  it('should return the initial state', () => {
    expect(mapFeature(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_COUNTRY_BOUNDARY', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.isCountryBoundaryVisible = true;
    expect(
      mapFeature(initialState, {
        type: ActionType.TOGGLE_COUNTRY_BOUNDARY,
        payload: true
      })
    ).toEqual(expectedData)
  });

  it('should handle RECEIVE_COUNTRY_DATA', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.selectedCountryData = {"data": "test"};
    expectedData.countryDataRetrievalFailed = false;
    expect(
      mapFeature(initialState, {
        type: ActionType.RECEIVE_COUNTRY_DATA,
        payload: {"data": "test"},
        countryDataRetrievalFailed: false
      })
    ).toEqual(expectedData)
  });

  it('should handle RECEIVE_COUNTRY_DATA_ERROR', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.countryDataRetrievalFailed = true;
    expect(
      mapFeature(initialState, {
        type: ActionType.RECEIVE_COUNTRY_DATA_ERROR
      })
    ).toEqual(expectedData)
  });

  it('should handle RECEIVE_COORDINATES', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.selectedCoordinates = [1,1];
    expect(
      mapFeature(initialState, {
        type: ActionType.RECEIVE_COORDINATES,
        payload: [1,1]
      })
    ).toEqual(expectedData)
  })
});