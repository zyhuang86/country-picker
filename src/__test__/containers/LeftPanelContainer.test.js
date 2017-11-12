import React from 'react'
import { Provider } from 'react-redux'
import TestUtils from 'react-dom/test-utils'
import createMockStore from 'redux-mock-store'
import * as actionType from '../../constants/ActionTypes'
import LeftPanelContainer from '../../containers/LeftPanelContainer'

let instance, container;
const mockStore = createMockStore();
const initialState = {
  popoutPanel: {
    isLeftPanelVisible: true
  },
  mapFeature: {
    isCountryBoundaryVisible: true
  }
};
let store = mockStore(initialState);

describe('LeftPanelContainer', () => {

  beforeEach(() => {
    spyOn(store, 'dispatch');
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <LeftPanelContainer/>
      </Provider>
    )
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should receive all the state variables', () => {
    container = TestUtils.findRenderedComponentWithType(instance, LeftPanelContainer);
    expect(container.selector.props.isLeftPanelVisible).toEqual(true);
    expect(container.selector.props.isCountryBoundaryVisible).toEqual(true);
  });

  it('should dispatch toggleLeftPanelDisplay', () => {
    container = TestUtils.findRenderedComponentWithType(instance, LeftPanelContainer);
    container.selector.props.toggleLeftPanelDisplay();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_LEFT_PANEL
    })
  });

  it('should dispatch toggleCountryBoundary', () => {
    container = TestUtils.findRenderedComponentWithType(instance, LeftPanelContainer);
    container.selector.props.toggleCountryBoundary();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_COUNTRY_BOUNDARY
    })
  })
});