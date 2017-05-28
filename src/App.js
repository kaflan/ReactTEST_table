import React, { Component } from 'react';
import tabs from './tabs.json';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
const renderComp = (props) => {
    const pathRoute = require(`./${props.route.path}`);
    return pathRoute.default;
};
const RouteWithSubRoutes = (props) => {
    const path = `/${props.route.id}`;
    const locationPath = window.location.pathname;
    if (path === locationPath) {
        return <Route component={renderComp(props)} path={path} />;
    }
    return null;
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
            <Switch>
                <Redirect from="/" to="/dummyTable" />
            </Switch>
            {tabs.map((route, i) => (
                <RouteWithSubRoutes key={i} route={route} />
            ))}
        </div>
    </Router>
);
export default class App extends Component {
    render() {
        return (
            <div>
                <RouteConfigExample />
            </div>
        )

    }
}