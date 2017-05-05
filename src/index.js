import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

import Root from './routes'


let dom2 = document.getElementById('main-container');


render (
    <Root />,
    dom2
);
