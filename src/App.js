import './App.css';

import React, { Component } from 'react';
import tabs from './tabs.json';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
const renderComp = (props) => {
    // console.log(route.route.path)
    const pathRoute = require(`./${props.route.path}`);
    return pathRoute.default;
};
const renderPath = (route) => {
    // console.log(`/${route.id}`);
    // return `/${route.id}`
};
const RouteWithSubRoutes = (props) => {
    // console.log(`/${props.route.id}`);
    const path = `/${props.route.id}`;
    return <Route component={renderComp(props)} path={path} />;
    /*<div >
        <Route component={renderComp(props)} />
    </div>*/
};
const RouteConfigExample = () => (
    <Router>
        <div>
            <ul>
                {tabs.map((tab, i) => (
                    <li key={tab.order}>
                        <Link to={`/${tab.id}`} > {tab.title} </Link>
                    </li>
                ))}
            </ul>
            {tabs.map((route, i) => (
                <RouteWithSubRoutes key={i} route={route} />
            ))}
        </div>
    </Router>
);
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: window.location.hash.substr(1),
            tabs: tabs
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        return (
            <div>
                <RouteConfigExample />
            </div>
        )

    }
}