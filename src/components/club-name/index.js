'use strict';

import React from 'react';

const ClubName = props => {

	if (!props || !props.clubName) return null;

	return (
		<h1 className="header__club-name" data-test="club-name">{props.clubName}</h1>
	);

};

export default ClubName;
