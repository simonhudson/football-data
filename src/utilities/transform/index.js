'use strict';

const moment = require('moment');

export function transformSquad(data) {
	data.forEach(player => player.age = moment().diff(moment(player.dateOfBirth), 'years'));
	return data;
}

export function transformResults(data) {
	return data.reverse();
}
