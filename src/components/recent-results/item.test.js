'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ResultItem from './item';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    result: {        
        awayTeam: {
            name: 'Away'
        },
        homeTeam: {
            name: 'Home'
        },
        score: {
            fullTime: {
                awayTeam: 1,
                homeTeam: 2
            }
        }
    }
};

describe('ResultItem', () => {
    
    let objectUnderTest;
	const selector = `[data-test="recent-results__item"]`;
    const homeTeamName = `[data-test="recent-results__item-home-team-name"]`;
    const homeTeamScore = `[data-test="recent-results__item-home-team-score"]`;
    const awayTeamName = `[data-test="recent-results__item-away-team-name"]`;
    const awayTeamScore = `[data-test="recent-results__item-away-team-score"]`;
    
    
    it('should return null when no result prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.result;
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
        expect(objectUnderTest.find(homeTeamName).text()).to.equal('Home');
        expect(objectUnderTest.find(homeTeamScore).text()).to.equal('2');
        expect(objectUnderTest.find(awayTeamName).text()).to.equal('Away');
        expect(objectUnderTest.find(awayTeamScore).text()).to.equal('1');
    });

    const initialise = props => objectUnderTest = shallow(<ResultItem {...props}/>);
});
