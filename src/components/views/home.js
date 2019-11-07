'use strict';

import React from 'react';
import UpcomingFixtures from '../upcoming-fixtures';
import RecentResults from '../recent-results';

const Home = props => {

	if (!props) return null;
	
	return (
		<div data-test="view-home">
			<h1>Home</h1>
			<UpcomingFixtures {...props} />
			<RecentResults {...props} />
		</div>
	);

};

export default Home;
