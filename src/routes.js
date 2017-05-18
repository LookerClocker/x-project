import React from 'react'
import { browserHistory, Router, Route, IndexRedirect, IndexRoute } from 'react-router'

import App from './App';
import Container from './Container';
import Custome from './Custom';

const Routes = props => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Container}>
                <IndexRoute component={App} />
                <Route path="/custome" component={Custome}/>
            </Route>
            <Route path="*">
                <IndexRedirect to="/"/>
            </Route>
        </Router>
    )
};

export default Routes;