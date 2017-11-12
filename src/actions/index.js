import * as ActionType from '../constants/ActionTypes'

export const toggleRightPanel = () => ({
  type: ActionType.TOGGLE_RIGHT_PANEL
});

export const toggleLeftPanel = () => ({
  type: ActionType.TOGGLE_LEFT_PANEL
});

export const toggleAboutDisplay = () => ({
  type: ActionType.TOGGLE_ABOUT_MODAL
});

export const receiveCoordinates = (coordinates) => ({
  type: ActionType.RECEIVE_COORDINATES,
  payload: coordinates
});

export const toggleCountryBoundary = (isCountryBoundaryVisible) => ({
  type: ActionType.TOGGLE_COUNTRY_BOUNDARY,
  payload: isCountryBoundaryVisible
});