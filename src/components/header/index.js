'use strict';

import React from 'react';
import Crest from '../crest';
import ClubName from '../club-name';
import './css/styles.scss';

const Header = props => {
	
	return (
		<div className="header" data-test="header">
			<Crest {...props} />
			<ClubName {...props} />
		</div>
	);

};

export default Header;
