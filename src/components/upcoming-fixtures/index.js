'use strict';

import React from 'react';
import FixtureItem from './item';

const UpcomingFixtures = props => {

	if (!props || !props.fixtures) return null;
	
	const NUMBER_OF_UPCOMING_FIXTURES_TO_DISPLAY = props.numberOfFixturesToDisplay || 3;
	const upcomingFixtures = props.fixtures.slice(0, NUMBER_OF_UPCOMING_FIXTURES_TO_DISPLAY);
		
	return (
		<div className="upcoming-fixtures" data-test="upcoming-fixtures">
			<h2>Upcoming fixtures</h2>
			{upcomingFixtures.map((fixture, index) => <FixtureItem key={index} fixture={fixture} />)}
		</div>
	);

};

export default UpcomingFixtures;
