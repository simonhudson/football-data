'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MainNavigation from './main-navigation';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    onNavigationClick: jest.fn()
};

describe('MainNavigation', () => {
    
    let objectUnderTest;
	const selector = `[data-test="main-navigation"]`;
    const item = `[data-test="main-navigation__item"]`;
    
    it('should return null when no onNavigationClick prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.onNavigationClick;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });
    
    it('should render a list of navigation items', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).not.to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(item).length).to.equal(4);
        
        // Assert individual link attributes
        expect(objectUnderTest.find(item).at(0).find('a').prop('data-value')).to.equal('home');
        expect(objectUnderTest.find(item).at(0).find('a').text()).to.equal('Home');
        expect(objectUnderTest.find(item).at(1).find('a').prop('data-value')).to.equal('results');
        expect(objectUnderTest.find(item).at(1).find('a').text()).to.equal('Results');
        expect(objectUnderTest.find(item).at(2).find('a').prop('data-value')).to.equal('fixtures');
        expect(objectUnderTest.find(item).at(2).find('a').text()).to.equal('Fixtures');
        expect(objectUnderTest.find(item).at(3).find('a').prop('data-value')).to.equal('squad');
        expect(objectUnderTest.find(item).at(3).find('a').text()).to.equal('Squad');
    });
    
    const initialise = props => objectUnderTest = shallow(<MainNavigation {...props}/>);
});
