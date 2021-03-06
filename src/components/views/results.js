'use strict';

import React from 'react';

const Results = props => {

	if (!props || !props.results) return null;

	return (
		<div data-test="view-results">
			<h1>Results</h1>
			{props.results.map((result, index) => <li key={index}>{result.homeTeam.name} {result.score.fullTime.homeTeam} &mdash; {result.score.fullTime.awayTeam} {result.awayTeam.name}</li>)}
		</div>
	);

};

export default Results;
