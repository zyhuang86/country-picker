import popoutPanel from '../../reducers/popoutPanel'
import * as ActionType from '../../constants/ActionTypes'

const initialState = {
  isLeftPanelVisible: false,
  isRightPanelVisible: false,
  isAboutModalVisible: false
};

describe('popoutPanel reducer', () => {
  it('should return the initial state', () => {
    expect(popoutPanel(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_RIGHT_PANEL', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.isRightPanelVisible = true;
    expect(
      popoutPanel(initialState, {
        type: ActionType.TOGGLE_RIGHT_PANEL
      })
    ).toEqual(expectedData)
  });

  it('should handle TOGGLE_LEFT_PANEL', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.isLeftPanelVisible = true;
    expect(
      popoutPanel(initialState, {
        type: ActionType.TOGGLE_LEFT_PANEL
      })
    ).toEqual(expectedData)
  });

  it('should handle TOGGLE_ABOUT_MODAL', () => {
    let expectedData = Object.assign({}, initialState);
    expectedData.isAboutModalVisible = true;
    expect(
      popoutPanel(initialState, {
        type: ActionType.TOGGLE_ABOUT_MODAL
      })
    ).toEqual(expectedData)
  })
});