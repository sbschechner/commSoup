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
  }

handleClick(){
	
}

  render() { 
    return(
      <div className ="scoreTableCont">

     </div>
      );
  }
}

export default LocInput;
