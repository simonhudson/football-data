'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';
import { getClub, getFixtures } from './utilities/api';

import Header from './components/header';
import NextFixture from './components/next-fixture';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            crestUrl: null,
            clubName: null,
            fixtures: null
        };
    }

    componentDidMount = () => {
        getClub().then(response => {
            if (!response) return;
            this.setState({
                crestUrl: response.crestUrl,
                clubName: response.name
            });
        });
        getFixtures().then(response => {
            if (!response) return;
            this.setState({ fixtures: response.matches });
        });
    }

    render = () => {
        
        const { state } = this;
        if (!state) return null;
        
        return (
            <div className="wrap">
                <main>
                    <Header clubName={state.clubName} src={state.crestUrl} />
                </main>
            </div>
        );
    }
}

export default App;