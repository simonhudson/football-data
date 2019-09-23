'use strict';

import React from 'react';
import UpcomingFixtures from '../upcoming-fixtures';
import RecentResults from '../recent-results';

const Home = props => {

	if (!props) return null;
	
	return (
		<>
			<UpcomingFixtures {...props} />
			<RecentResults {...props} />
		</>
	);

};

export default Home;
