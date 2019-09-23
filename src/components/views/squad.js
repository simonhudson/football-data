'use strict';

import React, { Component } from 'react';
import { getPlayer } from '../../utilities/api';

class Squad extends Component {
	
	constructor(props) {
		super(props);
        this.state = {
			currentPlayer: null
		};
	}

    componentDidMount = () => {
    }
	
	changeCurrentPlayer = e => {
		const selectedPlayerId = e.target.dataset.playerId;
		const currentPlayer = this.props.squad.find(item => item.id == selectedPlayerId);
		this.setState({ currentPlayer })
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	};

	render = () => {
		
		const { props, state } = this;
		
		return (
			<div className="squad">
				<div>
					<h2>Squad</h2>
					<ul className="squad__list">
						{props.squad.map((player, index) => {
							return (
								<li>
									<a href="#" onClick={((e) => this.changeCurrentPlayer(e))} data-player-id={player.id}>
										<strong>{player.shirtNumber} {player.name}</strong><br />
										{player.position}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				{!!state.currentPlayer && (
					<div>
						<h3>{state.currentPlayer.name}</h3>
					</div>
				)}
			</div>
		);
	}
	
};

export default Squad;
