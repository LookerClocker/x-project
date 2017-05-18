import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Custom extends Component {
    render() {
        return (
            <p className="App-intro">
                This is our custom component!
                <br/>
                <Link to="/">home</Link>
            </p>

        );
    }
}

