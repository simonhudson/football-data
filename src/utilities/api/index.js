'use strict';

const COMMON_OPTIONS = {
	dataType: 'json',
	headers: { 'X-Auth-Token': process.env.API_KEY },
	mode: 'cors'
};

const ERROR_MESSAGE = {
	competitions: 'Could not load competitions'
};

const SUCCESSFUL_STATUS_CODES = [200];

export function handleError(endpoint, error) {
	console.log(error);
};

export function get(endpoint) {
	if (!endpoint) return null;
	const options = {...COMMON_OPTIONS, method: 'GET' };
	return new Promise((resolve, reject) => {
		fetch(`http://api.football-data.org/v2/${endpoint}`, options)
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(error => reject(error));
	});
};
