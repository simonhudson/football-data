'use strict';

import React from 'react';
import ResultItem from './item';

const RecentResults = props => {

	if (!props || !props.results) return null;
	
	const NUMBER_OF_RECENT_RESULTS_TO_DISPLAY = props.numberOfResultsToDisplay || 3;
	const recentResults = props.results.slice(0, NUMBER_OF_RECENT_RESULTS_TO_DISPLAY);
	
	return (
		<div className="recent-results" data-test="recent-results">
			<h2>Recent results</h2>
			{recentResults.map((result, index) => <ResultItem key={index} result={result} />)}
		</div>
	);

};

export default RecentResults;
