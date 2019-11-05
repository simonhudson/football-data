'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import UpcomingFixtures from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    fixtures: [
        {
            awayTeam: { name: 'Away 1' },
            homeTeam: { name: 'Home 1' },
            utcDate: '2019-11-09T12:30:00Z'
        },
        {
            awayTeam: { name: 'Away 2' },
            homeTeam: { name: 'Home 2' },
            utcDate: '2019-11-16T15:00:00Z'
        },
        {
            awayTeam: { name: 'Away 3' },
            homeTeam: { name: 'Home 3' },
            utcDate: '2019-11-23T19:45:00Z'
        }
    ]
};

describe('UpcomingFixtures', () => {
    
    let objectUnderTest;
	const selector = `[data-test="upcoming-fixtures"]`;
    const item = `[data-test="upcoming-fixtures__item"]`;
    const dateTime = `[data-test="upcoming-fixtures__item-date-time"]`;
    const homeTeamName = `[data-test="upcoming-fixtures__item-home-team-name"]`;
    const awayTeamName = `[data-test="upcoming-fixtures__item-away-team-name"]`;
    
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
        expect(objectUnderTest.find(selector).find(item).at(0).find(dateTime).text()).to.equal('Sat 9th Nov 2019 12:30pm');
        expect(objectUnderTest.find(selector).find(item).at(0).find(homeTeamName).text()).to.equal('Home 1');
        expect(objectUnderTest.find(selector).find(item).at(0).find(awayTeamName).text()).to.equal('Away 1');
        expect(objectUnderTest.find(selector).find(item).at(1).find(dateTime).text()).to.equal('Sat 16th Nov 2019 3:00pm');
        expect(objectUnderTest.find(selector).find(item).at(1).find(homeTeamName).text()).to.equal('Home 2');
        expect(objectUnderTest.find(selector).find(item).at(1).find(awayTeamName).text()).to.equal('Away 2');
        expect(objectUnderTest.find(selector).find(item).at(2).find(dateTime).text()).to.equal('Sat 23rd Nov 2019 7:45pm');
        expect(objectUnderTest.find(selector).find(item).at(2).find(homeTeamName).text()).to.equal('Home 3');
        expect(objectUnderTest.find(selector).find(item).at(2).find(awayTeamName).text()).to.equal('Away 3');
    });

    const initialise = props => objectUnderTest = mount(<UpcomingFixtures {...props}/>);
});
