'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './index';

describe('Footer', () => {
    
    let objectUnderTest;
	const selector = `[data-test="footer"]`;
    
    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
    });

    const initialise = () => objectUnderTest = shallow(<Footer />);
    
});
