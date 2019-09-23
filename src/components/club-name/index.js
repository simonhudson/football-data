'use strict';

import React from 'react';

const ClubName = props => {

	if (!props) return null;

	return (
		<h1>{props.clubName}</h1>
	);

};

export default ClubName;
