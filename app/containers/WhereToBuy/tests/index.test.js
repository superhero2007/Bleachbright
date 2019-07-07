import React from 'react';
import { shallow } from 'enzyme';

import WhereToBuy from '../index';

describe('<WhereToBuy />', () => {
  it('should render the page message', () => {
    shallow(<WhereToBuy />);
  });
});
