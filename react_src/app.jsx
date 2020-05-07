import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

const title = <h2>Hello from Flask and React!</h2>;
const subtitle = <h4>A demo application using both of them.</h4>;

ReactDOM.render(title, document.getElementById('app-title'));
ReactDOM.render(subtitle, document.getElementById('app-subtitle'));

