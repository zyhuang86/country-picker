import React from 'react'
import { Provider } from 'react-redux'
import TestUtils from 'react-dom/test-utils'
import createMockStore from 'redux-mock-store'
import * as actionType from '../../constants/ActionTypes'
import AboutModalContainer from '../../containers/AboutModalContainer'

let instance, container;
const mockStore = createMockStore();
const initialState = {
  popoutPanel: {
    isAboutModalVisible: false
  }
};
let store = mockStore(initialState);

describe('AboutModalContainer', () => {

  beforeEach(() => {
    spyOn(store, 'dispatch');
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AboutModalContainer/>
      </Provider>
    )
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should receive all the state variables', () => {
    container = TestUtils.findRenderedComponentWithType(instance, AboutModalContainer);
    expect(container.selector.props.isAboutModalVisible).toEqual(false);
  });

  it('should dispatch toggleAboutDisplay', () => {
    container = TestUtils.findRenderedComponentWithType(instance, AboutModalContainer);
    container.selector.props.toggleAboutDisplay();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_ABOUT_MODAL
    })
  })
});