import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Repos extends Component {

    render() {
        return (
            <div>
                <h1>Repos</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="userName"/>
                    <input type="text" placeholder="repo"/>
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        browserHistory.push(path)
    }

}
