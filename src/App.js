'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';
import { getClub, getFixtures, getResults } from './utilities/api';
import Home from './components/views/home';
import Header from './components/header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clubName: null,
            crestUrl: null,
            currentView: 'home',
            fixtures: null,
            results: null
        };
    }

    componentDidMount = () => {
        getClub().then(response => {
            this.setState({
                crestUrl: response.crestUrl,
                clubName: response.name
            });
        });
        getFixtures().then(response => {
            this.setState({
                fixtures: response.matches
            });
        });
        getResults().then(response => {
            this.setState({
                results: response.matches
            });
        });
    }

    render = () => {
        
        const { state } = this;
        if (!state) return null;
        
        return (
            <div className="wrap">
                <main>
                    <Header clubName={state.clubName} src={state.crestUrl} />
                    <Home {...state} />
                </main>
            </div>
        );
    }
}

export default App;