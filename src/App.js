import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import DateTime from './DateTime';
import LocInput from './LocInput';


export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">CommSoup</Link></h1>
                    <h1> <Link to="/results"> LocInput </Link> </h1>
                </header>
                <main>
                    <Route exact path="/" component={DateTime} />
                    <Route exact path="/LocInput" component={LocInput} />
                    <p> text </p>
                    
                </main>
            </div>
        </Router>
    );
}