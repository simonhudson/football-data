'use strict';

import React from 'react';
import Crest from '../crest';
import ClubName from '../club-name';
import MainNavigation from '../navigation/main-navigation';
import './css/styles.scss';

const Header = props => {
	
	return (
		<div className="header" data-test="header">
			<Crest {...props} />
			<ClubName {...props} />
			<MainNavigation {...props} />
		</div>
	);

};

export default Header;
