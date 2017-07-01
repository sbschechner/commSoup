import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import DateTime from './DateTime';
import LocInput from './LocInput';


export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header className = "navBar">
                    <div className ='navBarLinks'>
                      <h1><Link to="/">CommSoup</Link></h1>
                      <h1> <Link to="/results"> How it Works </Link> </h1>
                    </div>
                </header>
                <main>
                    <Route exact path="/" component={DateTime} />
                    <Route exact path="/" component={LocInput} />
                    <p> text </p>
                <DateTime />
                <LocInput />
                </main>
            </div>
        </Router>
    );
}