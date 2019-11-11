'use strict';

import React, { Component } from 'react';
import { getClubsByCompetition } from '~/functions';

const ENGLISH_CHAMPIONSHIP_COMPETITION_ID = '2016';

class ClubPicker extends Component {

    constructor(props) {
		super(props);
        this.state = {
            options: []
        };
	}

    getData = () => {
        getClubsByCompetition(ENGLISH_CHAMPIONSHIP_COMPETITION_ID).then(response => {
            const options = [];
            response.teams.forEach(team => options.push({ name: team.name, id: team.id }));
            this.setState({ options });
        });
    }

    componentDidMount = () => this.getData();
        
    componentDidUpdate = () => this.getData();

    render = () => {
        
        const { props, state } = this;
        
        if (!state.options.length) return null;
        
        return (
            <div data-test="club-picker">
                <label htmlFor="club-picker" data-test="club-picker__label">Choose your club</label>
                <select onChange={((e) => props.onChange(e))} id="club-picker" data-test="club-picker__select">
                    {state.options.map((item, index) => <option data-test="club-picker__option" key={index} value={item.id}>{item.name}</option>)}
                </select>
            </div>
        );
    }
}

export default ClubPicker;
