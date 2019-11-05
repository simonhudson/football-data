'use strict';

import React from 'react';

const ResultItem = props => {

	if (!props || !props.result) return null;
	
	const { result } = props;
	
	return (
		<>
			<p data-test="recent-results__item">
				<span data-test="recent-results__item-home-team-name">{result.homeTeam.name}</span>
				<span data-test="recent-results__item-home-team-score">{result.score.fullTime.homeTeam}</span> &mdash;
				<span data-test="recent-results__item-away-team-score">{result.score.fullTime.awayTeam}</span>
				<span data-test="recent-results__item-away-team-name">{result.awayTeam.name}</span>
			</p>  
		</>
	);

};

export default ResultItem;
