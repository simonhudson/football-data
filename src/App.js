'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';

import Competitions from './components/competitions/list';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="wrap">
                <main>
                    <Competitions />
                </main>
            </div>
        );
    }
}

export default App;