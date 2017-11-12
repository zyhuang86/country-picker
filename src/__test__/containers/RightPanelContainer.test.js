import React from 'react'
import { Provider } from 'react-redux'
import TestUtils from 'react-dom/test-utils'
import createMockStore from 'redux-mock-store'
import * as actionType from '../../constants/ActionTypes'
import RightPanelContainer from '../../containers/RightPanelContainer'

let instance, container;
const mockStore = createMockStore();
const initialState = {
  popoutPanel: {
    isRightPanelVisible: true
  },
  mapFeature: {
    selectedCountryData: {},
    selectedCoordinates: [1,1]
  }
};
let store = mockStore(initialState);

describe('RightPanelContainer', () => {

  beforeEach(() => {
    spyOn(store, 'dispatch');
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <RightPanelContainer/>
      </Provider>
    )
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should receive all the state variables', () => {
    container = TestUtils.findRenderedComponentWithType(instance, RightPanelContainer);
    expect(container.selector.props.isRightPanelVisible).toEqual(true);
    expect(container.selector.props.countryData).toEqual({});
    expect(container.selector.props.coordinates).toEqual([1,1]);
  });

  it('should dispatch toggleRightPanelDisplay', () => {
    container = TestUtils.findRenderedComponentWithType(instance, RightPanelContainer);
    container.selector.props.toggleRightPanelDisplay();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_RIGHT_PANEL
    })
  });
});