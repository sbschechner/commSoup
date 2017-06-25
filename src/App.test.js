import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App.js';

describe('<App/>', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });

  });