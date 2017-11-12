import React from 'react';
import '../setupTest'
import Map from '../../components/Map'

const setup = (isCountryBoundaryVisible=false, countryDataRetrievalFailed=false) => {
  const actions = {
    countryDataRetrievalFailed: jest.fn(),
    fetchCountryData: jest.fn(),
    showCountryCard: jest.fn()
  };

  const component = mount(
    <Map
        countryDataRetrievalFailed={countryDataRetrievalFailed}
        selectedCountryData={actions.selectedCountryData}
        fetchCountryData={actions.fetchCountryData}
        showCountryCard={actions.showCountryCard}
        isCountryBoundaryVisible={isCountryBoundaryVisible} />
  );

  return {
    component: component,
    actions: actions
  }
};

describe('Map', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display map and create boundary', () => {
    const handleCountryNameClickEventSpy = jest.spyOn(Map.prototype, 'handleCountryNameClickEvent');
    const createPopupOverlaySpy = jest.spyOn(Map.prototype, 'createPopupOverlay');
    const createCountryBoundaryOverlaySpy = jest.spyOn(Map.prototype, 'createCountryBoundaryOverlay');
    const handleMapBoundaryVisibilitySpy = jest.spyOn(Map.prototype, 'handleMapBoundaryVisibility');
    const handleMapSingleClickSpy = jest.spyOn(Map.prototype, 'handleMapSingleClick');
    const { component } = setup(true, false);
    expect(toJson(component)).toMatchSnapshot();
    expect(handleCountryNameClickEventSpy).toBeCalled();
    expect(createPopupOverlaySpy).toBeCalled();
    expect(createCountryBoundaryOverlaySpy).toBeCalled();
    expect(handleMapBoundaryVisibilitySpy).toBeCalled();
    expect(handleMapSingleClickSpy).toBeCalled();
  });

  it('should toggle map boundary on isCountryBoundaryVisible update', () => {
    const handleMapBoundaryVisibilitySpy = jest.spyOn(Map.prototype, 'handleMapBoundaryVisibility');
    const { component } = setup(true, false);
    component.setProps({isCountryBoundaryVisible: false});
    expect(handleMapBoundaryVisibilitySpy).toBeCalled();
  })
});