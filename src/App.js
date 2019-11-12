'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';
import { getClub, getFixtures, getResults } from './functions';
import { transformSquad, transformResults } from './transform';
import Fixtures from './components/views/fixtures';
import Header from './components/header';
import Home from './components/views/home';
import MainNavigation from './components/navigation/main-navigation';
import Results from './components/views/results';
import Squad from './components/views/squad';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clubName: null,
            clubId: null,
            clubCode: null,
            crestUrl: null,
            currentView: 'home',
            fixtures: null,
            squad: null,
            results: null
        };
    }
    
    getData = () => {
        getClub(this.state.clubId).then(response => {
            transformSquad(response.squad);
            this.setState({
                crestUrl: response.crestUrl,
                clubName: response.name,
                clubId: response.id,
                clubCode: response.tla,
                squad: response.squad
            });
        });
        getFixtures(this.state.clubId).then(response => {
            this.setState({
                fixtures: response.matches
            });
        });
        getResults(this.state.clubId).then(response => {
            transformResults(response.matches);
            this.setState({
                results: response.matches
            });
        });
    }

    componentDidMount = () => {
        this.getData();
    }
    
    onNavigationClick = e => {
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        this.setState({ currentView: e.target.dataset.value });
    };

    render = () => {
        
        const { state } = this;
        if (!state) return null;
        
        return (
            <div className="wrap">
                <Header clubName={state.clubName} src={state.crestUrl} onClearClubClick={this.clearClub}/>
                <main>
                    {state.currentView === 'home' && <Home {...state} />}
                    {state.currentView === 'results' && <Results {...state} />}
                    {state.currentView === 'fixtures' && <Fixtures {...state} />}
                    {state.currentView === 'squad' && <Squad {...state} />}
                </main>
                <MainNavigation onNavigationClick={this.onNavigationClick} />
            </div>
        );
    }
}

export default App;