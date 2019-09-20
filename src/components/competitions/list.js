'use strict';

import React, { Component } from 'react';
import { get } from '~/utilities/api';

class Competitions extends Component {

    constructor(props) {
		super(props);
        this.state = {};
        this.state.allData = [];
        this.state.currentData = [];
        this.countryFilter = React.createRef();
	}

    componentDidMount = () =>
        get('competitions').then(response => this.setState({ allData: response.competitions }));
    
    filterByCountry = () =>
        this.setState({ currentData: this.state.allData.filter(item => item.area.name === this.countryFilter.current.value) });

    render = () => {
        
        const { state } = this;
        const { allData, currentData } = state;
        
        if (!allData.length) return null;
        
        return (
            <>
                <select ref={this.countryFilter}>
                    <option value="">Choose country</option>
                    <option value="England">England</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Germany</option>
                </select>
                <button type="button" onClick={this.filterByCountry}>Filter</button>
                <ul>
                    {currentData.map((item, index) => <li key={index}>{item.name}</li>)}
                </ul>
            </>
        );
    }
}

export default Competitions;
