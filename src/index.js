//Just importing the specific dependencies we need to make React work
//Notice the naming conventions
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Don't worry about this line, it won't effect anything yet
import registerServiceWorker from './registerServiceWorker';
//Here we are telling React to attach itself to the DOM via ReactDOM.render. We are telling it to render our App component. We don't have to tell it to render our GuestList component beceause our App component takes care of that. This is best practice to only render a single parent component to the dom through ReactDOM.render
//We tell it to look in our HTML file in our /public folder and find a div with the ID of 'root'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
