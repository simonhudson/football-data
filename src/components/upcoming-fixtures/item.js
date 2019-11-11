'use strict';

import React from 'react';
const moment = require('moment');

const FixtureItem = props => {

	if (!props || !props.fixture) return null;
	
	const { fixture } = props;
	
	const formattedDateTime = timestamp => moment(fixture.utcDate).format('ddd Do MMM YYYY h:mma');

	return (
		<div data-test="upcoming-fixtures__item">
			<p data-test="upcoming-fixtures__item-date-time">{formattedDateTime()}</p>
			<p>
				<span data-test="upcoming-fixtures__item-home-team-name">{fixture.homeTeam.name}</span> vs
				<span data-test="upcoming-fixtures__item-away-team-name">{fixture.awayTeam.name}</span>
			</p>
		</div>
	);

};

export default FixtureItem;
