'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './index';

describe('Header', () => {
    
    let objectUnderTest;
	const selector = `[data-test="header"]`;
    
    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
    });

    const initialise = () => objectUnderTest = shallow(<Header />);
    
});
