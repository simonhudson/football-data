'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import RecentResults from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    results: require('~/test-data/results')
};

describe('RecentResults', () => {
    
    let objectUnderTest;
	const selector = `[data-test="recent-results"]`;
    const item = `[data-test="recent-results__item"]`;
    
    it('should return null when no results prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.results;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });
    
    it('should render the default number of results', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).find(item).length).to.equal(3);
    });
    
    it('should render a specified number of results', () => {
        const props = cloneDeep(baseProps);
        props.numberOfResultsToDisplay = 2;
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).find(item).length).to.equal(2);
    });

    const initialise = props => objectUnderTest = mount(<RecentResults {...props}/>);
});
