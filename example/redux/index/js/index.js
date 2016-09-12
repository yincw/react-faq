import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Index extends Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
                    <li><Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
