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
            let data = testOptions.squad;
            data.forEach(item => expect(item).to.not.have.property('age'));
            transformSquad(data);
            data.forEach(item => expect(item).to.have.property('age'));
        });

    });

    describe('transformResults', () => {

        it('should reverse data from API', () => {
            let data = testOptions.results;
            expect(data[0].awayTeam).to.have.property('name', 'Away 1');
            expect(data[1].awayTeam).to.have.property('name', 'Away 2');
            expect(data[2].awayTeam).to.have.property('name', 'Away 3');
            transformResults(data);
            expect(data[0].awayTeam).to.have.property('name', 'Away 3');
            expect(data[1].awayTeam).to.have.property('name', 'Away 2');
            expect(data[2].awayTeam).to.have.property('name', 'Away 1');
        });

    });

});
