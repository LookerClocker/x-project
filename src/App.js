import React, {Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                <br/>
                <Link to="/custome">custome</Link>
            </p>
        );
    }
}

