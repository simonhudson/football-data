'use strict';

import React from 'react';
import './css/styles.scss';

const Crest = props => {
	
	if (!props) return null;
	
	return (
		<img alt={props.clubName} className="crest" src={props.src} />
	);

};

export default Crest;
