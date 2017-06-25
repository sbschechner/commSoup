import React, { Component } from 'react';
import './LocInput.css';

class LocInput extends Component {
  constructor(props){
    super(props);
    this.state = {
    	latitutde: null,
    	longitude: null,
    	needManual: true,
    	manualLoc: null,
    	tempZip: null,
        };

this.getLoc = this.getLoc.bind(this);
this.showPosition = this.showPosition.bind(this);
this.manualInput = this.manualInput.bind(this);
this.changeTempNumber = this.changeTempNumber.bind(this);
this.handleClick = this.handleClick.bind(this);
  }

getLoc(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition());
        this.setState({
        	needManual : false
        })
	}
	else{
		return(
		<p> Seems like Location services arent available. Please enable locaiton services or we can put it in manually </p>
		)
		this.manualInput()
	}
}

/*
showPosition(position) {
var data = [...position]
 this.setState({
        	latitutde : data.latitude,
       	longitude : data.longitude
        })
}
*/

manualInput(){
 return(
 	<form>
       <label>
         Please enter your zip code:
        <input type='number' defaultValue = {this.state.tempZip}  onChange = {this.changeTempNumber}/>
        </label>
        <input type="submit" value="Submit Guess" onClick = {this.handleClick}/>
      </form>
	)
}

changeTempNumber(event){
	this.setState({tempZip : event.target.value})
	}

handleClick(event){
  event.preventDefault();
  this.setState({manualInput: this.state.tempZip})
}

  render() { 
    return(
      <div className ="LocInputCont">
      	<h2> Lets first find where you are </h2>
      	{this.getLoc()}

      	
     </div>
      );
  }
}

export default LocInput;
