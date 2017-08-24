import React from 'react';
import './App.css';
import DateTime from './DateTime';
import LocInput from './LocInput';


export default function App(props) {
    return (
        <div>
            <div className="app">
                <header className = "navBar">
                    <div className ='navBarLinks'>
                    </div>
                </header>
                <main>
                    <h1> Around The Neighborhood </h1>
                <DateTime />
                <LocInput />
                </main>
            </div>
        </div>

    );
}