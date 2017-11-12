import React from 'react'
import { Provider } from 'react-redux'
import TestUtils from 'react-dom/test-utils'
import createMockStore from 'redux-mock-store'
import * as actionType from '../../constants/ActionTypes'
import TopMenuBarContainer from '../../containers/TopMenuBarContainer'

let instance, container;
const mockStore = createMockStore();
let store = mockStore();

describe('TopMenuBarContainer', () => {

  beforeEach(() => {
    spyOn(store, 'dispatch');
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TopMenuBarContainer/>
      </Provider>
    )
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch toggleRightPanelDisplay', () => {
    container = TestUtils.findRenderedComponentWithType(instance, TopMenuBarContainer);
    container.selector.props.toggleRightPanelDisplay();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_RIGHT_PANEL
    })
  });

  it('should dispatch toggleLeftPanelDisplay', () => {
    container = TestUtils.findRenderedComponentWithType(instance, TopMenuBarContainer);
    container.selector.props.toggleLeftPanelDisplay();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_LEFT_PANEL
    })
  });

  it('should dispatch toggleAboutDisplay', () => {
    container = TestUtils.findRenderedComponentWithType(instance, TopMenuBarContainer);
    container.selector.props.toggleAboutDisplay();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_ABOUT_MODAL
    })
  });
});