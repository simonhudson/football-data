'use strict';

import { expect } from 'chai';
const { transformSquad, transformResults } = require('./');

const testOptions = {
    squad: require('~/test-data/squad'),
    results: require('~/test-data/results')
};

describe('Transform', () => {

    describe('transformSquad', () => {

        it('should add an age property to each item', () => {
            testOptions.squad.forEach(item => expect(item).to.not.have.property('age'));
            transformSquad(testOptions.squad).forEach(item => expect(item).to.have.property('age'));
        });

    });

    describe('transformResults', () => {

        it('should reverse data from API', () => {

            const reversed = testOptions.results.reverse();
            const actual = transformResults(testOptions.results);
            expect(actual).to.deep.equal(reversed);

        });

    });

});
