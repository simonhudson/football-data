'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Squad from './squad';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    squad: [
        {
            id: 1,
            shirtNumber: 10,
            position: 'Forward',
            name: 'Steve Bloomer'
        },
        {
            id: 2,
            shirtNumber: 5,
            position: 'Defender',
            name: 'Mark Wright'
        },
        {
            id: 3,
            shirtNumber: 4,
            position: 'Midfielder',
            name: 'Craig Bryson'
        }
    ]
};

describe('Squad', () => {
    
    let objectUnderTest;
	const selector = `[data-test="view-squad"]`;
    const selectedPlayer = `[data-test="selected-player"]`;
    const selectedPlayerName = `[data-test="selected-player__name"]`;
    const selectedPlayerPosition = `[data-test="selected-player__position"]`;
    const selectedPlayerAge = `[data-test="selected-player__age"]`;
    const changeSelectedPlayerButton = `[data-test="change-selected-player"]`;
    
    it('should return null when no squad prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.squad;
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
        expect(objectUnderTest.find(selector).find('h1').text()).to.equal('Squad');
        expect(objectUnderTest.find(selectedPlayer).length).to.equal(0);
    });
    
    it('should render correct number of squad members', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.find(selector).find('li').length).to.equal(3);
        expect(objectUnderTest.find(selector).find('li').at(0).text()).to.equal('10 Steve Bloomer (Forward)');
        expect(objectUnderTest.find(selector).find('li').at(1).text()).to.equal('5 Mark Wright (Defender)');
        expect(objectUnderTest.find(selector).find('li').at(2).text()).to.equal('4 Craig Bryson (Midfielder)');
    });
    
    it('should render selected player when selected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.find(selectedPlayer).length).to.equal(0);
        objectUnderTest.setState({
			selectedPlayer: {
                name: 'Steve Bloomer',
                position: 'Forward',
                age: 27
            }
		});
		objectUnderTest.update();
        expect(objectUnderTest.find(selectedPlayer).length).to.equal(1);
        expect(objectUnderTest.find(selectedPlayerName).length).to.equal(1);
        expect(objectUnderTest.find(selectedPlayerName).text()).to.equal('Steve Bloomer');
        expect(objectUnderTest.find(selectedPlayerPosition).length).to.equal(1);
        expect(objectUnderTest.find(selectedPlayerPosition).text()).to.equal('Forward');
        expect(objectUnderTest.find(selectedPlayerAge).length).to.equal(1);
        expect(objectUnderTest.find(selectedPlayerAge).text()).to.equal('27');
    });

    const initialise = props => objectUnderTest = shallow(<Squad {...props} />);
    
});
