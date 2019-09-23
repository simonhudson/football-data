'use strict';

import React from 'react';
const moment = require('moment');

const ResultItem = props => {

	if (!props) return null;
	
	const { result } = props;
	
	const formattedDateTime = timestamp => moment(result.utcDate).format('ddd Do MMM YYYY h:mma');

	return (
		<>
			<p>{result.homeTeam.name} {result.score.fullTime.homeTeam} &mdash; {result.score.fullTime.awayTeam} {result.awayTeam.name}</p>  
		</>
	);

};

export default ResultItem;
