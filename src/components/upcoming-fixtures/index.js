'use strict';

import React from 'react';
import FixtureItem from './item';

const NUMBER_OF_UPCOMING_FIXTURES_TO_DISPLAY = 3;

const UpcomingFixtures = props => {

	if (!props || !props.fixtures) return null;
	
	const upcomingFixtures = props.fixtures.slice(0, NUMBER_OF_UPCOMING_FIXTURES_TO_DISPLAY);
		
	return (
		<div className="upcoming-fixtures">
			<h2>Upcoming fixtures</h2>
			{upcomingFixtures.map((fixture, index) => <FixtureItem fixture={fixture} />)}
		</div>
	);

};

export default UpcomingFixtures;
