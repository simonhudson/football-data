'use strict';

import React from 'react';
import './css/styles.scss';

const NAVIGATION_ITEMS = [
	{ url: 'home', label: 'Home' },
	{ url: 'results', label: 'Results' },
	{ url: 'fixtures', label: 'Fixtures' },
	{ url: 'squad', label: 'Squad' },
];

const MainNavigation = props => {

	if (!props || !props.onNavigationClick) return null;

	return (
		<nav className="main-navigation" data-test="main-navigation">
			<ul className="main-navigation__list">
			{NAVIGATION_ITEMS.map((item, index) => {
				return (
					<li className="main-navigation__item" data-test="main-navigation__item" key={index}>
						<a className="main-navigation__link" data-test="main-navigation__link" data-value={item.url} href="#" onClick={((e) => props.onNavigationClick(e))}>{item.label}</a>
					</li>
				);
			})}
			</ul>
		</nav>
	);

};

export default MainNavigation;
