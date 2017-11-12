import React from 'react'
import { Provider } from 'react-redux'
import TestUtils from 'react-dom/test-utils'
import createMockStore from 'redux-mock-store'
import * as actionType from '../../constants/ActionTypes'
import MapContainer from '../../containers/MapContainer'

let instance, container;
const mockStore = createMockStore();
const initialState = {
  mapFeature: {
    selectedCountryData: {},
    countryDataRetrievalFailed: true,
    isCountryBoundaryVisible: true
  }
};
let store = mockStore(initialState);

describe('MapContainer', () => {

  beforeEach(() => {
    spyOn(store, 'dispatch');
    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <MapContainer/>
      </Provider>
    )
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should receive all the state variables', () => {
    container = TestUtils.findRenderedComponentWithType(instance, MapContainer);
    expect(container.selector.props.selectedCountryData).toEqual({});
    expect(container.selector.props.countryDataRetrievalFailed).toEqual(true);
    expect(container.selector.props.isCountryBoundaryVisible).toEqual(true);
  });

  it('should dispatch fetchCountryData', () => {
    container = TestUtils.findRenderedComponentWithType(instance, MapContainer);
    const coordinates = [1,1];
    container.selector.props.fetchCountryData(coordinates);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.RECEIVE_COORDINATES,
      payload: coordinates
    });
  });

  it('should dispatch showCountryCard', () => {
    container = TestUtils.findRenderedComponentWithType(instance, MapContainer);
    container.selector.props.showCountryCard();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionType.TOGGLE_RIGHT_PANEL
    });
  })
});