'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './home';

describe('Home', () => {
    
    let objectUnderTest;
	const selector = `[data-test="view-home"]`;
    
    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(selector).find('h1').text()).to.equal('Home');
    });

    const initialise = () => objectUnderTest = shallow(<Home />);
    
});
