import * as ActionType from '../constants/ActionTypes'

const initialState = {
  isLeftPanelVisible: false,
  isRightPanelVisible: false,
  isAboutModalVisible: false
};

const popoutPanel = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_RIGHT_PANEL:
      return {
        ...state,
        isRightPanelVisible: !state.isRightPanelVisible
      };
    case ActionType.TOGGLE_LEFT_PANEL:
    return {
      ...state,
      isLeftPanelVisible: !state.isLeftPanelVisible
    };
    case ActionType.TOGGLE_ABOUT_MODAL:
      return {
        ...state,
        isAboutModalVisible: !state.isAboutModalVisible
      };
    default:
      return state
  }
};

export default popoutPanel
