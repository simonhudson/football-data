'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ClubPicker from './index';

const testOptions = require('~/test-data/club-picker-options'); 

describe('ClubPicker', () => {
    
    let objectUnderTest;
	const selector = `[data-test="club-picker"]`;
    const label = `[data-test="club-picker__label"]`;
    const select = `[data-test="club-picker__select"]`;
    const option = `[data-test="club-picker__option"]`;
    
    it('should return null when no options in state', () => {
        initialise();
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
        expect(objectUnderTest.find(label).length).to.equal(0);
        expect(objectUnderTest.find(select).length).to.equal(0);
    });
    
    it('should render options list from state', () => {
        initialise();
        expect(objectUnderTest.find(selector).length).to.equal(0);
        objectUnderTest.setState({ options: testOptions });
		objectUnderTest.update();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(label).length).to.equal(1);
        expect(objectUnderTest.find(select).length).to.equal(1);
        expect(objectUnderTest.find(option).length).to.equal(4);
    });
    
    it('should render correct values and text for options', () => {
        initialise();
        expect(objectUnderTest.find(selector).length).to.equal(0);
        objectUnderTest.setState({ options: testOptions });
		objectUnderTest.update();
        expect(objectUnderTest.find(option).at(0).text()).to.equal('Club 1');
        expect(objectUnderTest.find(option).at(0).prop('value')).to.equal('1');
        expect(objectUnderTest.find(option).at(1).text()).to.equal('Club 2');
        expect(objectUnderTest.find(option).at(1).prop('value')).to.equal('2');
        expect(objectUnderTest.find(option).at(2).text()).to.equal('Club 3');
        expect(objectUnderTest.find(option).at(2).prop('value')).to.equal('3');
        expect(objectUnderTest.find(option).at(3).text()).to.equal('Club 4');
        expect(objectUnderTest.find(option).at(3).prop('value')).to.equal('4');
    });

    const initialise = () => objectUnderTest = shallow(<ClubPicker />);
    
});
