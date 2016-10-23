import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Main from './container/Main/Main';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Main} />
            <Route path='/about' component={About}/>
            <Route path='/about/contact' component={Contact}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
