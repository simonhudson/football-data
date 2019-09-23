'use strict';

import React from 'react';
import css from './css/styles.scss';

const NAVIGATION_ITEMS = [
	{ url: 'home', label: 'Home' },
	{ url: 'results', label: 'Results' },
	{ url: 'fixtures', label: 'Fixtures' },
	{ url: 'squad', label: 'Squad' },
];

const MainNavigation = props => {

	if (!props) return null;

	return (
		<nav className="main-navigation">
			<ul className="main-navigation__list">
			{NAVIGATION_ITEMS.map((item, index) => {
				return (
					<li className="main-navigation__item" key={index}>
						<button className="main-navigation__button" data-value={item.url} onClick={((e) => props.onNavigationClick(e))}>{item.label}</button>
					</li>
				)
			})}
			</ul>
		</nav>
	);

};

export default MainNavigation;
