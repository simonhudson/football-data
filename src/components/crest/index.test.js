'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Crest from './index';
const cloneDeep = require('lodash/cloneDeep');

const baseProps = {
    clubName: 'Some Team',
    src: '/path/to/img'
};

describe('Crest', () => {
    
    let objectUnderTest;
	const selector = `[data-test="crest"]`;
    
    it('should return null when no clubName prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.clubName;
        initialise(props);
        expect(objectUnderTest.html()).to.be.null;
        expect(objectUnderTest.exists(selector)).to.be.false;
        expect(objectUnderTest.find(selector).length).to.equal(0);
    });
    
    it('should return null when no src prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.src;
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
        expect(objectUnderTest.prop('alt')).to.equal('Some Team');
    });

    const initialise = props => objectUnderTest = shallow(<Crest {...props}/>);
});
