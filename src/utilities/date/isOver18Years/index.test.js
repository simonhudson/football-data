'use strict';

import { expect } from 'chai';
const isOver18Years = require('./index');

const NOW = new Date();
const now = {
	day: NOW.getUTCDay(),
	month: NOW.getUTCMonth(),
	year: NOW.getUTCFullYear()
};

describe('getMonthName: Return name of month from numeric value', () => {
	
	it(`should return null when invalid date argument passed`, () => {
		[null, 'hello', '13'].forEach(value => {
			const actual = isOver18Years(value);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should return false when date is not more than 18 years from today`, () => {
		const actual = isOver18Years(`${now.day} ${now.month} ${now.year - 1}`);
		expect(actual).to.equal(false);
	});
	
	it(`should return true when date is more than 18 years from today`, () => {
		const actual = isOver18Years(`${now.day} ${now.month} ${now.year - 19}`);
		expect(actual).to.equal(true);
	});
	
});