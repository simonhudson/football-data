'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';
import { getClub, getFixtures, getResults } from './functions';
import { transformSquad, transformResults } from './transform';
import ClubPicker from './components/club-picker';
import Fixtures from './components/views/fixtures';
import Header from './components/header';
import Home from './components/views/home';
import MainNavigation from './components/navigation/main-navigation';
import Results from './components/views/results';
import Squad from './components/views/squad';
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from '~/utilities/storage/local';

const CLUB_ID_STORAGE_KEY = 'clubId';

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
        if (this.state.clubId) this.getData();
    }
    
    componentDidUpdate = () => {
        if (this.state.clubId) this.getData();
    }
    
    setClub = e => {
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        this.setState({ clubId: parseInt(e.target.value, 10) });
    }
    
    clearClub = () => {
        this.setState({ clubId: null });
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
                {this.state.clubId && (
                    <>
                        <Header clubName={state.clubName} src={state.crestUrl} onClearClubClick={this.clearClub}/>
                        <main>
                            {state.currentView === 'home' && <Home {...state} />}
                            {state.currentView === 'results' && <Results {...state} />}
                            {state.currentView === 'fixtures' && <Fixtures {...state} />}
                            {state.currentView === 'squad' && <Squad {...state} />}
                        </main>
                        <MainNavigation onNavigationClick={this.onNavigationClick} />
                    </>
                )}
                {!this.state.clubId && (<ClubPicker onChange={this.setClub}/>)}
            </div>
        );
    }
}

export default App;