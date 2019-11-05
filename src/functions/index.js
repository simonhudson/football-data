'use strict';

const { get } = require('../api');

const urlParams = new URLSearchParams(window.location.search);
const TEAM_API_ID = urlParams.get('teamId') || process.env.TEAM_API_ID;
const TEAM_API_URL = `teams/${TEAM_API_ID}/`;

export function getClub() { return get(`${TEAM_API_URL}`); }
export function getFixtures() { return get(`${TEAM_API_URL}matches?status=SCHEDULED`); }
export function getResults() { return get(`${TEAM_API_URL}matches?status=FINISHED`); }