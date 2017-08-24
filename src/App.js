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
                    <p> text </p>
                <DateTime />
                <LocInput />
                </main>
                <p> down here</p>
            </div>
        <div className = "footer" >
          <h2> we are here in the app </h2>
        </div>
        </div>

    );
}