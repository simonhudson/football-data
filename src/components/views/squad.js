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
		const { selectedPlayer } = state;
		
		return (
			<div className="squad">
				{!!selectedPlayer && (
					<div>
						<h3>{selectedPlayer.name}</h3>
						<p>{selectedPlayer.position}</p>
						<p>{selectedPlayer.age}</p>
					</div>
				)}
				<div>
					<h2>Squad</h2>
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
			</div>
		);
	}
	
}

export default Squad;
