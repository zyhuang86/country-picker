import * as ActionType from '../constants/ActionTypes'

const initialState = {
  countryDataRetrievalFailed: false,
  isCountryBoundaryVisible: false,
  selectedCoordinates: [0,0],
  selectedCountryData: {"languages":"ar-OM,en,bal,ur","distance":"0","countryCode":"OM","countryName":"Oman"}
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
        isCountryBoundaryVisible: action.isCountryBoundaryVisible
      };
    default:
      return state
  }
};

export default popoutPanel
