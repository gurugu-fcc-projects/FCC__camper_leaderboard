import React from 'react';
import { mount } from 'enzyme';

import { App } from '../../components/App';

function setup() {
  const props = { testVariable: 'testing...' };
  const enzymeWrapper = mount(<App {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('App', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('div').text()).toBe('testing...');
    });
  });
});
