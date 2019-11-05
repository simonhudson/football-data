'use strict';

import React from 'react';
import './css/styles.scss';

const Crest = props => {
	
	if (!props || !props.clubName || !props.src) return null;
	
	return (
		<img alt={props.clubName} className="crest" data-test="crest" src={props.src} />
	);

};

export default Crest;
