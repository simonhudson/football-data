'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

document.querySelector('html').classList.add('has-js');
const appRoot = document.getElementById('app-root');

if (appRoot) ReactDOM.render(<App />, appRoot);