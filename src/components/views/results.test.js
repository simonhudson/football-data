'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Results from './results';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    results: [
        {
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
    ]
};

describe('Results', () => {
    
    let objectUnderTest;
	const selector = `[data-test="view-results"]`;
    
    it('should return null when no results prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.results;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });
    
    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
        expect(objectUnderTest.find(selector).find('h1').text()).to.equal('Results');
    });

    const initialise = props => objectUnderTest = shallow(<Results {...props} />);
    
});
