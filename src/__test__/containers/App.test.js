import React from 'react';
import '../setupTest'
import App from '../../containers/App'

describe('App', () => {
  it('should render App', () => {
    const component = shallow(
      <App />
    );
    expect(component.find('Connect').length).toEqual(5);
    expect(component.find('Connect').get(0).type.displayName).toEqual('Connect(TopMenuBarContainer)');
    expect(component.find('Connect').get(1).type.displayName).toEqual('Connect(MapContainer)');
    expect(component.find('Connect').get(2).type.displayName).toEqual('Connect(RightPanelContainer)');
    expect(component.find('Connect').get(3).type.displayName).toEqual('Connect(LeftPanelContainer)');
    expect(component.find('Connect').get(4).type.displayName).toEqual('Connect(AboutModalContainer)');
  });
});