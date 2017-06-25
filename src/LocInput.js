import React, { Component } from 'react';
import './LocInput.css';

class LocInput extends Component {
  constructor(props){
    super(props);
    this.state = {
        userGuess: null,
        actualNum: 0,
        tempNumber : null,
        previousGuessesArr: [],
        };

this.handleClick = this.handleClick.bind(this);
this.numberGenerator = this.numberGenerator.bind(this) 
this.changeTempNumber = this.changeTempNumber.bind(this)
this.callAPI = this.callAPI.bind(this)
  }

  