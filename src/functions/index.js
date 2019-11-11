'use strict';

const { get } = require('../api');

const getTeamApiUrl = id => `teams/${id}/`;

export function getClub(clubId) { return get(`${getTeamApiUrl(clubId)}`); }
export function getFixtures(clubId) { return get(`${getTeamApiUrl(clubId)}matches?status=SCHEDULED`); }
export function getResults(clubId) { return get(`${getTeamApiUrl(clubId)}matches?status=FINISHED`); }
export function getCompetitions() { return get(`competitions`); }
export function getClubsByCompetition(competitionId) { return get(`competitions/${competitionId}/teams`); }