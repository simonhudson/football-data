'use strict';

const COMMON_OPTIONS = {
	dataType: 'json',
	headers: { 'X-Auth-Token': process.env.API_KEY },
	mode: 'cors'
};

export function get(endpoint) {
	if (!endpoint) return null;
	const options = {...COMMON_OPTIONS, method: 'GET' };
	return new Promise((resolve, reject) => {
		fetch(`${process.env.API_URL}/${endpoint}`, options)
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(error => reject(error));
	});
}
