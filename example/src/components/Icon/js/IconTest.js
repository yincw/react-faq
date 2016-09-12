import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';
import '../less/icon';
import lock from '../images/lock.svg';
import geren from '../images/geren.svg';

ReactDOM.render(
    <div>
        <ul>
            <li>ss <Icon glyph={lock} width={40} height={40} /></li>
            <li>ss <Icon glyph={geren} width={40} height={40} /></li>
        </ul>
    </div>,
    app
);
