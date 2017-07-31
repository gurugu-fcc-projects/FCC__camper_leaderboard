import React from 'react';
import { mount } from 'enzyme';

import { App } from '../../components/App';

function setup() {
  const props = {
    isRequesting: false,
    score30days: [],
    scoreAlldays: [],
    error: '',
    fetch30: jest.fn(),
    fetchAll: jest.fn(),
  };
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

      expect(enzymeWrapper.find('div').className()).toBe('app');
    });
  });
});
