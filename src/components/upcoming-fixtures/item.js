'use strict';

import React from 'react';
const moment = require('moment');

const ResultItem = props => {

	if (!props) return null;
	
	const { fixture } = props;
	
	const formattedDateTime = timestamp => moment(fixture.utcDate).format('ddd Do MMM YYYY h:mma');

	return (
		<>
			<p>{formattedDateTime()}</p>
			<p>{fixture.homeTeam.name} vs {fixture.awayTeam.name}</p>
		</>
	);

};

export default ResultItem;
