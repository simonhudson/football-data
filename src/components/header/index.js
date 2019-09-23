'use strict';

import React from 'react';
import Crest from '../crest';
import ClubName from '../club-name';
import css from './css/styles.scss';

const Header = props => {
	
	return (
		<div className="header">
			<Crest {...props} />
			<ClubName {...props} />
		</div>
	);

};

export default Header;
