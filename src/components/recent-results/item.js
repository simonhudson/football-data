'use strict';

import React from 'react';
const moment = require('moment');

const ResultItem = props => {

	if (!props) return null;
	
	const { result } = props;
	
	return (
		<>
			<p>{result.homeTeam.name} {result.score.fullTime.homeTeam} &mdash; {result.score.fullTime.awayTeam} {result.awayTeam.name}</p>  
		</>
	);

};

export default ResultItem;
