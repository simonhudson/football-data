'use strict';

const COMMON_OPTIONS = {
	dataType: 'json',
	headers: { 'X-Auth-Token': process.env.API_KEY },
	mode: 'cors'
};

const urlParams = new URLSearchParams(window.location.search);
const TEAM_API_ID = urlParams.get('teamId') || process.env.TEAM_API_ID;
const TEAM_API_URL = `teams/${TEAM_API_ID}/`;

const get = endpoint => {
	if (!endpoint) return null;
	const options = {...COMMON_OPTIONS, method: 'GET' };
	return new Promise((resolve, reject) => {
		fetch(`${process.env.API_URL}/${endpoint}`, options)
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(error => reject(error));
	});
};

export function getClub() { return get(`${TEAM_API_URL}`); }
export function getFixtures() { return get(`${TEAM_API_URL}matches?status=SCHEDULED`); }
export function getResults() { return get(`${TEAM_API_URL}matches?status=FINISHED`); }
