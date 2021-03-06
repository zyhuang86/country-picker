import React from 'react';
import '../setupTest'
import TopMenuBar from '../../components/TopMenuBar'

const setup = () => {
  const actions = {
    toggleLeftPanelDisplay: jest.fn(),
    toggleRightPanelDisplay: jest.fn(),
    toggleAboutDisplay: jest.fn()
  };

  const component = shallow(
    <TopMenuBar
        toggleLeftPanelDisplay={actions.toggleLeftPanelDisplay}
        toggleRightPanelDisplay={actions.toggleRightPanelDisplay}
        toggleAboutDisplay={actions.toggleAboutDisplay}
    />
  );

  return {
    component: component,
    actions: actions
  }
};

describe('TopMenuBar', () => {
  it('should render a navigation bar with 3 buttons', () => {
    const { component } = setup(true);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('NavItem').length).toBe(3);
  });

  it('should toggle left panel when filter control is clicked', () => {
    const { component, actions } = setup();
    const button = component.find('NavItem').findWhere(item => item.prop('eventKey') === 2);
    button.simulate('click');
    expect(actions.toggleLeftPanelDisplay).toBeCalled();
  });

  it('should display about popup when about is clicked', () => {
    const { component, actions } = setup();
    const button = component.find('NavItem').findWhere(item => item.prop('eventKey') === 3);
    button.simulate('click');
    expect(actions.toggleAboutDisplay).toBeCalled();
  });
});