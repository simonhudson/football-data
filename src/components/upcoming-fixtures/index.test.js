'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import UpcomingFixtures from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    fixtures: require('~/test-data/fixtures')
};

describe('UpcomingFixtures', () => {
    
    let objectUnderTest;
	const selector = `[data-test="upcoming-fixtures"]`;
    const item = `[data-test="upcoming-fixtures__item"]`;
    
    it('should return null when no fixtures prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.fixtures;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });
    
    it('should render the default number of fixtures', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).find(item).length).to.equal(3);
    });
    
    it('should render a specified number of fixtures', () => {
        const props = cloneDeep(baseProps);
        props.numberOfFixturesToDisplay = 2;
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).find(item).length).to.equal(2);
    });
    
    it('should render correct fixture data', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).find(item).length).to.equal(3);
    });

    const initialise = props => objectUnderTest = mount(<UpcomingFixtures {...props}/>);
});
