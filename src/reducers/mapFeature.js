import * as ActionType from '../constants/ActionTypes'

const initialState = {
  countryDataRetrievalFailed: false,
  isCountryBoundaryVisible: false,
  selectedCoordinates: [0,0],
  selectedCountryData: {}
};

const popoutPanel = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RECEIVE_COUNTRY_DATA:
      return {
        ...state,
        selectedCountryData: action.payload,
        countryDataRetrievalFailed : false
      };
    case ActionType.RECEIVE_COUNTRY_DATA_ERROR:
      return {
        ...state,
        countryDataRetrievalFailed: true
    };
    case ActionType.RECEIVE_COORDINATES:
      return {
        ...state,
        selectedCoordinates: action.payload
      };
    case ActionType.TOGGLE_COUNTRY_BOUNDARY:
      return {
        ...state,
        isCountryBoundaryVisible: action.payload
      };
    default:
      return state
  }
};

export default popoutPanel
