'use strict';

import React from 'react';
import ResultItem from './item';

const NUMBER_OF_RECENT_RESULTS_TO_DISPLAY = 3;

const RecentResults = props => {

	if (!props || !props.results) return null;
	
	const recentResults = props.results.slice(-NUMBER_OF_RECENT_RESULTS_TO_DISPLAY).reverse();
	
	return (
		<div className="recent-results">
			<h2>Recent results</h2>
			{recentResults.map((result, index) => <ResultItem key={index} result={result} />)}
		</div>
	);

};

export default RecentResults;
