'use strict';

import React from 'react';

const getOpposition = props => {
	if (props.homeTeam.id === process.env.TEAM_API_ID) return props.awayTeam.name;
	return props.homeTeam.name;
};

const NextFixture = props => {

	if (!props) return null;

	return (
		<div className="next-fixture">
			vs. {getOpposition(props)}
		</div>
	);

};

export default NextFixture;
