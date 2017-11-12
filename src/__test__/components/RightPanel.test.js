import React from 'react';
import '../setupTest'
import RightPanel from '../../components/RightPanel'

const setup = (show=false, countryData={}, coordinates=[0,0]) => {
  const actions = {
    onHide: jest.fn()
  };

  const component = shallow(
    <RightPanel
        countryData={countryData}
        coordinates={coordinates}
        show={show}
        onHide={actions.onHide}
    />
  );

  return {
    component: component,
    actions: actions
  }
};

describe('Right Panel', () => {
  it('should display right panel on toggle', () => {
    const { component } = setup(true);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.prop('backdrop')).toEqual(false);
  });

  it('should hide right panel on toggle', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
    expect(component.prop('show')).toEqual(false);
  });

  it('should render country data and coordinates', () => {
    const countryData = {
      "languages": "ar-OM,en,bal,ur",
      "distance": "0",
      "countryCode": "OM",
      "countryName": "Oman"
    };
    const { component } = setup(true, countryData);
    expect(component.find('iframe').prop('src')).toEqual('https://en.m.wikipedia.org/wiki/Oman');
    expect(component.find('Label').find('span').text()).toEqual('Coordinates: (0.00,0.00)');
    expect(component.find('ModalTitle').find('ul').find('li').length).toEqual(2);
    expect(component.find('ModalTitle').find('ul').text()).toEqual(' Oman    ');
    expect(component.find('ModalTitle').find('ul').find('li').at(0).prop('className')).toEqual('flag om');
    expect(component.find('ModalTitle').find('ul').find('li').at(1).prop('className')).toEqual('flag om');
  });
});