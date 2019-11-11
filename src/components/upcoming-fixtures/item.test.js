'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FixtureItem from './item';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    fixture: require('~/test-data/fixtures')[0]
};

describe('FixtureItem', () => {
    
    let objectUnderTest;
	const selector = `[data-test="upcoming-fixtures__item"]`;
    const dateTime = `[data-test="upcoming-fixtures__item-date-time"]`;
    const homeTeamName = `[data-test="upcoming-fixtures__item-home-team-name"]`;
    const awayTeamName = `[data-test="upcoming-fixtures__item-away-team-name"]`;
    
    
    it('should return null when no fixture prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.fixture;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });
    
    it('should render with correct data', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(dateTime).text()).to.equal('Sat 9th Nov 2019 12:30pm');
        expect(objectUnderTest.find(homeTeamName).text()).to.equal('Home 1');
        expect(objectUnderTest.find(awayTeamName).text()).to.equal('Away 1');
    });

    const initialise = props => objectUnderTest = shallow(<FixtureItem {...props}/>);
});
