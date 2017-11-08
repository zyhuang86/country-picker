import React from 'react';
import '../setupTest'
import LeftPanel from '../../components/LeftPanel'

const setup = (show=false, isCountryBoundaryVisible=false) => {
  const actions = {
    onHide: jest.fn(),
    toggleCountryBoundary: jest.fn()
  };

  const component = shallow(
      <LeftPanel show={show}
                 isCountryBoundaryVisible={isCountryBoundaryVisible}
                 onHide={actions.onHide}
                 toggleCountryBoundary={actions.toggleCountryBoundary}
      />
  );

  return {
    component: component,
    actions: actions
  }
};

describe('Left Panel', () => {
  it('should display modal', () => {
    const { component } = setup(true);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.prop('backdrop')).toEqual(false);
  });

  it('should hide modal', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
    expect(component.prop('show')).toEqual(false);
  });

  it('should call toggle map boundaries on checkbox click', () => {
    const { component, actions } = setup();
    const mockEvent = { target: { checked: true } };
    const checkbox = component.find('Checkbox');
    checkbox.simulate('change', mockEvent);
    expect(actions.toggleCountryBoundary).toBeCalled()
  });
});