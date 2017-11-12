import React from 'react';
import '../setupTest'
import AboutModal from '../../components/AboutModal'

describe('About Modal', () => {
  it('should display modal when show is true', () => {
    const component = shallow(
      <AboutModal show={ true } onHide={ jest.fn() } />
    );
    expect(toJson(component)).toMatchSnapshot();
    expect(component.prop('show')).toEqual(true);
    expect(component.find('ModalHeader').prop('closeButton')).toEqual(true);
  });

  it('should hide modal when show is false', () => {
    const component = render(
        <AboutModal show={ false } onHide={ jest.fn() } />
    );
    expect(toJson(component)).toMatchSnapshot();
    expect(component.text()).toEqual('');
  });
});