'use strict';

import React from 'react';
import Crest from '../crest';
import ClubName from '../club-name';
import MainNavigation from '../navigation/main-navigation';
import css from './css/styles.scss';

const Header = props => {
	
	return (
		<div className="header">
			<Crest {...props} />
			<ClubName {...props} />
			<MainNavigation {...props} />
		</div>
	);

};

export default Header;
