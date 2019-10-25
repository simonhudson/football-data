'use strict';

import React from 'react';

const ClubName = props => {

	if (!props) return null;

	return (
		<h1 className="header__club-name">{props.clubName}</h1>
	);

};

export default ClubName;
