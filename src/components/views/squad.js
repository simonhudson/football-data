'use strict';

import React, { Component } from 'react';

class Squad extends Component {
	
	constructor(props) {
		super(props);
        this.state = {
			selectedPlayer: null
		};
	}

    componentDidMount = () => {
    }
	
	changeCurrentPlayer = e => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		const selectedPlayer = this.props.squad.find(item => item.id == e.target.dataset.playerId);
		this.setState({ selectedPlayer });
	};

	render = () => {
		
		const { props, state } = this;
		
		if (!props.squad) return null;
		
		const { selectedPlayer } = state;
		
		return (
			<div className="squad" data-test="view-squad">
				<div>
					<h1>Squad</h1>
					<ul className="squad__list">
						{props.squad.map((player, index) => {
							return (
								<li key={index}>
									<a href="#" onClick={((e) => this.changeCurrentPlayer(e))} data-player-id={player.id}>
										{player.shirtNumber} {player.name} ({player.position})
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				{!!selectedPlayer && (
					<div data-test="selected-player">
						<h2 data-test="selected-player__name">{selectedPlayer.name}</h2>
						<p data-test="selected-player__position">{selectedPlayer.position}</p>
						<p data-test="selected-player__age">{selectedPlayer.age}</p>
					</div>
				)}
			</div>
		);
	}
	
}

export default Squad;
